/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DeArHbKV.mjs';
import 'kleur/colors';
import { S as SITE_DESCRIPTION } from '../chunks/consts_besTwlDb.mjs';
import { $ as $$Layout } from '../chunks/Layout_BOUk-5MM.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Farooq Qureshi", "description": SITE_DESCRIPTION, "className": "flex h-svh max-w-lg flex-col justify-center" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-4"> <div class="w-full text-base"> <p class="mb-3">Hi, I'm Farooq.</p> <p class="mb-3">
I study Electrical Engineering at <a href="https://uottawa.ca" target="_blank" class="text-blue-500 underline">The University of Ottawa</a>. I'm also the director for <a href="https://uOttaHack.ca" target="_blank" class="text-blue-500 underline">uOttaHack</a>, the nation's capital hackathon for 850+ students.
</p> <p class="mb-3">
In my free time I teach competitive debating. Students of mine have won at Canada's National Debating Championships.
</p> </div> <div class="text-base flex items-center gap-4"> <a href="mailto:farooq.qureshi@outlook.com" class="text-blue-500 underline mb-3 inline-block"><span class="inline-block align-middle text-sm">↗</span> email</a> <a href="https://github.com/farooqqureshii" target="_blank" class="text-blue-500 underline mb-3 inline-block"><span class="inline-block align-middle text-sm">↗</span> github</a> <a href="https://linkedin.com/in/farooqq" target="_blank" class="text-blue-500 underline mb-3 inline-block"><span class="inline-block align-middle text-sm">↗</span> linkedin</a> </div> </main> ` })}`;
}, "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/index.astro", void 0);

const $$file = "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
