# Personal Website, Version 3 ⌨️

🔨 Astro, TS, Tailwind

## Spotify Integration Setup

To enable the Spotify "Now Playing" feature, you need to set up environment variables:

1. Create a `.env` file in the root directory
2. Add your Spotify credentials:
```
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_REFRESH_TOKEN=your_refresh_token_here
```

3. For Vercel deployment, add these same environment variables in your Vercel project settings.

The Spotify integration will show your currently playing track in the footer with a marquee animation and music bars when playing.
