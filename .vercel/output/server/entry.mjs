import { renderers } from '../_functions/renderers.mjs';
import { c as createExports } from '../_functions/chunks/entrypoint_v0vLGXd9.mjs';
import { manifest } from '../_functions/manifest_DfgWWn2m.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('../_functions/pages/_image.astro.mjs');
const _page1 = () => import('../_functions/pages/api/now-playing.astro.mjs');
const _page2 = () => import('../_functions/pages/api/spotify-now-playing.astro.mjs');
const _page3 = () => import('../_functions/pages/api/spotify-now-playing/_---path_.astro.mjs');
const _page4 = () => import('../_functions/pages/api/_---spotify_.astro.mjs');
const _page5 = () => import('../_functions/pages/artifacts.astro.mjs');
const _page6 = () => import('../_functions/pages/graph-view.astro.mjs');
const _page7 = () => import('../_functions/pages/misc/books.astro.mjs');
const _page8 = () => import('../_functions/pages/misc/music.astro.mjs');
const _page9 = () => import('../_functions/pages/misc.astro.mjs');
const _page10 = () => import('../_functions/pages/projects.astro.mjs');
const _page11 = () => import('../_functions/pages/robots.txt.astro.mjs');
const _page12 = () => import('../_functions/pages/rss.xml.astro.mjs');
const _page13 = () => import('../_functions/pages/writing.astro.mjs');
const _page14 = () => import('../_functions/pages/writing/_---slug_.astro.mjs');
const _page15 = () => import('../_functions/pages/index.astro.mjs');
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
    actions: () => import('../_functions/_noop-actions.mjs'),
    middleware: () => import('../_functions/_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "72ca3257-f065-4da1-a8eb-2382c0e7bf9f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
