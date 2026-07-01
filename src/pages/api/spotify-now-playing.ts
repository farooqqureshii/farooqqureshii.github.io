import type { APIRoute } from 'astro';
import { getSpotifyAccessToken } from '../../lib/spotify';

const resolveSpotifySongUrl = async (songName: string, artistName: string, lastFmTrackUrl?: string): Promise<string> => {
  if (lastFmTrackUrl) {
    try {
      const response = await fetch(lastFmTrackUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36',
        },
      });

      if (response.ok) {
        const html = await response.text();
        const match = html.match(/href="(https:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+)"/);
        if (match && match[1]) {
          return match[1];
        }
      }
    } catch (err) {
      console.error('Error resolving Spotify track URL from Last.fm:', err);
    }
  }

  const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;

  if (client_id && client_secret) {
    try {
      const accessToken = await getSpotifyAccessToken();
      const cleanSongName = songName
        .replace(/\s*-\s*remaster(ed)?\s*\d{4}?/gi, '')
        .replace(/\([^)]*\)/g, ' ')
        .replace(/\[[^\]]*\]/g, ' ')
        .trim();

      const query = `track:${cleanSongName} artist:${artistName}`;
      const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=1`;
      
      const res = await fetch(searchUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        const track = data?.tracks?.items?.[0];
        if (track?.external_urls?.spotify) {
          return track.external_urls.spotify;
        }
      }
    } catch (err) {
      console.error('Error resolving Spotify URL via search API:', err);
    }
  }

  // Fallback to Spotify search page
  return `https://open.spotify.com/search/${encodeURIComponent(`${songName} ${artistName}`)}`;
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
    const songUrl = await resolveSpotifySongUrl(songName, artistName, track.url);

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

