import type { APIRoute } from "astro";
import { savedContent } from "../../data/savedContent";

export const prerender = false;

export const GET: APIRoute = async () => {
  const gistId = import.meta.env.GIST_ID;
  const token = import.meta.env.GITHUB_TOKEN;

  if (!gistId || !token) {
    return new Response(JSON.stringify(savedContent), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    });
  }

  try {
    const res = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return new Response(JSON.stringify(savedContent), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60",
        },
      });
    }

    const gist = await res.json();
    const filename = import.meta.env.GIST_FILENAME || "saved.json";
    const file = gist.files?.[filename];

    if (!file?.content) {
      return new Response(JSON.stringify(savedContent), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60",
        },
      });
    }

    const content = JSON.parse(file.content);
    return new Response(JSON.stringify(content), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch {
    return new Response(JSON.stringify(savedContent), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    });
  }
};
