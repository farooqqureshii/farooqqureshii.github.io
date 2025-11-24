import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
    const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

    if (!client_id || !client_secret || !refresh_token) {
      return new Response(
        JSON.stringify({ 
          isPlaying: false,
          error: 'Missing Spotify credentials' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Get access token using refresh token
    const credentials = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
      }),
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('Token refresh error:', errorData);
      throw new Error(`Failed to refresh access token: ${tokenResponse.status} ${errorData}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get player state first to check if there's a paused track
    const playerStateResponse = await fetch(
      'https://api.spotify.com/v1/me/player',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    // Get currently playing track
    const nowPlayingResponse = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    // Check if there's a paused track in player state
    if (playerStateResponse.ok && playerStateResponse.status !== 204) {
      try {
        const playerState = await playerStateResponse.json();
        if (playerState && playerState.item && !playerState.is_playing) {
          // Track is paused
          return new Response(
            JSON.stringify({
              isPlaying: false,
              lastPlayed: true,
              title: playerState.item.name,
              artist: playerState.item.artists.map((a: any) => a.name).join(', '),
              songUrl: playerState.item.external_urls?.spotify || null,
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            }
          );
        }
      } catch (parseError) {
        console.error('Error parsing player state JSON:', parseError);
      }
    }

    if (nowPlayingResponse.status === 204 || !nowPlayingResponse.ok) {
      // No track currently playing - get last played track
      try {
        const recentlyPlayedResponse = await fetch(
          'https://api.spotify.com/v1/me/player/recently-played?limit=1',
          {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          }
        );

        if (recentlyPlayedResponse.ok && recentlyPlayedResponse.status !== 204) {
          try {
            const recentlyPlayedData = await recentlyPlayedResponse.json();
            if (recentlyPlayedData.items && recentlyPlayedData.items.length > 0) {
              const lastTrack = recentlyPlayedData.items[0].track;
              return new Response(
                JSON.stringify({
                  isPlaying: false,
                  lastPlayed: true,
                  title: lastTrack.name,
                  artist: lastTrack.artists.map((a: any) => a.name).join(', '),
                  songUrl: lastTrack.external_urls?.spotify || null,
                }),
                {
                  status: 200,
                  headers: { 'Content-Type': 'application/json' },
                }
              );
            }
          } catch (parseError) {
            console.error('Error parsing recently played JSON:', parseError);
          }
        } else {
          console.error('Recently played API error:', recentlyPlayedResponse.status);
        }
      } catch (recentError) {
        console.error('Error fetching recently played:', recentError);
      }

      // No recently played tracks either
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

    // Parse the currently playing track (only if we have a valid response)
    let trackData = null;
    try {
      trackData = await nowPlayingResponse.json();
    } catch (parseError) {
      console.error('Error parsing now playing JSON:', parseError);
      // Fall through to get last played track
    }

    // Check if there's a valid track playing (not an ad)
    // Ads typically have item: null, so we check if item exists and has a name
    if (trackData && trackData.item && trackData.item.name && trackData.item.artists) {
      return new Response(
        JSON.stringify({
          isPlaying: true,
          title: trackData.item.name,
          artist: trackData.item.artists.map((a: any) => a.name).join(', '),
          songUrl: trackData.item.external_urls?.spotify || null,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // If we get here, either no track is playing or it's an ad
    // Get last played track instead
    try {
      const recentlyPlayedResponse = await fetch(
        'https://api.spotify.com/v1/me/player/recently-played?limit=1',
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (recentlyPlayedResponse.ok) {
        const recentlyPlayedData = await recentlyPlayedResponse.json();
        if (recentlyPlayedData.items && recentlyPlayedData.items.length > 0) {
          const lastTrack = recentlyPlayedData.items[0].track;
          return new Response(
            JSON.stringify({
              isPlaying: false,
              lastPlayed: true,
              title: lastTrack.name,
              artist: lastTrack.artists.map((a: any) => a.name).join(', '),
              songUrl: lastTrack.external_urls?.spotify || null,
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            }
          );
        }
      }
    } catch (recentError) {
      console.error('Error fetching recently played:', recentError);
    }

    // Fallback: return last played from player state if available
    if (playerStateResponse.ok && playerStateResponse.status !== 204) {
      try {
        const playerState = await playerStateResponse.json();
        if (playerState && playerState.item) {
          return new Response(
            JSON.stringify({
              isPlaying: false,
              lastPlayed: true,
              title: playerState.item.name,
              artist: playerState.item.artists.map((a: any) => a.name).join(', '),
              songUrl: playerState.item.external_urls?.spotify || null,
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            }
          );
        }
      } catch (parseError) {
        console.error('Error parsing player state JSON in fallback:', parseError);
      }
    }

    // Last resort: return empty state (shouldn't happen, but handle gracefully)
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
  } catch (error) {
    console.error('Spotify API error:', error);
    // On error, try to get last played track as fallback
    // This prevents showing "error loading track" to users
    try {
      const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
      const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
      const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;

      if (client_id && client_secret && refresh_token) {
        const credentials = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token,
          }),
        });

        if (tokenResponse.ok && tokenResponse.status !== 204) {
          try {
            const tokenData = await tokenResponse.json();
            const accessToken = tokenData.access_token;

            const recentlyPlayedResponse = await fetch(
              'https://api.spotify.com/v1/me/player/recently-played?limit=1',
              {
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                },
              }
            );

            if (recentlyPlayedResponse.ok && recentlyPlayedResponse.status !== 204) {
              try {
                const recentlyPlayedData = await recentlyPlayedResponse.json();
                if (recentlyPlayedData.items && recentlyPlayedData.items.length > 0) {
                  const lastTrack = recentlyPlayedData.items[0].track;
                  return new Response(
                    JSON.stringify({
                      isPlaying: false,
                      lastPlayed: true,
                      title: lastTrack.name,
                      artist: lastTrack.artists.map((a: any) => a.name).join(', '),
                      songUrl: lastTrack.external_urls?.spotify || null,
                    }),
                    {
                      status: 200,
                      headers: { 'Content-Type': 'application/json' },
                    }
                  );
                }
              } catch (parseError) {
                console.error('Error parsing recently played JSON in fallback:', parseError);
              }
            }
          } catch (parseError) {
            console.error('Error parsing token JSON in fallback:', parseError);
          }
        }
      }
    } catch (fallbackError) {
      console.error('Fallback error:', fallbackError);
    }

    // If all else fails, return a response that will show last played
    // The frontend will handle this gracefully
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

