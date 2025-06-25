/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C-dnnmbC.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DaMoGZiW.mjs';
import { S as SITE_DESCRIPTION } from '../chunks/consts_besTwlDb.mjs';
import { $ as $$Layout, f as formatDate } from '../chunks/Layout_DNkzyJPv.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("writing");
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.valueOf() - dateA.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Writing / Farooq Qureshi", "description": SITE_DESCRIPTION }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <ul class="flex flex-col gap-1.5"> ${sortedPosts.map((post) => renderTemplate`<li> <a${addAttribute(`/writing/${post.slug}`, "href")} class="group flex justify-between gap-3"> <span class="group-hover:underline">${post.data.title}</span> <span class="text-nowrap text-zinc-500"> ${formatDate(post.data.date)} </span> </a> </li>`)} </ul> </main> ` })}`;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/writing/index.astro", void 0);

const $$file = "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/writing/index.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
