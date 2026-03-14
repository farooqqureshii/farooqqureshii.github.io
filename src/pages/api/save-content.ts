import type { APIRoute } from "astro";

export const prerender = false;

interface SavedItem {
  id: string;
  type: string;
  title?: string;
  url: string;
  source?: string;
  thumbnail?: string;
  date: string;
  description?: string;
}

export const POST: APIRoute = async ({ request }) => {
  const gistId = import.meta.env.GIST_ID;
  const token = import.meta.env.GITHUB_TOKEN;
  const addSecret = import.meta.env.ADD_SECRET;

  if (!gistId || !token || !addSecret) {
    return new Response(
      JSON.stringify({ error: "Server not configured for live save" }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await request.json();
    const { secret, item } = body as { secret?: string; item?: SavedItem };

    if (secret !== addSecret || !item?.url) {
      return new Response(
        JSON.stringify({ error: "Unauthorized or invalid request" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    const filename = import.meta.env.GIST_FILENAME || "saved.json";

    const getRes = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!getRes.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch Gist" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const gist = await getRes.json();
    const file = gist.files?.[filename];
    let content: SavedItem[] = [];

    if (file?.content) {
      try {
        content = JSON.parse(file.content);
      } catch {
        content = [];
      }
    }

    const newItem: SavedItem = {
      id: item.id || `item-${Date.now()}`,
      type: item.type || "link",
      url: item.url,
      date: item.date || new Date().toISOString().slice(0, 10),
      ...(item.title && { title: item.title }),
      ...(item.source && { source: item.source }),
      ...(item.thumbnail && { thumbnail: item.thumbnail }),
      ...(item.description && { description: item.description }),
    };

    content.unshift(newItem);

    const patchRes = await fetch(`https://api.github.com/gists/${gistId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: {
          [filename]: {
            content: JSON.stringify(content, null, 2),
          },
        },
      }),
    });

    if (!patchRes.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to update Gist" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, url: item.url }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
