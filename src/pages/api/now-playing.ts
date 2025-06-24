import type { APIRoute } from 'astro';

const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

// Check if all required environment variables are present
console.log('Loaded env:', {
  id: import.meta.env.SPOTIFY_CLIENT_ID,
  secret: import.meta.env.SPOTIFY_CLIENT_SECRET,
  refresh: import.meta.env.SPOTIFY_REFRESH_TOKEN
});

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

async function getAccessToken() {
  try {
    console.log('Attempting to get access token...');
    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token || '',
      }),
    });

    const data = await response.json();
    console.log('Token refresh response status:', response.status);
    console.log('Token refresh response:', data);
    
    if (!data.access_token) {
      console.error('No access token in response:', data);
      throw new Error('No access token received');
    }
    
    return data;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

export const GET: APIRoute = async () => {
  try {
    console.log('API endpoint called');
    console.log('Loaded env:', {
      id: import.meta.env.SPOTIFY_CLIENT_ID,
      secret: import.meta.env.SPOTIFY_CLIENT_SECRET,
      refresh: import.meta.env.SPOTIFY_REFRESH_TOKEN
    });
    const now = new Date().toISOString();

    const { access_token } = await getAccessToken();
    console.log('Access token obtained:', !!access_token);

    if (!access_token) {
      console.error('No access token received from Spotify');
      return new Response(JSON.stringify({ isPlaying: false, error: 'No access token', timestamp: now }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      });
    }

    console.log('Fetching from Spotify API with token:', access_token.substring(0, 20) + '...');
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log('Spotify API response status:', response.status);
    console.log('Spotify API response headers:', Object.fromEntries(response.headers.entries()));

    if (response.status === 204 || response.status > 400) {
      console.log('No content or error from Spotify API');
      return new Response(JSON.stringify({ isPlaying: false, error: 'Spotify API returned no content or error', status: response.status, timestamp: now }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      });
    }

    let song;
    try {
      song = await response.json();
      console.log('Raw Spotify API response:', JSON.stringify(song, null, 2));
    } catch (jsonErr) {
      console.error('Error parsing Spotify response as JSON:', jsonErr);
      return new Response(JSON.stringify({ isPlaying: false, error: 'Invalid JSON from Spotify', timestamp: now }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      });
    }
    console.log('Spotify song data:', song);

    if (!song || song.item === null) {
      console.log('No song item in response');
      return new Response(JSON.stringify({ isPlaying: false, error: 'No song item', timestamp: now }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    console.log('Processed song data:', { isPlaying, title, artist, device: song.device?.name || 'unknown device' });

    return new Response(
      JSON.stringify({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
        timestamp: now,
        device: song.device?.name || 'unknown',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch (error) {
    const now = new Date().toISOString();
    console.error('Error fetching Spotify data:', error);
    return new Response(JSON.stringify({ isPlaying: false, error: String(error), timestamp: now }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  }
}; 