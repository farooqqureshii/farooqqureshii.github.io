import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_JpNVJpZO.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const writing = await getCollection("writing");
  return rss({
    title: "Farooq Qureshi",
    description: "Personal website of Farooq Qureshi",
    site: context.site,
    items: writing.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/writing/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
