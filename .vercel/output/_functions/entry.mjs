import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_v0vLGXd9.mjs';
import { manifest } from './manifest_BOAjnd0X.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/now-playing.astro.mjs');
const _page2 = () => import('./pages/api/spotify-now-playing.astro.mjs');
const _page3 = () => import('./pages/api/spotify-now-playing/_---path_.astro.mjs');
const _page4 = () => import('./pages/api/_---spotify_.astro.mjs');
const _page5 = () => import('./pages/artifacts.astro.mjs');
const _page6 = () => import('./pages/graph-view.astro.mjs');
const _page7 = () => import('./pages/misc/books.astro.mjs');
const _page8 = () => import('./pages/misc/music.astro.mjs');
const _page9 = () => import('./pages/misc.astro.mjs');
const _page10 = () => import('./pages/projects.astro.mjs');
const _page11 = () => import('./pages/robots.txt.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/writing.astro.mjs');
const _page14 = () => import('./pages/writing/_---slug_.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/now-playing.ts", _page1],
    ["src/pages/api/spotify-now-playing.ts", _page2],
    ["src/pages/api/spotify-now-playing/[...path].ts", _page3],
    ["src/pages/api/[...spotify].ts", _page4],
    ["src/pages/artifacts/index.astro", _page5],
    ["src/pages/graph-view.astro", _page6],
    ["src/pages/misc/books.md", _page7],
    ["src/pages/misc/music.astro", _page8],
    ["src/pages/misc/index.astro", _page9],
    ["src/pages/projects/index.astro", _page10],
    ["src/pages/robots.txt.ts", _page11],
    ["src/pages/rss.xml.js", _page12],
    ["src/pages/writing/index.astro", _page13],
    ["src/pages/writing/[...slug].astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b79b385a-f04a-4a76-8dfa-f0f487ec8654",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
