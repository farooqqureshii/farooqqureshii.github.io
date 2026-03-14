import { s as savedContent } from '../../chunks/savedContent_dJvKk9rO.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  {
    return new Response(JSON.stringify(savedContent), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
