/**
 * TFA Studios project catalogue.
 *
 * Sourced from the client copy deck. Most entries have no media yet:
 *   - `poster: null`  → tile renders a typographic placeholder
 *   - `src: null`     → tile shows the still instead of a looping clip
 *   - `href: null`    → tile is not a link
 *
 * To bring a project live: drop the clip in /public/works, the still in
 * /public/works/stills, and fill the three fields. Nothing else changes.
 */

export type Category = "film" | "shorts" | "photography" | "design" | "strategy";

export type Work = {
  title: string;
  category: Category;
  /** Short line used on the homepage rail. Optional. */
  blurb?: string;
  /** Full piece, usually YouTube. */
  href: string | null;
  /** Still frame — also the video poster. */
  poster: string | null;
  /** Silent looping clip. */
  src: string | null;
};

export const categoryLabels: Record<Category, string> = {
  film: "Film",
  shorts: "Shorts",
  photography: "Photography",
  design: "Design",
  strategy: "Creative Strategy",
};

/** Display order for filters and section headings. */
export const categoryOrder: Category[] = [
  "film",
  "shorts",
  "photography",
  "design",
  "strategy",
];

const yt = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

export const works: Work[] = [
  // ---- FILM ----
  {
    title: "Mara Mania",
    category: "film",
    blurb:
      "A documentary film exploring the sound of Lagos' underground Mara movement.",
    href: "https://youtu.be/N2t_YyIgiQ8",
    poster: yt("N2t_YyIgiQ8"),
    src: null,
  },
  {
    title: "Google",
    category: "film",
    blurb: "A promotional campaign featuring Layi Wasabi.",
    href: "https://youtu.be/8fiNlWEeQuI",
    poster: yt("8fiNlWEeQuI"),
    src: null,
  },
  {
    title: "Sounds of Nollywood",
    category: "film",
    blurb:
      "A documentary spotlighting the sonic storytellers shaping the identity of Nollywood cinema.",
    href: "https://youtu.be/CDJulHBPYxE",
    poster: yt("CDJulHBPYxE"),
    src: null,
  },
  {
    title: "DelYork",
    category: "film",
    blurb:
      "A campaign highlighting the experiences, growth, and aspirations of Del-York Creative Academy participants.",
    href: "https://youtu.be/2q6PZJUGeKc",
    poster: yt("2q6PZJUGeKc"),
    src: null,
  },
  {
    title: "Uber",
    category: "film",
    blurb: "A narrative-driven commercial campaign created for Uber.",
    href: "https://youtu.be/VXY2kKBuDcA",
    poster: yt("VXY2kKBuDcA"),
    src: null,
  },
  { title: "NFL Documentary", category: "film", href: null, poster: null, src: null },
  { title: "Greatest Gbogbo", category: "film", href: null, poster: null, src: null },
  { title: "I Never Left", category: "film", href: null, poster: null, src: null },
  { title: "ISO Welcome Video", category: "film", href: null, poster: null, src: null },
  { title: "Yashuud", category: "film", href: null, poster: null, src: null },
  { title: "HerVest Cliq", category: "film", href: null, poster: null, src: null },
  { title: "Dr Lena Hooding Ceremony", category: "film", href: null, poster: null, src: null },
  { title: "SUN Project", category: "film", href: null, poster: null, src: null },
  { title: "Investigators", category: "film", href: null, poster: null, src: null },
  { title: "Glowstick", category: "film", href: null, poster: null, src: null },

  // ---- SHORTS ----
  { title: "The Root I Carry", category: "shorts", href: null, poster: null, src: null },
  { title: "Jamz", category: "shorts", href: null, poster: null, src: null },
  { title: "Oroi's CCI", category: "shorts", href: null, poster: null, src: null },
  { title: "Taiye Lifestyle", category: "shorts", href: null, poster: null, src: null },
  { title: "Morich", category: "shorts", href: null, poster: null, src: null },

  // ---- PHOTOGRAPHY ----
  { title: "HerVest Value Up 2025", category: "photography", href: null, poster: null, src: null },
  { title: "Jamz", category: "photography", href: null, poster: null, src: null },
  { title: "Morich", category: "photography", href: null, poster: null, src: null },
  { title: "Xplode", category: "photography", href: null, poster: null, src: null },

  // ---- DESIGN ----
  { title: "Chance by Drawmax", category: "design", href: null, poster: null, src: null },
  { title: "CCI", category: "design", href: null, poster: null, src: null },
  { title: "Jamz", category: "design", href: null, poster: null, src: null },
  { title: "Morich", category: "design", href: null, poster: null, src: null },
  { title: "Blackish", category: "design", href: null, poster: null, src: null },

  // ---- CREATIVE STRATEGY ----
  { title: "Blackish", category: "strategy", href: null, poster: null, src: null },
  { title: "Jamz", category: "strategy", href: null, poster: null, src: null },
  { title: "Xplode — Lost", category: "strategy", href: null, poster: null, src: null },
  { title: "Chance by Drawmax", category: "strategy", href: null, poster: null, src: null },
  { title: "Aproko Doctor Global", category: "strategy", href: null, poster: null, src: null },
  { title: "Tweehz", category: "strategy", href: null, poster: null, src: null },
];

/** Projects with real media, for the homepage recent-work rail. */
export const recentWorks: Work[] = works.filter((w) => w.poster !== null);

export const worksByCategory = (category: Category) =>
  works.filter((w) => w.category === category);
