export type BookmarkType = "image" | "link" | "video";

export type BookmarkCategory =
  | "design"
  | "photography"
  | "essays"
  | "tools"
  | "books"
  | "art"
  | "tech"
  | "people"
  | "places"
  | "archive"
  | "visual"
  | "engineering"
  | "history";

export interface Bookmark {
  id: string;
  type: BookmarkType;
  title: string;
  description?: string;
  url?: string;
  domain?: string;
  image?: string;
  alt?: string;
  /** Fetched at build from og:image / twitter:image */
  thumbnail?: string | null;
  /** Content categories for filtering */
  categories?: BookmarkCategory[];
  /** Custom written text overlay/formatting (supports HTML links) */
  writtenText?: string;
}

// Backwards compatibility aliases
export type ArtifactType = BookmarkType;
export type ArtifactCategory = BookmarkCategory;
export type Artifact = Bookmark;

const linkClass = "";

export const bookmarks: Bookmark[] = [
  // Images
  {
    id: "img-1",
    type: "image",
    title: "A Sudden Gust of Wind (after Hokusai)",
    description: "Jeff Wall, 1993",
    image: "https://i.postimg.cc/FsH2bVvz/Jeff-Wall-A-Sudden-Gust-of-Wind-after-Hokusai-1993.jpg",
    alt: "A sudden Gust of Wind (after Hokusai), Jeff Wall, 1993",
    categories: ["art", "photography"],
  },
  {
    id: "img-2",
    type: "image",
    title: "Grant Park",
    description: "2009",
    image: "https://i.postimg.cc/RhXNnLBK/chi.jpg",
    alt: "Grant Park (2009)",
    categories: ["photography", "places"],
  },
  {
    id: "img-3",
    type: "image",
    title: "",
    image: "https://i.postimg.cc/TwQRk24X/61-EL0a-PYY4-L.jpg",
    alt: "",
    categories: ["photography"],
  },
  {
    id: "img-4",
    type: "image",
    title: "",
    image: "https://i.postimg.cc/y8xvXw8x/9m0di0m3taua1.jpg",
    alt: "",
    categories: ["photography"],
  },
  {
    id: "img-5",
    type: "image",
    title: "Paris",
    description: "2016",
    image: "https://i.postimg.cc/sDGrWJsz/paris.jpg",
    alt: "Paris (2016)",
  },
  {
    id: "img-6",
    type: "image",
    title: "The Met",
    description: "2014",
    image: "https://i.postimg.cc/13p1C58Y/power.jpg",
    alt: "The Met (2014)",
  },
  {
    id: "img-7",
    type: "image",
    title: "Sydney",
    description: "2008",
    image: "https://i.postimg.cc/g0mFfFRc/church.png",
    alt: "Sydney (2008)",
  },
  {
    id: "img-8",
    type: "image",
    title: "Buenos Aires",
    description: "2009",
    image: "https://i.postimg.cc/J0y9b1wx/bike.jpg",
    alt: "Buenos Aires (2009)",
  },
  {
    id: "img-9",
    type: "image",
    title: "First colour image from Viking Lander 1",
    description: "1976",
    image: "https://i.postimg.cc/9MkkXv47/PIA00563-Viking1-First-Color-Image-19760721.jpg",
    alt: "First colour image from Viking Lander 1, 1976",
  },
  {
    id: "img-10",
    type: "image",
    title: "Dalí Atomicus",
    description: "1948",
    image: "https://i.postimg.cc/fTYMFvFK/Times-Most-Influental-Images-20.jpg",
    alt: "Dalí Atomicus, 1948",
  },
  {
    id: "img-11",
    type: "image",
    title: "Milk Drop Coronet",
    description: "1957",
    image: "https://i.postimg.cc/50HVm5L8/Times-Most-Influental-Images-26-23.jpg",
    alt: "Milk Drop Coronet, 1957",
  },
  {
    id: "img-12",
    type: "image",
    title: "Work In Progress",
    description: "Gilbert Garcin, 1999",
    image: "https://i.postimg.cc/nLjRR3SV/tumblr-m4j9qyu-Dn-Y1qcl8ymo1-r1-1280.jpg",
    alt: "Gilbert Garcin, Work In Progress, 1999",
  },
  {
    id: "img-13",
    type: "image",
    title: "Train Passing",
    description: "Jan Saudek",
    image: "https://i.postimg.cc/W3cn9TJS/FKl8lz-HXs-As-OHFx.jpg",
    alt: "Jan Saudek, Train Passing",
  },
  {
    id: "img-14",
    type: "image",
    title: "The Last Photo of the Barbary Lion",
    description: "Marcel Flandrin, 1925",
    image: "https://i.postimg.cc/VsGtvzLT/jmu4fst8yrjc1.jpg",
    alt: "The Last Photo of the Barbary Lion, Marcel Flandrin, 1925",
  },
  {
    id: "img-15",
    type: "image",
    title: "Yibin II (Counting Receipts)",
    description: "Sichuan Province, 2007, Nadav Kander",
    image: "https://i.postimg.cc/zGn3CN8q/Yibin-II-Counting-Receipts-Sichuan-Province-2007.jpg",
    alt: "Yibin II (Counting Receipts), Sichuan Province, 2007, Nadav Kander",
  },
  {
    id: "img-16",
    type: "image",
    title: "Approaching Shadow",
    description: "Fan Ho",
    image: "https://i.postimg.cc/htqtPYx6/fan-ho-approaching-shadow-1024x768.webp",
    alt: "Fan Ho, Approaching Shadow",
  },
  {
    id: "img-17",
    type: "image",
    title: "Longmont, Colorado",
    description: "ca. 1980, Robert Adams",
    image: "https://i.postimg.cc/CKhrGb9J/RA-08-0709.webp",
    alt: "Longmont, Colorado, ca. 1980, Robert Adams",
  },
  {
    id: "img-18",
    type: "image",
    title: "Exiles",
    description: "Josef Koudelka, 1987 (France)",
    image: "https://i.postimg.cc/TP1q20z8/par65507-overlay.jpg",
    alt: "Josef Koudelka, Exiles, 1987 (France)",
  },
  {
    id: "img-19",
    type: "image",
    title: "Still Life",
    description: "Don McCullin, England 1979",
    image: "https://i.postimg.cc/VLztL4t7/STILL-LIFE1.jpg",
    alt: "Don McCullin, Still Life, England 1979",
  },
  {
    id: "img-20",
    type: "image",
    title: "Push",
    description: "Pete Turner, 1970",
    image: "https://i.postimg.cc/Rhfrmwkf/01.jpg",
    alt: "Push, Pete Turner, 1970",
  },
  {
    id: "img-21",
    type: "image",
    title: "Wall Street, New York",
    description: "Paul Strand, 1915",
    image: "https://i.postimg.cc/KvywL3S3/91-102-2-cropped.jpg",
    alt: "Paul Strand, Wall Street, New York, 1915",
  },
  {
    id: "img-22",
    type: "image",
    title: "Newspaper boys",
    description: "Frans Stoppelman, 1976",
    image: "https://i.postimg.cc/6pHGnZPm/image.png",
    alt: "Newspaper boys, Frans Stoppelman, 1976",
  },
  {
    id: "img-23",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos collections",
    image: "https://cdn.cosmos.so/e40d5427-62b4-45e5-b47e-b4c69a0fea32?format=webp&w=800",
    alt: "Image from Farooq's Cosmos collection",
    categories: ["visual"],
  },
  {
    id: "img-24",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos collections",
    image: "https://cdn.cosmos.so/73153129-06de-4166-9742-b05d5a48c82f?format=webp&w=800",
    alt: "Image from Farooq's Cosmos collection",
    categories: ["visual"],
  },
  {
    id: "img-25",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos collections",
    image: "https://cdn.cosmos.so/0d3a0a00-4ac1-4786-a666-d77ad2250021.webp?format=webp&w=800",
    alt: "Image from Farooq's Cosmos collection",
    categories: ["visual"],
  },
  {
    id: "img-26",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos collections",
    image: "https://cdn.cosmos.so/d3365b4b-dca7-4876-ad9c-2c7af668ce00?format=webp&w=800",
    alt: "Image from Farooq's Cosmos collection",
    categories: ["visual"],
  },
  {
    id: "img-27",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/7e512083-c7fa-4fd1-a38f-31af37ca2c94?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-28",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/2798c231-254b-490a-bc74-275b7c676410?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-29",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/a3974f5f-678f-4eaa-b39e-fd7048125131?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-31",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/c7102c20-4a88-48c6-b677-932f30d13670?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-32",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/e09b2328-a8ed-4659-a140-1afc85426e73?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-33",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/5bd05d92-9783-43ee-94e0-6a0efb6e08ea?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-34",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/4c7ebfa2-cc6a-48a1-9a35-d7eb5ed06302?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-35",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/8306ebfc-1e1f-4d66-aba6-b048a46f027b?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-36",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/4e36f5a0-674e-44df-8441-a39875ed7827?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-38",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/253420ba-d896-4d5a-8791-c2c6256c2a9a?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-39",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/1741822e-7543-4565-acb6-be3971e0ff57?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-40",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/4868a988-0aa8-4eca-a779-25386e2ca6b0?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-41",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/66f56efa-4514-4442-bed2-22c89c6d669f?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-42",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/033638ac-62e9-4bf1-b848-6bc6032478ed?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-43",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/b64bd8b3-76a3-49d3-ba0e-f850f439d230?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-44",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/2ebb9c1d-2c7e-431d-b062-1a8d1d28ea94?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-45",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/063f05e0-394d-440f-81f5-e8891f4bf47a?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-46",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/b2e26190-13fb-4acd-9084-c955d4a11199?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-47",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/237631b0-5d4d-45cb-952b-bc5bd8005a6a?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-48",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/b1cbd2bc-a97b-45ce-bf1c-95164d49d4f1?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-49",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/5ddd1f86-ffc6-490e-a1e7-f0cf82cd3648?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-50",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/6fc85087-9d38-4b3d-8df1-9990335217c7?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-51",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/7894a091-2244-4284-994a-09a0f4efb118?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-53",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/ab15a3dc-5e49-46f8-8156-720edeb5280a?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-54",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/6ac7f365-47be-48c1-be70-eb18a5e6db6c?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-55",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/28c9e903-114a-4823-a734-d42983dc757c?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-56",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/21671436-5c90-429b-8111-76b4f2c8a1f0?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  {
    id: "img-57",
    type: "image",
    title: "Cosmos",
    description: "From my Cosmos elements",
    image: "https://cdn.cosmos.so/0b5b2a1c-14c8-4645-92c6-1299cc3b7f16?format=webp&w=800",
    alt: "Image from Farooq's Cosmos elements",
    categories: ["visual"],
  },
  // Links
  {
    id: "link-1",
    type: "link",
    title: "Books of the Century",
    url: "http://booksofthecentury.com/",
    domain: "booksofthecentury.com",
    categories: ["books"],
    writtenText: `<a href="http://booksofthecentury.com/" target="_blank" rel="noopener" class="${linkClass}">Books of the Century</a> is the best way to find a new read.`
  },
  {
    id: "link-2",
    type: "link",
    title: "Watch Paul Graham write",
    url: "https://byronm.com/13sentences.html",
    domain: "byronm.com",
    categories: ["essays"],
    writtenText: `You can watch <a href="https://byronm.com/13sentences.html" target="_blank" rel="noopener" class="${linkClass}">how Paul Graham writes</a>.`
  },
  {
    id: "link-3",
    type: "link",
    title: "Understanding Neural Networks",
    url: "https://visualrambling.space/neural-network/",
    domain: "visualrambling.space",
    categories: ["visual", "tech"],
    writtenText: `Everything by <a href="https://visualrambling.space/" target="_blank" rel="noopener" class="${linkClass}">visualrambling.space</a> is amazing, including their <a href="https://visualrambling.space/neural-network/" target="_blank" rel="noopener" class="${linkClass}">visualization of neural networks</a>.`
  },
  {
    id: "link-4",
    type: "link",
    title: "Visual Rambling",
    url: "https://visualrambling.space/",
    domain: "visualrambling.space",
    categories: ["visual", "design"],
    writtenText: `Interactive visual essays at <a href="https://visualrambling.space/" target="_blank" rel="noopener" class="${linkClass}">visualrambling.space</a>.`
  },
  {
    id: "link-5",
    type: "link",
    title: "Apple's Original HIG",
    url: "https://vintageapple.org/inside_r/pdf/Human_Interface_Guidelines_1992.pdf",
    domain: "vintageapple.org",
    categories: ["design", "archive"],
    writtenText: `You can view the original <a href="https://vintageapple.org/inside_r/pdf/Human_Interface_Guidelines_1992.pdf" target="_blank" rel="noopener" class="${linkClass}">Macintosh Human Interface Guidelines</a> online for free.`
  },
  {
    id: "link-6",
    type: "link",
    title: "Blue Sky City",
    url: "https://www.blueskycity.ca/",
    domain: "blueskycity.ca",
    writtenText: `The <a href="https://www.blueskycity.ca/" target="_blank" rel="noopener" class="${linkClass}">Blue Sky City</a> is one of the best city promotional pages I’ve ever seen.`
  },
  {
    id: "link-7",
    type: "link",
    title: "Build Canada",
    url: "https://buildcanada.com/",
    domain: "buildcanada.com",
    writtenText: `<a href="https://buildcanada.com/" target="_blank" rel="noopener" class="${linkClass}">Build Canada</a> promotes Canadian prosperity and is highly informative on a wide range of issues that affect our country.`
  },
  {
    id: "link-8",
    type: "link",
    title: "Ambitious projects executed quickly",
    url: "https://patrickcollison.com/fast",
    domain: "patrickcollison.com",
    writtenText: `For inspiration, you can read Patrick Collison’s <a href="https://patrickcollison.com/fast" target="_blank" rel="noopener" class="${linkClass}">examples of ambitious projects executed quickly</a>.`
  },
  {
    id: "link-9",
    type: "link",
    title: "Make Something Wonderful",
    url: "https://book.stevejobsarchive.com/",
    domain: "stevejobsarchive.com",
    writtenText: `<a href="https://book.stevejobsarchive.com/" target="_blank" rel="noopener" class="${linkClass}">Make Something Wonderful</a> is a collection from the life and vision of Steve Jobs.`
  },
  {
    id: "link-10",
    type: "link",
    title: "I'll Be Your Best Friend",
    url: "https://www.folklore.org/I'll_Be_Your_Best_Friend.html?sort=date",
    domain: "folklore.org",
    writtenText: `<a href="https://www.folklore.org/I'll_Be_Your_Best_Friend.html?sort=date" target="_blank" rel="noopener" class="${linkClass}">I’ll Be Your Best Friend</a> is a story of two Apple engineers in the 1970s.`
  },
  {
    id: "link-11",
    type: "link",
    title: "Inventing on Principle",
    url: "http://worrydream.com/#!/InventingOnPrinciple",
    domain: "worrydream.com",
    writtenText: `Listen to Bret Victor’s talk on <a href="http://worrydream.com/#!/InventingOnPrinciple" target="_blank" rel="noopener" class="${linkClass}">Inventing on Principle</a>.`
  },
  {
    id: "link-12",
    type: "link",
    title: "The Web's Grain",
    url: "https://frankchimero.com/blog/2015/the-webs-grain/",
    domain: "frankchimero.com",
    writtenText: `Frank Chimero’s <a href="https://frankchimero.com/blog/2015/the-webs-grain/" target="_blank" rel="noopener" class="${linkClass}">The Web’s Grain</a> tells us much of how technology has been innovated upon.`
  },
  {
    id: "link-13",
    type: "link",
    title: "Quality-of-life improvements",
    url: "https://gwern.net/improvement",
    domain: "gwern.net",
    writtenText: `Gwern Branwen has a great catalog of <a href="https://gwern.net/improvement" target="_blank" rel="noopener" class="${linkClass}">ordinary life improvements</a>.`
  },
  {
    id: "link-14",
    type: "link",
    title: "Hello Stranger",
    url: "https://pudding.cool/2025/06/hello-stranger/",
    domain: "pudding.cool",
    writtenText: `<a href="https://pudding.cool/" target="_blank" rel="noopener" class="${linkClass}">pudding.cool</a> has the best visual essays on the web, especially <a href="https://pudding.cool/2025/06/hello-stranger/" target="_blank" rel="noopener" class="${linkClass}">Hello Stranger</a>.`
  },
  {
    id: "link-15",
    type: "link",
    title: "The Pudding",
    url: "https://pudding.cool/",
    domain: "pudding.cool",
    writtenText: `Visual essays and data stories by <a href="https://pudding.cool/" target="_blank" rel="noopener" class="${linkClass}">The Pudding</a>.`
  },
  {
    id: "link-16",
    type: "link",
    title: "Design Arena",
    url: "https://www.designarena.ai/",
    domain: "designarena.ai",
    writtenText: `Benchmark and compare AI design capabilities at <a href="https://www.designarena.ai/" target="_blank" rel="noopener" class="${linkClass}">Design Arena</a>.`
  },
  {
    id: "link-17",
    type: "link",
    title: "waste.space",
    url: "https://waste.space/",
    domain: "waste.space",
    categories: ["design"],
    writtenText: `Incredible design inspiration and visual art at <a href="https://waste.space/" target="_blank" rel="noopener" class="${linkClass}">waste.space</a>.`
  },
  {
    id: "link-18",
    type: "link",
    title: "Visual Journal",
    url: "https://visualjournal.it/",
    domain: "visualjournal.it",
    categories: ["design", "visual"],
    writtenText: `Great design inspiration and visuals can be found at <a href="https://visualjournal.it/" target="_blank" rel="noopener" class="${linkClass}">visualjournal.it</a>.`
  },
  {
    id: "link-19",
    type: "link",
    title: "Radio.garden",
    url: "https://radio.garden/",
    domain: "radio.garden",
    writtenText: `<a href="https://radio.garden/" target="_blank" rel="noopener" class="${linkClass}">radio.garden</a> lets you listen to the radio, anywhere in the world.`
  },
  {
    id: "link-20",
    type: "link",
    title: "Flat Design",
    url: "https://www.nngroup.com/articles/flat-design/",
    domain: "nngroup.com",
    writtenText: `The Nielsen Norman Group tells us about <a href="https://www.nngroup.com/articles/flat-design/" target="_blank" rel="noopener" class="${linkClass}">Flat Design</a>.`
  },
  {
    id: "link-21",
    type: "link",
    title: "Little Big Details",
    url: "https://littlebigdetails.com/",
    domain: "littlebigdetails.com",
    writtenText: `<a href="https://littlebigdetails.com/" target="_blank" rel="noopener" class="${linkClass}">Little Big Details</a> curates fine UI micro-interactions.`
  },
  {
    id: "link-22",
    type: "link",
    title: "Stripe book recommendations",
    url: "https://press.stripe.com/",
    domain: "stripe.com",
    writtenText: `This whole list could easily just be Stripe Press, including their <a href="https://press.stripe.com/" target="_blank" rel="noopener" class="${linkClass}">books page</a>.`
  },
  {
    id: "link-23",
    type: "link",
    title: "The Birth of Inter",
    url: "https://www.figma.com/blog/the-birth-of-inter/",
    domain: "figma.com",
    writtenText: `Learn about the <a href="https://www.figma.com/blog/the-birth-of-inter/" target="_blank" rel="noopener" class="${linkClass}">birth of Inter</a>.`
  },
  {
    id: "link-24",
    type: "link",
    title: "Whole Earth Catalog",
    url: "https://wholeearth.info/",
    domain: "wholeearth.info",
    writtenText: `The entire <a href="https://wholeearth.info/" target="_blank" rel="noopener" class="${linkClass}">Whole Earth Catalog</a> is available online for free.`
  },
  {
    id: "link-25",
    type: "link",
    title: "The Inner Ring",
    url: "https://www.lesswrong.com/posts/Y8rEA4e4DxafmeAbW/the-inner-ring-by-c-s-lewis",
    domain: "lesswrong.com",
    categories: ["essays"],
    writtenText: `C.S. Lewis’ classic essay <a href="https://www.lesswrong.com/posts/Y8rEA4e4DxafmeAbW/the-inner-ring-by-c-s-lewis" target="_blank" rel="noopener" class="${linkClass}">The Inner Ring</a>.`
  },
  {
    id: "link-26",
    type: "link",
    title: "1964 New York World's Fair",
    url: "http://www.nywf64.com/index.html",
    domain: "nywf64.com",
    writtenText: `The <a href="http://www.nywf64.com/index.html" target="_blank" rel="noopener" class="${linkClass}">1964 New York World’s Fair</a> website is online and live.`
  },
  {
    id: "link-27",
    type: "link",
    title: "Letters from Sweden",
    url: "https://lettersfromsweden.se/",
    domain: "lettersfromsweden.se",
    writtenText: `<a href="https://lettersfromsweden.se/" target="_blank" rel="noopener" class="${linkClass}">Letters from Sweden</a> is a fantastic font page.`
  },
  {
    id: "link-28",
    type: "link",
    title: "Lean",
    url: "https://leanprover.github.io/",
    domain: "leanprover.github.io",
    writtenText: `<a href="https://leanprover.github.io/" target="_blank" rel="noopener" class="${linkClass}">Lean</a> theorem prover.`
  },
  {
    id: "link-29",
    type: "link",
    title: "mathlib",
    url: "https://leanprover-community.github.io/mathlib-overview.html",
    domain: "leanprover-community.github.io",
    writtenText: `Mathematical objects in Lean at <a href="https://leanprover-community.github.io/mathlib-overview.html" target="_blank" rel="noopener" class="${linkClass}">mathlib</a>.`
  },
  {
    id: "link-30",
    type: "link",
    title: "Making Software",
    url: "https://www.makingsoftware.com/",
    domain: "makingsoftware.com",
    writtenText: `Dan Hollick maintains <a href="https://www.makingsoftware.com/" target="_blank" rel="noopener" class="${linkClass}">Making Software</a>, which is a goldmine on the web.`
  },
  {
    id: "link-31",
    type: "link",
    title: "The Coziest Place on the Moon",
    url: "https://www.themarginalian.org/the-coziest-place-on-the-moon/",
    domain: "themarginalian.org",
    writtenText: `<a href="https://www.themarginalian.org/the-coziest-place-on-the-moon/" target="_blank" rel="noopener" class="${linkClass}">The Coziest Place on the Moon</a> on The Marginalian.`
  },
  {
    id: "link-32",
    type: "link",
    title: "Monoskop",
    url: "https://monoskop.org/",
    domain: "monoskop.org",
    writtenText: `<a href="https://monoskop.org/" target="_blank" rel="noopener" class="${linkClass}">Monoskop</a> is a wiki on the web for arts and studies.`
  },
  {
    id: "link-33",
    type: "link",
    title: "Superbad.com",
    url: "https://superbad.com/",
    domain: "superbad.com",
    writtenText: `Classic net art experiment <a href="https://superbad.com/" target="_blank" rel="noopener" class="${linkClass}">superbad.com</a>.`
  },
  {
    id: "link-34",
    type: "link",
    title: "GPT progress over time",
    url: "https://progress.openai.com/",
    domain: "openai.com",
    writtenText: `It’s interesting to look at <a href="https://progress.openai.com/" target="_blank" rel="noopener" class="${linkClass}">GPT progress over time</a>.`
  },
  {
    id: "link-35",
    type: "link",
    title: "parallel.ai",
    url: "https://parallel.ai/",
    domain: "parallel.ai",
    writtenText: `Websites for humans and machines at <a href="https://parallel.ai/" target="_blank" rel="noopener" class="${linkClass}">parallel.ai</a>.`
  },
  {
    id: "link-36",
    type: "link",
    title: "What made Bell Labs special?",
    url: "https://sites.stat.columbia.edu/gelman/research/published/bell.pdf",
    domain: "columbia.edu",
    categories: ["essays"],
    writtenText: `Bell Labs was special, for reasons described <a href="https://sites.stat.columbia.edu/gelman/research/published/bell.pdf" target="_blank" rel="noopener" class="${linkClass}">here</a>.`
  },
  {
    id: "link-37",
    type: "link",
    title: "The Computational Lens",
    url: "http://theory.cs.berkeley.edu/computational-lens.html",
    domain: "berkeley.edu",
    writtenText: `UC Berkeley talking about <a href="http://theory.cs.berkeley.edu/computational-lens.html" target="_blank" rel="noopener" class="${linkClass}">The Computational Lens</a>.`
  },
  {
    id: "link-38",
    type: "link",
    title: "You and Your Research",
    url: "https://www.cs.virginia.edu/~robins/YouAndYourResearch.html",
    domain: "virginia.edu",
    categories: ["essays"],
    writtenText: `Richard Hamming’s legendary talk on <a href="https://www.cs.virginia.edu/~robins/YouAndYourResearch.html" target="_blank" rel="noopener" class="${linkClass}">You and Your Research</a> is essential reading on doing great work.`
  },
  {
    id: "link-39",
    type: "link",
    title: "Silicon",
    url: "https://arenamag.com/silicon",
    domain: "arenamag.com",
    writtenText: `Read about <a href="https://arenamag.com/silicon" target="_blank" rel="noopener" class="${linkClass}">Silicon</a> on Arena Mag.`
  },
  {
    id: "link-40",
    type: "link",
    title: "Gallery 98",
    url: "https://gallery98.org/",
    domain: "gallery98.org",
    writtenText: `Explore vintage art ephemera and rare items at <a href="https://gallery98.org/" target="_blank" rel="noopener" class="${linkClass}">Gallery 98</a>.`
  },
  {
    id: "link-41",
    type: "link",
    title: "ekdsgn",
    url: "https://ekdsgn.me/",
    domain: "ekdsgn.me",
    writtenText: `<a href="https://ekdsgn.me/" target="_blank" rel="noopener" class="${linkClass}">ekdsgn</a> is a fantastic, minimal design portfolio.`
  },
  {
    id: "link-43",
    type: "link",
    title: "Alicia's page",
    url: "https://www.alicias.page/",
    domain: "alicias.page",
    writtenText: `<a href="https://www.alicias.page/" target="_blank" rel="noopener" class="${linkClass}">Alicia’s page</a> is a fantastic personal corner of the web.`
  },
  {
    id: "link-44",
    type: "link",
    title: "jame",
    url: "https://www.jame.es/",
    domain: "jame.es",
    writtenText: `Personal space and design elements by <a href="https://www.jame.es/" target="_blank" rel="noopener" class="${linkClass}">jame</a>.`
  },
  {
    id: "link-46",
    type: "link",
    title: "floguo",
    url: "https://www.floguo.com/",
    domain: "floguo.com",
    writtenText: `<a href="https://www.floguo.com/" target="_blank" rel="noopener" class="${linkClass}">floguo</a> showcases fantastic visual work and design experiments.`
  },
  {
    id: "link-47",
    type: "link",
    title: "maxpotze",
    url: "https://www.maxpotze.com/",
    domain: "maxpotze.com",
    writtenText: `<a href="https://www.maxpotze.com/" target="_blank" rel="noopener" class="${linkClass}">maxpotze</a> is a fantastic portfolio in its own right.`
  },
  {
    id: "link-48",
    type: "link",
    title: "Sainsbury Archive",
    url: "https://www.sainsburyarchive.org.uk/catalogue/highlights",
    domain: "sainsburyarchive.org.uk",
    writtenText: `Explore design and advertising history in the <a href="https://www.sainsburyarchive.org.uk/catalogue/highlights" target="_blank" rel="noopener" class="${linkClass}">Sainsbury Archive catalogue highlights</a>.`
  },
  {
    id: "link-49",
    type: "link",
    title: "Tokyo",
    url: "https://tokyo.floguo.com/",
    domain: "floguo.com",
    writtenText: `Visual notes on <a href="https://tokyo.floguo.com/" target="_blank" rel="noopener" class="${linkClass}">Tokyo by floguo</a>.`
  },
  {
    id: "link-51",
    type: "link",
    title: "Spotted in Prod",
    url: "https://www.spottedinprod.com/",
    domain: "spottedinprod.com",
    writtenText: `Great collection of UI details <a href="https://www.spottedinprod.com/" target="_blank" rel="noopener" class="${linkClass}">Spotted in Prod</a>.`
  },
  {
    id: "link-55",
    type: "link",
    title: "Skill",
    url: "https://emilkowal.ski/skill",
    domain: "emilkowal.ski",
    writtenText: `Emil Kowalski’s thoughts on <a href="https://emilkowal.ski/skill" target="_blank" rel="noopener" class="${linkClass}">Skill</a> in software engineering and UI polish.`
  },
  {
    id: "link-57",
    type: "link",
    title: "Neato Studio",
    url: "https://studio.neato.fun/",
    domain: "neato.fun",
    writtenText: `Creative software and tools by <a href="https://studio.neato.fun/" target="_blank" rel="noopener" class="${linkClass}">Neato Studio</a>.`
  },
  {
    id: "link-59",
    type: "link",
    title: "Boz",
    url: "https://boz.com/",
    domain: "boz.com",
    writtenText: `Blog and essays by <a href="https://boz.com/" target="_blank" rel="noopener" class="${linkClass}">Boz</a>.`
  },
  {
    id: "link-61",
    type: "link",
    title: "DTV",
    url: "https://www.dtvbook.com/",
    domain: "dtvbook.com",
    categories: ["books"],
    writtenText: `Michael Moritz’s book on Don Valentine’s signature at <a href="https://www.dtvbook.com/" target="_blank" rel="noopener" class="${linkClass}">DTV</a>.`
  },
  {
    id: "link-62",
    type: "link",
    title: "Nine Jony Ive designs that aren't Apple products",
    url: "https://www.dezeen.com/2026/03/14/jony-ive-designs-roundup/",
    domain: "dezeen.com",
    categories: ["design"],
    writtenText: `Dezeen’s roundup of <a href="https://www.dezeen.com/2026/03/14/jony-ive-designs-roundup/" target="_blank" rel="noopener" class="${linkClass}">Nine Jony Ive designs that aren’t Apple products</a>.`
  },
  // Videos
  {
    id: "video-1",
    type: "video",
    title: "Powers of Ten",
    description: "Charles and Ray Eames' landmark film on scale in the universe (1977)",
    url: "https://www.youtube.com/watch?v=0fKBhvDjuy0",
    domain: "youtube.com",
    categories: ["design", "visual"],
    writtenText: `Charles and Ray Eames’ landmark 1977 film <a href="https://www.youtube.com/watch?v=0fKBhvDjuy0" target="_blank" rel="noopener">Powers of Ten</a>.`
  },
  {
    id: "video-2",
    type: "video",
    title: "The Idea Factory: Bell Labs and the Great Age of American Innovation",
    description: "Computer History Museum",
    url: "https://www.youtube.com/watch?v=e90sw6-qxmE",
    domain: "youtube.com",
    categories: ["tech", "archive"],
    writtenText: `Computer History Museum discussion on <a href="https://www.youtube.com/watch?v=e90sw6-qxmE" target="_blank" rel="noopener">The Idea Factory: Bell Labs and the Great Age of American Innovation</a>.`
  },
  {
    id: "video-3",
    type: "video",
    title: "Steve Jobs and John Lasseter interview on Pixar (1996)",
    description: "Manufacturing Intellect",
    url: "https://www.youtube.com/watch?v=SgWdjvRgouk",
    domain: "youtube.com",
    categories: ["tech", "design"],
    writtenText: `Manufacturing Intellect’s 1996 interview with <a href="https://www.youtube.com/watch?v=SgWdjvRgouk" target="_blank" rel="noopener">Steve Jobs and John Lasseter on Pixar</a>.`
  },
  {
    id: "video-4",
    type: "video",
    title: "Brian Tracy tells story of Alexander the Great",
    description: "Leadership & ambition",
    url: "https://www.youtube.com/watch?v=qJuC6CRHRQo",
    domain: "youtube.com",
    categories: ["history"],
    writtenText: `Brian Tracy tells the story of <a href="https://www.youtube.com/watch?v=qJuC6CRHRQo" target="_blank" rel="noopener">Alexander the Great</a>.`
  },
];

export const artifacts = bookmarks;
