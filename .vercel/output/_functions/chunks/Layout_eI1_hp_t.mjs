import { c as createComponent, m as maybeRenderHead, q as renderScript, a as renderTemplate, r as renderComponent, f as createAstro, s as renderSlot, e as addAttribute, b as renderHead } from './astro/server_DeArHbKV.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                         */
import { twMerge } from 'tailwind-merge';

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="inline-flex items-center rounded-md border p-1 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800 [&_svg]:text-zinc-500 [&_svg]:hover:text-zinc-900 [&_svg]:dark:hover:text-zinc-100" aria-label="Toggle theme"> <span class="sr-only">Toggle theme</span> <svg id="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="hidden size-4 dark:block"> <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z"></path> </svg> <svg id="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4 dark:hidden"> <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z"></path> </svg> </button> ${renderScript($$result, "C:/dev/Some Fixes/farooqqureshii.github.io/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="mb-6 mt-4 flex items-center justify-between" data-astro-cid-3ef6ksr2> <nav class="flex items-center gap-4" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>home</a> <a href="/writing" data-astro-cid-3ef6ksr2>writing</a> <a href="/misc" data-astro-cid-3ef6ksr2>misc</a> <a href="/artifacts" data-astro-cid-3ef6ksr2>artifacts</a> <a href="/projects" data-astro-cid-3ef6ksr2>projects</a> </nav> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </header> `;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/components/Header.astro", void 0);

const $$SpotifyNowPlaying = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-0.5 text-xs text-zinc-500" data-astro-cid-a3qsdpjt> <div class="flex items-center gap-2" data-astro-cid-a3qsdpjt> <div class="flex items-center gap-1" data-astro-cid-a3qsdpjt> <span id="now-playing-label" data-astro-cid-a3qsdpjt></span> <div class="overflow-hidden max-w-[200px]" data-astro-cid-a3qsdpjt> <a id="now-playing-link" href="#" target="_blank" rel="noopener noreferrer" class="hover:underline" data-astro-cid-a3qsdpjt> <span id="now-playing" class="marquee-text" data-astro-cid-a3qsdpjt>Loading...</span> </a> </div> </div> <div class="flex items-center gap-0.5 h-2" id="now-playing-bars" data-astro-cid-a3qsdpjt> <div class="bar bar1" data-astro-cid-a3qsdpjt></div> <div class="bar bar2" data-astro-cid-a3qsdpjt></div> <div class="bar bar3" data-astro-cid-a3qsdpjt></div> </div> </div> </div>  ${renderScript($$result, "C:/dev/Some Fixes/farooqqureshii.github.io/src/components/SpotifyNowPlaying.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/components/SpotifyNowPlaying.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-12"> <hr class="border-zinc-200 dark:border-zinc-700 mb-4"> <div class="flex justify-between text-xs text-zinc-500"> <div class="flex flex-col gap-1"> <span>crafted with care by farooq</span> <span id="calgary-time">--:-- | <i>calgary</i></span> </div> ${renderComponent($$result, "SpotifyNowPlaying", $$SpotifyNowPlaying, {})} </div> ${renderScript($$result, "C:/dev/Some Fixes/farooqqureshii.github.io/src/components/Footer.astro?astro&type=script&index=0&lang.ts")} </footer>`;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/components/Footer.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function formatDate(date) {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(dateObj);
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://farooqqureshi.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title,
    description,
    image = "/static/blog-placeholder.png",
    className
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Font preloads --><link rel="preload" href="/fonts/geist-variable.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/geist-mono-variable.woff2" as="font" type="font/woff2" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", '</head> <body class="font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-200"> <div class="custom-cursor"></div> <div', "> ", " ", " ", ` </div> <script>
  const setTheme = () => {
    let theme;

    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    } else {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    document.documentElement.classList[theme ? "add" : "remove"](theme);

    if (typeof localStorage !== "undefined") {
      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
  };

  setTheme();

  document.addEventListener("astro:after-swap", setTheme);
<\/script> <script>
  // Custom cursor functionality
  const cursor = document.querySelector('.custom-cursor');
  
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }
<\/script></body></html>`])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderHead(), addAttribute(cn("max-w-xl mx-auto p-4 slide-in", className), "class"), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $, formatDate as f };
