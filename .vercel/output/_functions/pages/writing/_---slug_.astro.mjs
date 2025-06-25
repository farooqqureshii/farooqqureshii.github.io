/* empty css                                    */
import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C-dnnmbC.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_CeDhZyhU.mjs';
import { $ as $$Layout, f as formatDate } from '../../chunks/Layout_DNkzyJPv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://farooqqureshi.com");
async function getStaticPaths() {
  const writing = await getCollection("writing");
  return writing.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  if (!post) {
    throw new Error("Post object is undefined");
  }
  if (!post.slug) {
    throw new Error("Post slug is undefined");
  }
  if (!post.data) {
    throw new Error(`Post data is missing for slug: ${post.slug}`);
  }
  const { title, date, description } = post.data;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="mb-5 text-xl font-medium"> ${title} </h1> <p class="mb-1 font-medium text-zinc-500"> ${formatDate(date)} </p> <article> ${renderComponent($$result2, "Content", Content, {})} </article> </main> ` })}`;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/writing/[...slug].astro", void 0);

const $$file = "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/writing/[...slug].astro";
const $$url = "/writing/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
