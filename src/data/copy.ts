import type { Category } from "./works";

/**
 * Site copy, from the client copy deck.
 *
 * The deck supplied a canonical structure plus four alternative voices for
 * the homepage. The hero below uses the canonical "Main title"; section copy
 * follows Sample 4, whose outline matches the canonical structure most
 * closely. The other three voices are preserved in `homeVariants` — swapping
 * is a matter of editing this file, no component changes.
 */

export const studio = {
  name: "TFA Studios",
  tagline: "Connecting Hearts and Minds",
  location: "Lagos, Nigeria",
  email: "admin@tfastudioshq.com",
  founded: 2022,
};

export const home = {
  hero: {
    title: "Connecting Hearts and Minds",
    intro:
      "TFA Studios is a creative studio that uses film, photography, design, and creative strategy to tell stories, communicate ideas, and build brands.",
    primaryCta: { label: "Explore Our Work", href: "#work" },
    secondaryCta: { label: "Start a Project" },
  },

  work: {
    title: "Recent Projects",
    intro:
      "From documentary films to brand campaigns, every frame is built with intention.",
    cta: { label: "Explore Our Work", href: "/portfolio" },
  },

  /**
   * Homepage showreel, between the hero and Recent Projects.
   *
   * The YouTube id is the client placeholder. When the real cut arrives as a
   * file, drop it in public/ and set the file field — it takes priority
   * over youtubeId and plays as a native muted, looping video.
   */
  showreel: {
    title: "Showreel",
    intro: "A minute of the work: film, photography, and design in motion.",
    youtubeId: "PKPI44u7EMk",
    file: "",
    poster: "/studio/viewfinder.jpg",
  },

  about: {
    title: "About TFA Studios",
    body: [
      "TFA Studios is a creative studio built around one simple belief: good ideas deserve to be felt.",
      "Founded in 2022, we bring together film, photography, design, and creative strategy to build brands, tell stories, and create work that people actually remember.",
      "We're a mix of filmmakers, photographers, designers, and creative thinkers, working across culture, brands, and people to turn ideas into things worth seeing, sharing, and feeling.",
    ],
    cta: { label: "Come See Who We Are", href: "/about" },
    image: { src: "/studio/crew-duo.jpg", alt: "Two TFA Studios crew members smiling beside a cinema camera on set" },
  },

  services: {
    eyebrow: "What We Do",
    title: "Every Story Needs the Right Hands.",
    /** Small bracketed line, top right of the section. */
    note: "Four disciplines. One studio. From first idea to final frame.",
    items: [
      {
        title: "Film & Video Production",
        desc: "Commercials, documentaries, brand films, and cinematic content, scripted, shot, and edited end-to-end.",
        href: "/services/video-film",
        color: "accent",
      },
      {
        title: "Photography",
        desc: "Editorial, portrait, and product photography that elevates how your brand is seen.",
        href: "/services/photography",
        color: "custard",
      },
      {
        title: "Design",
        desc: "Visual identities and creative assets built to be remembered.",
        href: "/services/design",
        color: "mauve",
      },
      {
        title: "Creative Direction & Marketing",
        desc: "Strategy and execution for campaigns that connect, from concept to campaign.",
        href: "/services/creative-direction",
        color: "cream",
      },
    ],
    cta: { label: "See All Services", href: "/services" },
  },

  cta: {
    title: "Let's Make Something Worth Remembering.",
    body: "Whether you have a brief or just a feeling, we're ready to build with you.",
    button: "Start a Project",
  },
};

/** Alternative homepage voices from the deck, kept for easy swapping. */
export const homeVariants = {
  sample1: {
    heroTitle: "Film. Photography. Creative Direction.",
    workTitle: "The Proof Is in the Frame.",
    aboutTitle: "We Started With a Camera and a Conviction.",
    ctaTitle: "You Have a Story. Let's Tell It Right.",
  },
  sample2: {
    heroTitle: "Where Hearts Meet. Where Minds Connect.",
    workTitle: "Work That Connects.",
    aboutTitle: "We Make Connections.",
    ctaTitle: "Ready to Connect?",
  },
  sample3: {
    heroTitle: "Great Stories Don't Tell. They Connect.",
    workTitle: "Made to Move People.",
    aboutTitle: "We Believe in the Power of a Story Well Told.",
    ctaTitle: "The Best Stories Haven't Been Told Yet. Let's Change That.",
  },
};

