import type { APIRoute } from 'astro';
import vercel from '@astrojs/vercel';

export const prerender = false;

const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      redirect_uri: 'https://spotify-refresh-token-generator.netlify.app',
    }),
  });

  const data = await response.json();
  console.log('Vercel Access token response:', data);
  return data.access_token;
}

export const GET: APIRoute = async () => {
  try {
    const access_token = await getAccessToken();

    const response = await fetch('https://api.spotify.com/v1/me/player', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204 || response.status === 404) {
      return new Response(JSON.stringify({ isPlaying: false }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Cache-Control': 'no-store',
        },
      });
    }

    const data = await response.json();
    console.log('Vercel Spotify API response:', JSON.stringify(data, null, 2));
    const track = data.item;
    if (track) {
      // console.log('Currently playing track:', track.name, 'by', track.artists.map((a: any) => a.name).join(', '));
    } else {
      // console.log('No track is currently playing.');
    }

    return new Response(JSON.stringify({
      isPlaying: data.is_playing,
      title: track?.name,
      artist: track?.artists.map((a: any) => a.name).join(', '),
      url: track?.external_urls?.spotify || null,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Error fetching now playing:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch now playing' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Cache-Control': 'no-store',
      },
    });
  }
};

export const adapter = vercel({}); 