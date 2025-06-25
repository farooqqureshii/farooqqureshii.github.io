/* empty css                                    */
import { _ as __astro_tag_component__, d as createVNode, F as Fragment } from '../../chunks/astro/server_DeArHbKV.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BOUk-5MM.mjs';
import '../../chunks/index_DfOMS8cV.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_D2VJfapF.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/Layout.astro",
  "title": "Books",
  "description": "Some of my favorite books."
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Books I’ve read in no particular order."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode("br", {}), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Everything I Never Told You"
      }), "\n", createVNode(_components.li, {
        children: "Belzhar"
      }), "\n", createVNode(_components.li, {
        children: "Animal Farm"
      }), "\n", createVNode(_components.li, {
        children: "1984"
      }), "\n", createVNode(_components.li, {
        children: "Brave New World"
      }), "\n", createVNode(_components.li, {
        children: "Bluets"
      }), "\n", createVNode(_components.li, {
        children: "Sapiens"
      }), "\n", createVNode(_components.li, {
        children: "Homo Deus"
      }), "\n", createVNode(_components.li, {
        children: "Skin in the Game"
      }), "\n", createVNode(_components.li, {
        children: "Dopamine Nation"
      }), "\n", createVNode(_components.li, {
        children: "All the Light We Cannot See"
      }), "\n", createVNode(_components.li, {
        children: "The Alchemist"
      }), "\n", createVNode(_components.li, {
        children: "South of the Border, West of the Sun"
      }), "\n", createVNode(_components.li, {
        children: "Klara and the Sun"
      }), "\n", createVNode(_components.li, {
        children: "Wit"
      }), "\n", createVNode(_components.li, {
        children: "The Subject Was Roses"
      }), "\n", createVNode(_components.li, {
        children: "Outliers"
      }), "\n", createVNode(_components.li, {
        children: "Homegoing"
      }), "\n", createVNode(_components.li, {
        children: "Speedboat"
      }), "\n", createVNode(_components.li, {
        children: "The Folded Clock"
      }), "\n", createVNode(_components.li, {
        children: "We the Animals"
      }), "\n", createVNode(_components.li, {
        children: "So Sad Today"
      }), "\n", createVNode(_components.li, {
        children: "Milkman"
      }), "\n", createVNode(_components.li, {
        children: "Weather, Jenny Offill"
      }), "\n", createVNode(_components.li, {
        children: "The Sad Part Was"
      }), "\n", createVNode(_components.li, {
        children: "Call Me Zebra"
      }), "\n", createVNode(_components.li, {
        children: "Native Speaker"
      }), "\n", createVNode(_components.li, {
        children: "Your Utopia"
      }), "\n", createVNode(_components.li, {
        children: "Temporary"
      }), "\n", createVNode(_components.li, {
        children: "The Employees"
      }), "\n", createVNode(_components.li, {
        children: "Drinking Coffee Elsewhere"
      }), "\n", createVNode(_components.li, {
        children: "No One Is Talking About This"
      }), "\n", createVNode(_components.li, {
        children: "The Year of Magical Thinking"
      }), "\n", createVNode(_components.li, {
        children: "If You Leave Me"
      }), "\n", createVNode(_components.li, {
        children: "How Much of These Hills Is Gold"
      }), "\n", createVNode(_components.li, {
        children: "The Loneliness of the Long Distance Runner"
      }), "\n", createVNode(_components.li, {
        children: "Can’t and Won’t"
      }), "\n", createVNode(_components.li, {
        children: "A Heartbreaking Work of Staggering Genius"
      }), "\n", createVNode(_components.li, {
        children: "Celestial Bodies"
      }), "\n", createVNode(_components.li, {
        children: "Go Home!"
      }), "\n", createVNode(_components.li, {
        children: "Interpreter of Maladies"
      }), "\n", createVNode(_components.li, {
        children: "The Emperor of All Maladies"
      }), "\n", createVNode(_components.li, {
        children: "The Boat"
      }), "\n", createVNode(_components.li, {
        children: "The Ones Who Walk Away from Omelas"
      }), "\n", createVNode(_components.li, {
        children: "The Dispossessed"
      }), "\n", createVNode(_components.li, {
        children: "The Left Hand of Darkness"
      }), "\n", createVNode(_components.li, {
        children: "Frankenstein"
      }), "\n", createVNode(_components.li, {
        children: "In Search of Lost Time"
      }), "\n", createVNode(_components.li, {
        children: "The Trial"
      }), "\n", createVNode(_components.li, {
        children: "To the Lighthouse"
      }), "\n", createVNode(_components.li, {
        children: "The Crucible"
      }), "\n", createVNode(_components.li, {
        children: "The Double Helix"
      }), "\n", createVNode(_components.li, {
        children: "Dune"
      }), "\n", createVNode(_components.li, {
        children: "The Electric Kool-Aid Acid Test"
      }), "\n", createVNode(_components.li, {
        children: "Danube"
      }), "\n", createVNode(_components.li, {
        children: "The Road to Oxiana"
      }), "\n", createVNode(_components.li, {
        children: "And the Band Played On"
      }), "\n", createVNode(_components.li, {
        children: "Postwar"
      }), "\n", createVNode(_components.li, {
        children: "The Catcher in the Rye"
      }), "\n", createVNode(_components.li, {
        children: "Middlemarch"
      }), "\n", createVNode(_components.li, {
        children: "The Sun Also Rises"
      }), "\n", createVNode(_components.li, {
        children: "Midnight’s Children"
      }), "\n", createVNode(_components.li, {
        children: "The Plague"
      }), "\n", createVNode(_components.li, {
        children: "The Man Without Qualities"
      }), "\n", createVNode(_components.li, {
        children: "The Tale of Genji"
      }), "\n", createVNode(_components.li, {
        children: "In Cold Blood"
      }), "\n", createVNode(_components.li, {
        children: "Man’s Search for Meaning"
      }), "\n", createVNode(_components.li, {
        children: "Homage to Catalonia"
      }), "\n", createVNode(_components.li, {
        children: "I Know Why the Caged Bird Sings"
      }), "\n", createVNode(_components.li, {
        children: "All the President’s Men"
      }), "\n", createVNode(_components.li, {
        children: "The Warmth of Other Suns"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/misc/books";
const file = "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/misc/books.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/dev/farooqqureshii.github.io/farooqqureshii.github.io-2/src/pages/misc/books.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
