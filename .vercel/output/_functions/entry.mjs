import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BWywWkWN.mjs';
import { manifest } from './manifest_-gLBEodO.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/save-content.astro.mjs');
const _page3 = () => import('./pages/api/saved-content.astro.mjs');
const _page4 = () => import('./pages/api/spotify-now-playing.astro.mjs');
const _page5 = () => import('./pages/artifacts/add.astro.mjs');
const _page6 = () => import('./pages/artifacts.astro.mjs');
const _page7 = () => import('./pages/graph-view.astro.mjs');
const _page8 = () => import('./pages/links.astro.mjs');
const _page9 = () => import('./pages/other/books.astro.mjs');
const _page10 = () => import('./pages/other/courses.astro.mjs');
const _page11 = () => import('./pages/other/music.astro.mjs');
const _page12 = () => import('./pages/other/pencils.astro.mjs');
const _page13 = () => import('./pages/other/resources.astro.mjs');
const _page14 = () => import('./pages/other/tools.astro.mjs');
const _page15 = () => import('./pages/other.astro.mjs');
const _page16 = () => import('./pages/projects.astro.mjs');
const _page17 = () => import('./pages/robots.txt.astro.mjs');
const _page18 = () => import('./pages/rss.xml.astro.mjs');
const _page19 = () => import('./pages/sitemap.astro.mjs');
const _page20 = () => import('./pages/sitemap.xml.astro.mjs');
const _page21 = () => import('./pages/writing.astro.mjs');
const _page22 = () => import('./pages/writing/_---slug_.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/save-content.ts", _page2],
    ["src/pages/api/saved-content.ts", _page3],
    ["src/pages/api/spotify-now-playing.ts", _page4],
    ["src/pages/artifacts/add.astro", _page5],
    ["src/pages/artifacts/index.astro", _page6],
    ["src/pages/graph-view.astro", _page7],
    ["src/pages/links.astro", _page8],
    ["src/pages/other/books.astro", _page9],
    ["src/pages/other/courses.astro", _page10],
    ["src/pages/other/music.astro", _page11],
    ["src/pages/other/pencils.astro", _page12],
    ["src/pages/other/resources.astro", _page13],
    ["src/pages/other/tools.astro", _page14],
    ["src/pages/other/index.astro", _page15],
    ["src/pages/projects/index.astro", _page16],
    ["src/pages/robots.txt.ts", _page17],
    ["src/pages/rss.xml.js", _page18],
    ["src/pages/sitemap.astro", _page19],
    ["src/pages/sitemap.xml.ts", _page20],
    ["src/pages/writing/index.astro", _page21],
    ["src/pages/writing/[...slug].astro", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "574c1c06-9ca5-4487-ba1d-a5e1f5d5e58a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
