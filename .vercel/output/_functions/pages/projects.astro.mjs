/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C-dnnmbC.mjs';
import 'kleur/colors';
import { S as SITE_DESCRIPTION } from '../chunks/consts_besTwlDb.mjs';
import { $ as $$Layout } from '../chunks/Layout_DNkzyJPv.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "EchoScope",
      description: "TypeScript, Node, TensorFlow, Sentiment Analysis",
      image: "/static/echoscope_image.png",
      link: "https://echoscope.vercel.app/",
      type: "image"
    },
    {
      title: "Analyzing and predicting housing prices in London",
      description: "Pandas, Matplotlib, Scikit-learn, SHAP, LightGBM ",
      image: "/static/data_vizual_img.png",
      link: "https://farooq.craft.me/write-up",
      type: "image"
    },
    {
      title: "uOttaHack | Director",
      description: "PM, UI/UX, Figma, Software, Sales",
      image: "/static/uottahack.jpg",
      link: "https://www.uottahack.ca/",
      type: "image"
    },
    {
      title: "NLP for Google Calendar",
      description: "LangChain, Rasa, Typescript, OAuth",
      image: "/static/blog-placeholder.png",
      type: "video",
      video: "/static/nlp for gcal mvp.mp4"
    },
    {
      title: "Substack Case Study",
      description: "PM, Strategy, UI/UX, Marketing",
      image: "/static/Marketing_Spaces.png",
      link: "/writing/substack/",
      type: "image"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects / Farooq Qureshi", "description": SITE_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="grid grid-cols-1 sm:grid-cols-2 gap-8"> ${projects.map((project) => renderTemplate`<div class="flex flex-col items-start"> <a${addAttribute(project.link, "href")} target="_blank" class="block w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 transition-colors hover:border-zinc-900 dark:hover:border-zinc-100 mb-4"> ${project.type === "video" ? renderTemplate`<video autoplay muted loop playsinline class="w-full aspect-[4/3] object-cover h-40 bg-zinc-100 dark:bg-zinc-900"> <source${addAttribute(project.video, "src")} type="video/mp4">
Your browser does not support the video tag.
</video>` : renderTemplate`<img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full aspect-[4/3] object-cover h-40 bg-zinc-100 dark:bg-zinc-900">`} </a> <div class="font-medium text-base mb-1">${project.title}</div> <div class="text-zinc-500 text-sm leading-snug">${project.description}</div> </div>`)} </div> </main> ` })}`;
}, "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/projects/index.astro", void 0);

const $$file = "C:/dev/Some Fixes/farooqqureshii.github.io/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