/**
 * About page. Story, What We Do, Clients, Collective: one shell throughout so
 * the sections read as a single flow.
 */
export const about = {
  /** The deck's "Punchline" — a reference to the people behind the work. */
  punchline: {
    eyebrow: "Who We Are",
    lead: "TFA Studios is a creative agency with an ecosystem of talents dedicated to our ultimate goal:",
    emphasis: "connecting hearts and minds through storytelling.",
    body: [
      "Founded in 2022, we bring together the best minds across film, photography, design, and creative strategy to build brands, tell stories, and create work that resonates deeply with people.",
    ],
    image: {
      src: "/studio/about-team.jpg",
      alt: "TFA Studios crew filming a scene in a bookshop",
    },
  },
  story: {
    number: "01",
    label: "Our Story",
    portrait: {
      src: "/studio/feranmi.jpg",
      alt: "Feranmi Abiola, founder of TFA Studios",
    },
    /** Opening line, set large. */
    lead: "TFA Studios began with me, Feranmi Abiola, a filmmaker who has always been fascinated by people.",
    body: [
      "Long before TFA Studios had a name, a logo, or a defined identity, I was drawn to stories, the little things people said, the way they moved through the world, the things they cared about, and the emotions that existed beneath what we could see.",
      "I always believed that a good story can make you feel something. It can make you laugh, question what you believe, remember something you had forgotten, or see another person differently.",
      "That belief became the foundation of TFA Studios.",
      "I started TFA Studios because I wanted to create work that went beyond simply looking good. I wanted to make work that meant something.",
      "As a filmmaker, I found myself moving between different worlds: film, photography, branding, design, advertising and creative direction. But underneath all of them was the same question:",
    ],
    /** The question the story turns on, set as a pull quote. */
    question: "How do we make people care?",
    close: [
      "That question became increasingly important to me.",
      "Because whether we are telling the story of a person, building the identity of a brand, documenting a community, or creating a campaign, the goal is ultimately the same: to create a connection.",
      "A connection between an idea and the person experiencing it. Between hearts and minds.",
      "And that became the philosophy behind TFA Studios.",
    ],
    signature: { name: "Feranmi Abiola", role: "Founder, TFA Studios" },
  },
  /**
   * Replaces How We Think (removed per the client meeting). Rows come from
   * serviceDetails so the About page and the service pages never disagree.
   */
  services: {
    number: "02",
    label: "What We Do",
  },
  clients: {
    number: "03",
    label: "Our Clients",
  },
  collective: {
    number: "04",
    label: "Our Collective",
    /** DRAFTED — the deck asks for "more personality-driven" but gives no wording. */
    title: "Explorers, Storytellers, and Builders.",
    intro:
      "The people behind the work: filmmakers, photographers, designers, strategists, and creative thinkers who show up on set, in the edit, and in the room where the idea gets made.",
  },
};

export const portfolio = {
  title: "The Work Speaks.",
  intro:
    "From documentary films to brand campaigns, every frame is built with intention.",
};

export const footer = {
  tagline: "Connecting Hearts and Minds",
  services: [
    { label: "Video & Film", href: "/services/video-film" },
    { label: "Photography", href: "/services/photography" },
    { label: "Design", href: "/services/design" },
    { label: "Creative Direction & Marketing", href: "/services/creative-direction" },
  ],
  studio: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/contact" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "X", href: "#" },
  ],
};

/**
 * Studio collective. The deck marks this section "(To put pictures
 * together)": these are the studio's own on-set and event photographs, run
 * as one continuously scrolling strip. No names are attached — the deck
 * supplies none.
 */
