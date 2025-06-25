export { renderers } from '../../../renderers.mjs';

const fetchCache = "force-no-store";
const prerender = false;
const client_id = "b8ef6c904cae485d87b613a1d8d46176";
const client_secret = "9783741b576e4dd3be1f0953a0d4d566";
const refresh_token = "AQBIP1EgPqhVyDqCgwLnV5h4tLgeZOnH6JxvUpYJYXmBvRKTmLXQKqMj8FJO6fWt1pEmYqXE68SYtlCEMs_42WCk0GbHEnH_h1VKVlPo6StmsdyzdVodf2E4g62vn_WHNSQ";
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
async function getAccessToken() {
  try {
    console.log("Attempting to get access token...");
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token || ""
      }),
      cache: "no-store"
    });
    const data = await response.json();
    console.log("Token refresh response status:", response.status);
    console.log("Token refresh response:", data);
    if (!data.access_token) {
      console.error("No access token in response:", data);
      throw new Error("No access token received");
    }
    return data;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
}
const GET = async ({ params }) => {
  try {
    console.log("DYNAMIC ROUTE API endpoint called with params:", params);
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const randomId = Math.random().toString(36).substring(7);
    const { access_token } = await getAccessToken();
    console.log("Access token obtained:", !!access_token);
    if (!access_token) {
      console.error("No access token received from Spotify");
      return new Response(JSON.stringify({ isPlaying: false, error: "No access token", timestamp: now, randomId }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0, must-revalidate"
        }
      });
    }
    console.log("Fetching from Spotify API with token:", access_token.substring(0, 20) + "...");
    const response = await fetch(`${NOW_PLAYING_ENDPOINT}?t=${Date.now()}&r=${randomId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      },
      cache: "no-store"
    });
    console.log("Spotify API response status:", response.status);
    if (response.status === 204 || response.status > 400) {
      console.log("No content or error from Spotify API");
      return new Response(JSON.stringify({ isPlaying: false, error: "Spotify API returned no content or error", status: response.status, timestamp: now, randomId }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0, must-revalidate"
        }
      });
    }
    let song;
    try {
      song = await response.json();
      console.log("Raw Spotify API response:", JSON.stringify(song, null, 2));
    } catch (jsonErr) {
      console.error("Error parsing Spotify response as JSON:", jsonErr);
      return new Response(JSON.stringify({ isPlaying: false, error: "Invalid JSON from Spotify", timestamp: now, randomId }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0, must-revalidate"
        }
      });
    }
    console.log("Spotify song data:", song);
    if (!song || song.item === null) {
      console.log("No song item in response");
      return new Response(JSON.stringify({ isPlaying: false, error: "No song item", timestamp: now, randomId }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0, must-revalidate"
        }
      });
    }
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;
    console.log("Processed song data:", { isPlaying, title, artist, device: song.device?.name || "unknown device" });
    return new Response(
      JSON.stringify({
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
        timestamp: now,
        device: song.device?.name || "unknown",
        randomId
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0, must-revalidate"
        }
      }
    );
  } catch (error) {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const randomId = Math.random().toString(36).substring(7);
    console.error("Error fetching Spotify data:", error);
    return new Response(JSON.stringify({ isPlaying: false, error: String(error), timestamp: now, randomId }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0, must-revalidate"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  fetchCache,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
