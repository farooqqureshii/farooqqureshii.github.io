export type ArtifactType = "image" | "link" | "video";

export type ArtifactCategory =
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
  | "visual";

export interface Artifact {
  id: string;
  type: ArtifactType;
  title: string;
  description?: string;
  url?: string;
  domain?: string;
  image?: string;
  alt?: string;
  /** Fetched at build from og:image / twitter:image */
  thumbnail?: string | null;
  /** Content categories for filtering */
  categories?: ArtifactCategory[];
}

export const artifacts: Artifact[] = [
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
  // Links
  { id: "link-1", type: "link", title: "Books of the Century", description: "Finding new books", url: "http://booksofthecentury.com/", domain: "booksofthecentury.com", categories: ["books"] },
  { id: "link-2", type: "link", title: "Watch Paul Graham write", description: "Essay writing in real time", url: "https://byronm.com/13sentences.html", domain: "byronm.com", categories: ["essays"] },
  { id: "link-3", type: "link", title: "Understanding Neural Networks", description: "Visual explanations", url: "https://visualrambling.space/neural-network/", domain: "visualrambling.space", categories: ["visual", "tech"] },
  { id: "link-4", type: "link", title: "Visual Rambling", description: "Interactive visual essays", url: "https://visualrambling.space/", domain: "visualrambling.space", categories: ["visual", "design"] },
  { id: "link-5", type: "link", title: "Apple's Original HIG", description: "Human Interface Guidelines 1992", url: "https://vintageapple.org/inside_r/pdf/Human_Interface_Guidelines_1992.pdf", domain: "vintageapple.org", categories: ["design", "archive"] },
  { id: "link-6", type: "link", title: "Blue Sky City", description: "A special reference", url: "https://www.blueskycity.ca/", domain: "blueskycity.ca" },
  { id: "link-7", type: "link", title: "Build Canada", description: "Notably", url: "https://buildcanada.com/", domain: "buildcanada.com" },
  { id: "link-8", type: "link", title: "Ambitious projects executed quickly", description: "Patrick Collison's examples", url: "https://patrickcollison.com/fast", domain: "patrickcollison.com" },
  { id: "link-9", type: "link", title: "Make Something Wonderful", description: "A collection from the life of Steve Jobs", url: "https://book.stevejobsarchive.com/", domain: "stevejobsarchive.com" },
  { id: "link-10", type: "link", title: "I'll Be Your Best Friend", description: "Folklore.org", url: "https://www.folklore.org/I'll_Be_Your_Best_Friend.html?sort=date", domain: "folklore.org" },
  { id: "link-11", type: "link", title: "Inventing on Principle", description: "Bret Victor's talk on empowering tools", url: "http://worrydream.com/#!/InventingOnPrinciple", domain: "worrydream.com" },
  { id: "link-12", type: "link", title: "The Web's Grain", description: "Frank Chimero", url: "https://frankchimero.com/blog/2015/the-webs-grain/", domain: "frankchimero.com" },
  { id: "link-13", type: "link", title: "Quality-of-life improvements", description: "Gwern Branwen's catalog", url: "https://gwern.net/improvement", domain: "gwern.net" },
  { id: "link-14", type: "link", title: "Hello Stranger", description: "The Pudding", url: "https://pudding.cool/2025/06/hello-stranger/", domain: "pudding.cool" },
  { id: "link-15", type: "link", title: "The Pudding", description: "Visual essays", url: "https://pudding.cool/", domain: "pudding.cool" },
  { id: "link-16", type: "link", title: "Design Arena", description: "Comparing AI design capabilities", url: "https://www.designarena.ai/", domain: "designarena.ai" },
  { id: "link-17", type: "link", title: "waste.space", description: "Incredible design inspiration", url: "https://waste.space/", domain: "waste.space", categories: ["design"] },
  { id: "link-18", type: "link", title: "Visual Journal", description: "visualjournal.it", url: "https://visualjournal.it/", domain: "visualjournal.it", categories: ["design", "visual"] },
  { id: "link-19", type: "link", title: "Radio.garden", description: "Listen to radio anywhere in the world", url: "https://radio.garden/", domain: "radio.garden" },
  { id: "link-20", type: "link", title: "Flat Design", description: "Nielsen Norman Group - usability tradeoffs", url: "https://www.nngroup.com/articles/flat-design/", domain: "nngroup.com" },
  { id: "link-21", type: "link", title: "Little Big Details", description: "UI micro-interactions", url: "https://littlebigdetails.com/", domain: "littlebigdetails.com" },
  { id: "link-22", type: "link", title: "Stripe book recommendations", description: "Press.stripe.com", url: "https://press.stripe.com/", domain: "stripe.com" },
  { id: "link-23", type: "link", title: "The Birth of Inter", description: "Figma blog", url: "https://www.figma.com/blog/the-birth-of-inter/", domain: "figma.com" },
  { id: "link-24", type: "link", title: "Whole Earth Catalog", description: "Every issue available online", url: "https://wholeearth.info/", domain: "wholeearth.info" },
  { id: "link-25", type: "link", title: "The Inner Ring", description: "C.S. Lewis", url: "https://www.lesswrong.com/posts/Y8rEA4e4DxafmeAbW/the-inner-ring-by-c-s-lewis", domain: "lesswrong.com", categories: ["essays"] },
  { id: "link-26", type: "link", title: "1964 New York World's Fair", description: "Archive available online", url: "http://www.nywf64.com/index.html", domain: "nywf64.com" },
  { id: "link-27", type: "link", title: "Letters from Sweden", description: "", url: "https://lettersfromsweden.se/", domain: "lettersfromsweden.se" },
  { id: "link-28", type: "link", title: "Lean", description: "Theorem prover", url: "https://leanprover.github.io/", domain: "leanprover.github.io" },
  { id: "link-29", type: "link", title: "mathlib", description: "Mathematical objects - Lean community", url: "https://leanprover-community.github.io/mathlib-overview.html", domain: "leanprover-community.github.io" },
  { id: "link-30", type: "link", title: "Making Software", description: "By Dan Hollick", url: "https://www.makingsoftware.com/", domain: "makingsoftware.com" },
  { id: "link-31", type: "link", title: "The Coziest Place on the Moon", description: "The Marginalian", url: "https://www.themarginalian.org/the-coziest-place-on-the-moon/", domain: "themarginalian.org" },
  { id: "link-32", type: "link", title: "Monoskop", description: "Wiki for arts and studies", url: "https://monoskop.org/", domain: "monoskop.org" },
  { id: "link-33", type: "link", title: "Superbad.com", description: "", url: "https://superbad.com/", domain: "superbad.com" },
  { id: "link-34", type: "link", title: "GPT progress over time", description: "OpenAI", url: "https://progress.openai.com/", domain: "openai.com" },
  { id: "link-35", type: "link", title: "parallel.ai", description: "Website for humans and machines", url: "https://parallel.ai/", domain: "parallel.ai" },
  { id: "link-36", type: "link", title: "What made Bell Labs special?", description: "PDF", url: "https://sites.stat.columbia.edu/gelman/research/published/bell.pdf", domain: "columbia.edu", categories: ["essays"] },
  { id: "link-37", type: "link", title: "The Computational Lens", description: "Berkeley", url: "http://theory.cs.berkeley.edu/computational-lens.html", domain: "berkeley.edu" },
  { id: "link-38", type: "link", title: "You and Your Research", description: "Richard Hamming on great research", url: "https://www.cs.virginia.edu/~robins/YouAndYourResearch.html", domain: "virginia.edu", categories: ["essays"] },
  { id: "link-39", type: "link", title: "Silicon", description: "Arena Mag", url: "https://arenamag.com/silicon", domain: "arenamag.com" },
  { id: "link-40", type: "link", title: "Gallery 98", description: "", url: "https://gallery98.org/", domain: "gallery98.org" },
  { id: "link-41", type: "link", title: "ekdsgn", description: "", url: "https://ekdsgn.me/", domain: "ekdsgn.me" },
  { id: "link-42", type: "link", title: "evra", description: "Design", url: "https://evra.design/", domain: "evra.design" },
  { id: "link-43", type: "link", title: "Alicia's page", description: "", url: "https://www.alicias.page/", domain: "alicias.page" },
  { id: "link-44", type: "link", title: "jame", description: "", url: "https://www.jame.es/", domain: "jame.es" },
  { id: "link-45", type: "link", title: "anahadd", description: "", url: "https://www.anahadd.com/", domain: "anahadd.com" },
  { id: "link-46", type: "link", title: "floguo", description: "", url: "https://www.floguo.com/", domain: "floguo.com" },
  { id: "link-47", type: "link", title: "maxpotze", description: "", url: "https://www.maxpotze.com/", domain: "maxpotze.com" },
  { id: "link-48", type: "link", title: "Sainsbury Archive", description: "Catalogue highlights", url: "https://www.sainsburyarchive.org.uk/catalogue/highlights", domain: "sainsburyarchive.org.uk" },
  { id: "link-49", type: "link", title: "Tokyo", description: "floguo", url: "https://tokyo.floguo.com/", domain: "floguo.com" },
  { id: "link-50", type: "link", title: "CodePen", description: "kynd", url: "https://codepen.io/kynd/pen/bNwqYvR", domain: "codepen.io" },
  { id: "link-51", type: "link", title: "Spotted in Prod", description: "", url: "https://www.spottedinprod.com/", domain: "spottedinprod.com" },
  { id: "link-52", type: "link", title: "desengs", description: "", url: "https://desengs.com/", domain: "desengs.com" },
  { id: "link-53", type: "link", title: "X post", description: "sassafrass_84", url: "https://x.com/sassafrass_84/status/2032913084474400852", domain: "x.com" },
  { id: "link-54", type: "link", title: "Anybox", description: "", url: "https://anybox.app/", domain: "anybox.app" },
  { id: "link-55", type: "link", title: "Skill", description: "Emil Kowalski", url: "https://emilkowal.ski/skill", domain: "emilkowal.ski" },
  { id: "link-56", type: "link", title: "Claude Throttle", description: "", url: "https://www.claudethrottle.com/", domain: "claudethrottle.com" },
  { id: "link-57", type: "link", title: "Neato Studio", description: "", url: "https://studio.neato.fun/", domain: "neato.fun" },
  { id: "link-58", type: "link", title: "Links", description: "A Sharma", url: "https://www.asharma.me/links/", domain: "asharma.me" },
  { id: "link-59", type: "link", title: "Boz", description: "", url: "https://boz.com/", domain: "boz.com" },
  { id: "link-60", type: "link", title: "The Adolescence of Technology", description: "Dario Amodei", url: "https://www.darioamodei.com/essay/the-adolescence-of-technology", domain: "darioamodei.com", categories: ["essays", "tech"] },
  { id: "link-61", type: "link", title: "DTV", description: "Don Valentine's Signature by Michael Moritz", url: "https://www.dtvbook.com/", domain: "dtvbook.com", categories: ["books"] },
  { id: "link-62", type: "link", title: "Nine Jony Ive designs that aren't Apple products", description: "Dezeen", url: "https://www.dezeen.com/2026/03/14/jony-ive-designs-roundup/", domain: "dezeen.com", categories: ["design"] },
  // Videos
  { id: "video-1", type: "video", title: "Inventing on Principle", description: "Bret Victor on creating tools that empower people", url: "https://vimeo.com/36579366", domain: "vimeo.com" },
];
