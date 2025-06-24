/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DeArHbKV.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_JpNVJpZO.mjs';
import { S as SITE_DESCRIPTION } from '../chunks/consts_besTwlDb.mjs';
import { $ as $$Layout, f as formatDate } from '../chunks/Layout_BOUk-5MM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("writing");
  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Writing / Farooq Qureshi", "description": SITE_DESCRIPTION }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <ul class="flex flex-col gap-1.5"> ${sortedPosts.map((post) => renderTemplate`<li> <a${addAttribute(`/writing/${post.slug}`, "href")} class="group flex justify-between gap-3"> <span class="group-hover:underline">${post.data.title}</span> <span class="text-nowrap text-zinc-500"> ${formatDate(post.data.date)} </span> </a> </li>`)} </ul> </main> ` })}`;
}, "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/writing/index.astro", void 0);

const $$file = "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/writing/index.astro";
const $$url = "/writing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