export type Photo = { src: string; alt: string };

export const collective: Photo[] = [
  { src: "/studio/collective-stage.jpg", alt: "The TFA Studios collective together on stage after a screening" },
  { src: "/studio/collective-selfie.jpg", alt: "TFA crew members grinning into the camera on a location shoot" },
  { src: "/studio/collective-laptop.jpg", alt: "Team members reviewing work together on a laptop" },
  { src: "/studio/sound-recordist.jpg", alt: "Sound recordist monitoring audio on set" },
  { src: "/studio/collective-british-council.jpg", alt: "The team at the Creative Showcase Programme, British Council" },
  { src: "/studio/gimbal-operator.jpg", alt: "Camera operator rigging a gimbal" },
  { src: "/studio/camera-setup.jpg", alt: "Setting up a camera for an interview" },
  { src: "/studio/directing.jpg", alt: "Director guiding talent between takes" },
  { src: "/studio/makeup.jpg", alt: "Make-up touch-up before a scene" },
  { src: "/studio/night-shoot.jpg", alt: "Crew lining up a shot at night" },
  { src: "/studio/street-interview.jpg", alt: "Street interview in front of a mural" },
  { src: "/studio/screening-setup.jpg", alt: "Preparing the projection for a screening" },
  { src: "/studio/camera-operator.jpg", alt: "Camera operator beside a cinema camera" },
  { src: "/studio/on-location.jpg", alt: "Camera operator on location at dusk" },
  { src: "/studio/field-camera.jpg", alt: "Filming on location at an event" },
  { src: "/studio/night-set.jpg", alt: "Black-and-white moment on a night set" },
  { src: "/studio/set-teal.jpg", alt: "Crew at work on a colour-lit set" },
];

/* ------------------------------------------------------------------ */
/*  DRAFTED COPY — NOT FROM THE CLIENT DECK                            */
/*  The deck briefs these pages ("A strong opening", "Put information") */
/*  but supplies no wording. Everything below is drafted in the studio  */
/*  voice established by the deck and needs client review. The only     */
/*  hard facts used are the email and Lagos.                           */
/* ------------------------------------------------------------------ */

export type ServiceSlug =
  | "video-film"
  | "photography"
  | "design"
  | "creative-direction";

export type ServiceDetail = {
  slug: ServiceSlug;
  title: string;
  /** Page headline. */
  headline: string;
  intro: string;
  /** What the engagement covers, shown as short tags. */
  includes: string[];
  /** Cover image: the services card and the detail page hero. */
  image: Photo;
  /** Catalogue categories whose projects this page shows. */
  categories: Category[];
};

