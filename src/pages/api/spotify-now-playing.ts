import type { APIRoute } from 'astro';

const slugify = (value: string) =>
  value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const buildGeniusCandidates = (songName: string, artistName: string) => {
  const songSlug = slugify(songName.replace(/\s*-\s*remaster(ed)?\s*\d{4}?/gi, ''));
  const artistSlug = slugify(artistName);

  return [
    `https://genius.com/${artistSlug}-${songSlug}-lyrics`,
    `https://genius.com/${songSlug}-lyrics`,
    `https://genius.com/${artistSlug}-${songSlug}`,
    `https://genius.com/${songSlug}`,
  ].filter((url, index, urls) => urls.indexOf(url) === index);
};

const resolveGeniusSongUrl = async (songName: string, artistName: string) => {
  for (const candidate of buildGeniusCandidates(songName, artistName)) {
    try {
      const response = await fetch(candidate, {
        method: 'HEAD',
        redirect: 'manual',
      });

      if (response.ok || [301, 302, 307, 308].includes(response.status)) {
        return candidate;
      }
    } catch {
      // Try the next candidate.
    }
  }

  return `https://genius.com/search?q=${encodeURIComponent(`${songName} ${artistName}`)}`;
};

export const GET: APIRoute = async () => {
  try {
    const username = import.meta.env.LASTFM_USERNAME;
    const apiKey = import.meta.env.LASTFM_API_KEY;

    if (!username || !apiKey) {
      return new Response(
        JSON.stringify({ 
          isPlaying: false,
          error: 'Missing Last.fm credentials' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const lastFmUrl = new URL('https://ws.audioscrobbler.com/2.0/');
    lastFmUrl.searchParams.set('method', 'user.getrecenttracks');
    lastFmUrl.searchParams.set('user', username);
    lastFmUrl.searchParams.set('api_key', apiKey);
    lastFmUrl.searchParams.set('format', 'json');
    lastFmUrl.searchParams.set('limit', '1');

    const response = await fetch(lastFmUrl.toString(), {
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Last.fm API error:', errorData);
      throw new Error(`Failed to fetch Last.fm data: ${response.status} ${errorData}`);
    }

    const data = await response.json();
    const track = data?.recenttracks?.track?.[0];

    if (!track) {
      return new Response(
        JSON.stringify({
          isPlaying: false,
          lastPlayed: false,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const isPlaying = track?.['@attr']?.nowplaying === 'true';

    const artistName = track.artist?.['#text'] || track.artist?.name || 'Unknown artist';
    const songName = track.name || 'Unknown song';
  const songUrl = await resolveGeniusSongUrl(songName, artistName);

    return new Response(
      JSON.stringify({
        isPlaying,
        lastPlayed: true,
        title: songName,
        artist: artistName,
        songUrl,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Spotify API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        isPlaying: false,
        lastPlayed: false,
        error: 'Failed to fetch Spotify data',
        details: errorMessage,
      }),
      {
        status: 200, // Return 200 so frontend can handle gracefully
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

