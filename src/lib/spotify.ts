const getSpotifyAccessToken = async () => {
  const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
  const creds = btoa(`${client_id}:${client_secret}`);

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${creds}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });
  const data = await res.json();
  return data.access_token;
};

export const getPlaylistTracks = async (playlistId: string) => {
  const accessToken = await getSpotifyAccessToken();
  const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data.items.map((item: any) => item.track);
}; 