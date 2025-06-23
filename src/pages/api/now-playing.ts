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

  return response.json();
}

export const GET: APIRoute = async () => {
  try {
    console.log('API endpoint called');
    console.log('Environment variables check:', {
      hasClientId: !!client_id,
      hasClientSecret: !!client_secret,
      hasRefreshToken: !!refresh_token
    });

    const { access_token } = await getAccessToken();
    console.log('Access token obtained:', !!access_token);

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log('Spotify API response status:', response.status);

    if (response.status === 204 || response.status > 400) {
      console.log('No content or error from Spotify API');
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const song = await response.json();
    console.log('Spotify song data:', song);

    if (song.item === null) {
      console.log('No song item in response');
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    console.log('Processed song data:', { isPlaying, title, artist });

    return new Response(
      JSON.stringify({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}; 