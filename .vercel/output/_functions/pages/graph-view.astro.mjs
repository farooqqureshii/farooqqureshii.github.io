/* empty css                                 */
import { c as createComponent, a as renderTemplate, b as renderHead } from '../chunks/astro/server_DeArHbKV.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$GraphView = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html data-astro-cid-iranu6cy> <head><title>Substack Graph View</title><meta name="description" content="Interactive graph of creator and reader relationships for the Substack case study."><link rel="stylesheet" href="https://unpkg.com/vis-network/styles/vis-network.css">', `</head> <body data-astro-cid-iranu6cy> <a href="/writing/substack/" class="back-btn" data-astro-cid-iranu6cy>\u2190 Back</a> <div id="graph-network" data-astro-cid-iranu6cy></div> <div id="tooltip" data-astro-cid-iranu6cy></div> <script type="module">
      document.addEventListener('DOMContentLoaded', async function () {
        const vis = await import('vis-network');
        const nodes = [
          { id: 1, label: 'Central', color: { background: '#6366f1', border: '#818cf8', highlight: { background: '#818cf8', border: '#fff' } }, font: { color: '#fff', size: 28, face: 'Inter' }, size: 50 },
          { id: 2, label: 'PL', color: '#22c55e', font: { color: '#fff' }, size: 36 },
          { id: 3, label: 'AJ', color: '#22c55e', font: { color: '#fff' }, size: 36 },
          { id: 4, label: 'BO', color: '#22c55e', font: { color: '#fff' }, size: 36 },
          { id: 5, label: 'WJ', color: '#22c55e', font: { color: '#fff' }, size: 36 },
          { id: 6, label: 'Writing with M.', color: '#a5b4fc', font: { color: '#18181b' }, size: 28 },
          { id: 7, label: 'Design with Roe', color: '#a5b4fc', font: { color: '#18181b' }, size: 28 },
          { id: 8, label: "Erick's Newsletter", color: '#a5b4fc', font: { color: '#18181b' }, size: 28 },
          { id: 9, label: "Amy's Substack", color: '#a5b4fc', font: { color: '#18181b' }, size: 28 },
        ];
        const edges = [
          { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 },
          { from: 2, to: 6 }, { from: 2, to: 1 }, { from: 3, to: 7 }, { from: 4, to: 9 },
          { from: 5, to: 8 }, { from: 6, to: 2 }, { from: 7, to: 3 }, { from: 8, to: 5 },
          { from: 9, to: 4 },
        ];
        const container = document.getElementById('graph-network');
        const data = { nodes: new vis.DataSet(nodes), edges: new vis.DataSet(edges) };
        const options = {
          nodes: {
            shape: 'dot',
            borderWidth: 2,
            shadow: true,
          },
          edges: {
            width: 2,
            color: { color: '#a1a1aa', highlight: '#818cf8' },
            smooth: true,
            shadow: true,
          },
          physics: {
            enabled: true,
            barnesHut: { gravitationalConstant: -20000, springLength: 200 },
          },
          interaction: {
            hover: false,
            tooltipDelay: 0,
            navigationButtons: false,
            zoomView: true,
            dragView: true,
            dragNodes: true,
            selectable: false,
          },
        };
        new vis.Network(container, data, options);
      });
    <\/script> </body> </html>`])), renderHead());
}, "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/graph-view.astro", void 0);

const $$file = "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/graph-view.astro";
const $$url = "/graph-view";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GraphView,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
