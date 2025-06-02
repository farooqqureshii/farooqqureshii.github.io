import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
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
