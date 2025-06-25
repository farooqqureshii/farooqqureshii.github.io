/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DeArHbKV.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_eI1_hp_t.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Misc / Farooq Qureshi", "description": "Miscellaneous pages by Farooq Qureshi" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <ul class="flex flex-col gap-1.5"> <li> <a href="/misc/books" class="group flex justify-between gap-3"> <span class="group-hover:underline">Books</span> </a> </li> <li> <a href="/misc/music" class="group flex justify-between gap-3"> <span class="group-hover:underline">Music</span> </a> </li> </ul> </main> ` })}`;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/misc/index.astro", void 0);

const $$file = "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/misc/index.astro";
const $$url = "/misc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