export const servicesPage = {
  eyebrow: "Services",
  /**
   * PLACEHOLDER — the client will send a new one-liner for this header
   * (meeting minutes). Swap it here when it arrives.
   */
  title: "From documentary films to brand campaigns, every frame is built with intention.",
  intro:
    "Four disciplines, one studio. We take an idea from the first conversation to the finished piece, and we do it under one roof, so nothing gets lost in the hand-off.",
  /** Was "Recent Projects" — renamed per the client meeting. */
  selected: {
    title: "Selected Projects",
    intro: "A few pieces we are proud of, across every discipline.",
  },
  clients: { title: "Trusted By" },
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "video-film",
    categories: ["film", "shorts"],
    image: { src: "/studio/interview-setup.jpg", alt: "Interview set lit and framed in the studio" },
    title: "Film & Video Production",
    headline: "From the First Word of a Script to the Final Colour Grade.",
    intro:
      "Commercials, documentaries, brand films, and cinematic content, scripted, shot, and edited end-to-end. We build work that earns attention and holds it.",
    includes: [
      "Commercials & brand films",
      "Documentary & narrative",
      "Social and short-form content",
      "Event and live coverage",
      "Scripting & storyboarding",
      "Colour grading, sound & post",
    ],
  },
  {
    slug: "photography",
    categories: ["photography"],
    image: { src: "/studio/photographer.jpg", alt: "Photographer reviewing shots between the seats of a cinema" },
    title: "Photography",
    headline: "Still Images That Carry Weight.",
    intro:
      "Editorial, portrait, and product photography that elevates how your brand is seen. Every frame considered, every shot intentional.",
    includes: [
      "Editorial & campaign shoots",
      "Portraits & headshots",
      "Product & commercial stills",
      "Event and documentary coverage",
      "Art direction & styling",
      "Retouching & delivery",
    ],
  },
  {
    slug: "design",
    categories: ["design"],
    image: { src: "/studio/design-session.jpg", alt: "Team working through ideas around a laptop" },
    title: "Design",
    headline: "Visual Language That Gives Your Brand a Face Worth Remembering.",
    intro:
      "Visual identities and creative assets built to be remembered, with systems that hold together everywhere your brand shows up.",
    includes: [
      "Brand identity & logo systems",
      "Type, colour & art direction",
      "Campaign and social assets",
      "Motion graphics & titles",
      "Print & editorial layout",
      "Brand guidelines",
    ],
  },
  {
    slug: "creative-direction",
    categories: ["strategy"],
    image: { src: "/studio/on-set-red-room.jpg", alt: "Directing a scene on a warmly lit set" },
    title: "Creative Direction & Marketing",
    headline: "We Shape How Your Story Reaches the World.",
    intro:
      "Strategy and execution for campaigns that connect, from concept to campaign, and we make sure it lands.",
    includes: [
      "Creative strategy & concept",
      "Campaign planning",
      "Art direction across media",
      "Content strategy & calendars",
      "Social & influencer campaigns",
      "Measurement & reporting",
    ],
  },
];

/**
 * Contact page, after the Anakle reference from the client meeting: the
 * visitor's details first, written as one sentence they fill in, then the
 * studio's own details for project enquiries.
 */
export const contactPage = {
  eyebrow: "Contact",
  title: "Let's Talk.",
  /** Options for the "I'd like to talk about…" blank. */
  topics: [
    "Film & Video Production",
    "Photography",
    "Design",
    "Creative Direction & Marketing",
    "Something else",
  ],
  /** Only the email and city are confirmed. Phone deliberately omitted. */
  details: [
    { label: "Projects & enquiries", value: studio.email, href: `mailto:${studio.email}` },
    { label: "Studio", value: studio.location, href: null },
  ],
};

/**
 * Client logos, in the deck's order. Backgrounds were removed from the
 * supplied files (public/brandlogos) into public/clients; width and height
 * are the trimmed PNG's pixel size, used to size each mark optically so a
 * wide wordmark and a square badge read at the same visual weight.
 */
export type Client = { name: string; logo: string; width: number; height: number };

export const clients: Client[] = [
  { name: "Google", logo: "/clients/google.png", width: 535, height: 177 },
  { name: "DelYork", logo: "/clients/delyork.png", width: 502, height: 503 },
  { name: "NFL", logo: "/clients/nfl.png", width: 465, height: 640 },
  { name: "Africa Finance Corporation", logo: "/clients/afc.png", width: 487, height: 135 },
  { name: "SEDC", logo: "/clients/sedc.png", width: 474, height: 229 },
  { name: "Wetalksound", logo: "/clients/wetalksound.png", width: 504, height: 152 },
  { name: "France in Nigeria", logo: "/clients/france-in-nigeria.png", width: 247, height: 260 },
  { name: "Yahshud", logo: "/clients/yahshud.png", width: 156, height: 66 },
  { name: "Hatricks by Tolani", logo: "/clients/hatricks-by-tolani.png", width: 87, height: 91 },
  { name: "Dashme Foundation", logo: "/clients/dashme-foundation.png", width: 127, height: 162 },
  { name: "Chance by Drawmax", logo: "/clients/chance-by-drawmax.png", width: 225, height: 225 },
  { name: "Aproko Doctor Global", logo: "/clients/aproko-doctor-global.png", width: 196, height: 70 },
  { name: "HerVest", logo: "/clients/hervest.png", width: 500, height: 192 },
];
