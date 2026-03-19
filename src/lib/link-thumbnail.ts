import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { createHash } from "crypto";
import { pdf } from "pdf-to-img";

const CACHE_PATH = join(process.cwd(), ".cache", "artifact-thumbnails.json");
const THUMBNAILS_DIR = join(process.cwd(), "public", "thumbnails");

function isTweetUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.hostname === "x.com" || u.hostname === "twitter.com";
  } catch {
    return false;
  }
}

function isPdfUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.pathname.toLowerCase().endsWith(".pdf");
  } catch {
    return false;
  }
}

function loadCache(): Record<string, string | null> {
  try {
    if (existsSync(CACHE_PATH)) {
      return JSON.parse(readFileSync(CACHE_PATH, "utf-8"));
    }
  } catch {}
  return {};
}

function saveCache(cache: Record<string, string | null>): void {
  try {
    mkdirSync(join(process.cwd(), ".cache"), { recursive: true });
    writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 0));
  } catch {}
}

const PAGESHOT_PREFIX = "https://pageshot.site/";

/**
 * Fetch a URL's HTML and extract thumbnail from Open Graph / Twitter meta tags.
 * Raindrop-style: try og:image first, then twitter:image, resolve relative URLs.
 * If none found, capture a full-page screenshot as fallback.
 * Caches results to avoid re-fetching on every build.
 */
export async function getLinkThumbnail(url: string): Promise<string | null> {
  const cache = loadCache();
  const cached = cache[url];
  if (cached !== undefined && cached !== null) {
    if (cached.startsWith(PAGESHOT_PREFIX)) {
      const local = isPdfUrl(url)
        ? await fetchPdfFirstPageFallback(url)
        : await migratePageShotToLocal(url, cached);
      if (local) {
        cache[url] = local;
        saveCache(cache);
        return local;
      }
    }
    return cached;
  }
  if (cached === null) {
    const screenshot = isTweetUrl(url)
      ? null
      : isPdfUrl(url)
        ? await fetchPdfFirstPageFallback(url)
        : await fetchScreenshotFallback(url);
    if (screenshot) {
      cache[url] = screenshot;
      saveCache(cache);
      return screenshot;
    }
    return null;
  }

  let result = await fetchThumbnail(url);
  if (!result) {
    if (isTweetUrl(url)) {
      result = null;
    } else if (isPdfUrl(url)) {
      result = await fetchPdfFirstPageFallback(url);
    } else {
      result = await fetchScreenshotFallback(url);
    }
  }
  cache[url] = result;
  saveCache(cache);
  return result;
}

/** Migrate cached PageShot API URLs to local files (avoids CORS/img load failures). */
async function migratePageShotToLocal(
  url: string,
  pageshotUrl: string
): Promise<string | null> {
  const hash = createHash("sha256").update(url).digest("hex").slice(0, 16);
  const ext =
    pageshotUrl.includes("format=webp")
      ? "webp"
      : pageshotUrl.includes("format=jpeg") || pageshotUrl.includes("format=jpg")
        ? "jpg"
        : "png";
  const filename = `${hash}.${ext}`;
  const filepath = join(THUMBNAILS_DIR, filename);
  if (existsSync(filepath)) return `/thumbnails/${filename}`;

  try {
    const res = await fetch(pageshotUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; LinkPreview/1.0; +https://farooqqureshi.com)",
      },
    });
    if (!res.ok) return null;
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 100) return null;
    mkdirSync(THUMBNAILS_DIR, { recursive: true });
    writeFileSync(filepath, buffer);
    return `/thumbnails/${filename}`;
  } catch {
    return null;
  }
}

async function fetchThumbnail(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; LinkPreview/1.0; +https://farooqqureshi.com)",
      },
      redirect: "follow",
    });

    if (!res.ok) return null;

    const html = await res.text();
    const baseUrl = new URL(res.url);

    // 1. og:image
    const og = extractMeta(html, "og:image");
    if (og) return resolveUrl(og, baseUrl);

    // 2. twitter:image
    const twitter = extractMeta(html, "twitter:image");
    if (twitter) return resolveUrl(twitter, baseUrl);

    return null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * For PDF URLs: fetch the PDF and render first page to image.
 */
async function fetchPdfFirstPageFallback(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; LinkPreview/1.0; +https://farooqqureshi.com)",
      },
    });
    if (!res.ok) return null;

    const buffer = Buffer.from(await res.arrayBuffer());
    const base64 = buffer.toString("base64");
    const dataUrl = `data:application/pdf;base64,${base64}`;

    const document = await pdf(dataUrl, { scale: 1.5 });
    const firstPage = await document.getPage(1);
    if (!firstPage || firstPage.length === 0) return null;

    const hash = createHash("sha256").update(url).digest("hex").slice(0, 16);
    const filename = `${hash}.png`;
    mkdirSync(THUMBNAILS_DIR, { recursive: true });
    const filepath = join(THUMBNAILS_DIR, filename);
    writeFileSync(filepath, firstPage);

    return `/thumbnails/${filename}`;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Capture a full-page screenshot when og:image/twitter:image are unavailable.
 * Uses PageShot API (free, no API key). Saves to public/thumbnails/ for serving.
 */
async function fetchScreenshotFallback(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);

  try {
    const apiUrl = new URL("https://pageshot.site/v1/screenshot");
    apiUrl.searchParams.set("url", url);
    apiUrl.searchParams.set("full_page", "true");
    apiUrl.searchParams.set("width", "1200");
    apiUrl.searchParams.set("format", "webp");

    const res = await fetch(apiUrl.toString(), {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) return null;

    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 100) return null;

    const hash = createHash("sha256").update(url).digest("hex").slice(0, 16);
    const filename = `${hash}.webp`;
    mkdirSync(THUMBNAILS_DIR, { recursive: true });
    const filepath = join(THUMBNAILS_DIR, filename);
    writeFileSync(filepath, buffer);

    return `/thumbnails/${filename}`;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/** Fetch thumbnails for multiple URLs in parallel (batched to avoid overload). */
export async function getLinkThumbnails(
  urls: string[],
  concurrency = 5
): Promise<Map<string, string | null>> {
  const result = new Map<string, string | null>();
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const thumbnails = await Promise.all(batch.map((url) => getLinkThumbnail(url)));
    batch.forEach((url, j) => result.set(url, thumbnails[j]));
  }
  return result;
}

function extractMeta(html: string, property: string): string | null {
  // Match: property="og:image" content="..." or content="..." property="og:image"
  // Also handle single quotes and meta name (twitter uses name)
  const patterns = [
    new RegExp(
      `<meta[^>]+(?:property|name)=["']${escapeRe(property)}["'][^>]+content=["']([^"']+)["']`,
      "i"
    ),
    new RegExp(
      `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${escapeRe(property)}["']`,
      "i"
    ),
  ];

  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return decodeHtml(m[1].trim());
  }
  return null;
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function decodeHtml(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function resolveUrl(href: string, base: URL): string {
  try {
    return new URL(href, base).href;
  } catch {
    return href;
  }
}
