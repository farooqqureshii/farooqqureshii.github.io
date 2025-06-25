/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DeArHbKV.mjs';
import 'kleur/colors';
import { S as SITE_DESCRIPTION } from '../chunks/consts_besTwlDb.mjs';
import { $ as $$Layout } from '../chunks/Layout_eI1_hp_t.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Artifacts / Farooq Qureshi", "description": SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="text-base space-y-2"> <p>
Patrick Collison's <a href="https://patrickcollison.com/fast" target="_blank" class="text-blue-500 underline">examples of ambitious projects executed on quickly</a>.
</p> <p> <a href="https://book.stevejobsarchive.com/" target="_blank" class="text-blue-500 underline">Make Something Wonderful</a>, a collection from the life of Steve Jobs.
</p> <p> <a href="https://www.folklore.org/I'll_Be_Your_Best_Friend.html?sort=date" target="_blank" class="text-blue-500 underline">I'll Be Your Best Friend</a>.
</p> <p>
Bret Victor's <a href="http://worrydream.com/#!/InventingOnPrinciple" target="_blank" class="text-blue-500 underline">talk</a> on creating tools that empower people.
</p> </div> </main> ` })}`;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/artifacts/index.astro", void 0);

const $$file = "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/artifacts/index.astro";
const $$url = "/artifacts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
