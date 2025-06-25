/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DeArHbKV.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BOUk-5MM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Music = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Music / Farooq Qureshi", "description": "Miscellaneous pages by Farooq Qureshi" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <p>Coming soon.</p> </main> ` })}`;
}, "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/misc/music.astro", void 0);

const $$file = "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/misc/music.astro";
const $$url = "/misc/music";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Music,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
