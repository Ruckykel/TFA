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
  founded: 2021,
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
    eyebrow: "Recent Projects",
    title: "The Work Speaks.",
    intro:
      "From documentary films to brand campaigns — every frame is built with intention.",
    cta: { label: "Explore Our Work", href: "/portfolio" },
  },

  about: {
    eyebrow: "About",
    title: "Built on Craft. Driven by Story.",
    body: [
      "TFA Studios is a creative studio built around one simple belief: good ideas deserve to be felt.",
      "Founded in 2021, we bring together film, photography, design, and creative strategy to build brands, tell stories, and create work that people actually remember.",
      "We're a mix of filmmakers, photographers, designers, and creative thinkers, working across culture, brands, and people to turn ideas into things worth seeing, sharing, and feeling.",
    ],
    cta: { label: "Come See Who We Are", href: "/about" },
  },

  services: {
    eyebrow: "What We Do",
    title: "Every Story Needs the Right Hands.",
    /** Small bracketed line, top right of the section. */
    note: "Four disciplines. One studio. From first idea to final frame.",
    items: [
      {
        title: "Film & Video Production",
        desc: "Commercials, documentaries, brand films, and cinematic content — scripted, shot, and edited end-to-end.",
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
        desc: "Strategy and execution for campaigns that connect — from concept to campaign.",
        href: "/services/creative-direction",
        color: "cream",
      },
    ],
    cta: { label: "See All Services", href: "/services" },
  },

  cta: {
    title: "Let's Make Something Worth Remembering.",
    body: "Whether you have a brief or just a feeling — we're ready to build with you.",
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

/** About page — five sections, per the deck's numbered outline. */
export const about = {
  hero: {
    title: "We Started With a Camera and a Conviction.",
    intro:
      "A collective of filmmakers, photographers, designers, and creative thinkers.",
  },
  story: {
    number: "01",
    label: "Our Story",
    body: [
      "In 2021, Feranmi picked up a camera with one belief — that every idea, every person, every brand has a story worth telling well. TFA Studios grew from that conviction.",
      "Today we are a team of young, driven creatives who create stories that don't just communicate — they connect.",
      "We are not just executing briefs. We are building something that lasts.",
    ],
  },
  think: {
    number: "02",
    label: "How We Think",
    body: [
      "There is a moment — in a film, a photograph, a campaign — where everything clicks. Where an audience stops scrolling, stops thinking, and just feels. That moment is what we chase.",
      "We work close to the people we build with. Collaboration over hand-off, craft over shortcuts, and an attention to detail that shows up in the final frame.",
      "We will not put our name on work that doesn't move someone.",
    ],
  },
  services: {
    number: "03",
    label: "What We Do",
    items: [
      "Film & Video",
      "Photography",
      "Creative Direction",
      "Design",
      "Branding & Creative Strategy",
    ],
  },
  collective: {
    number: "04",
    label: "Our Collective",
    intro:
      "The people behind the work — filmmakers, photographers, designers, and creative directors.",
  },
};

export const portfolio = {
  title: "The Work Speaks.",
  intro:
    "From documentary films to brand campaigns — every frame is built with intention.",
};

export const footer = {
  tagline: "Connecting Hearts and Minds",
  services: [
    { label: "Video & Film", href: "/services/video-film" },
    { label: "Photography", href: "/services/photography" },
    { label: "Design", href: "/services/design" },
    { label: "Creative Direction", href: "/services/creative-direction" },
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
 * Studio collective. The copy deck marks this section "(To put pictures
 * together)" but supplies no names or portraits, so it ships empty — the
 * section renders its heading and intro until members are added here.
 */
export type Member = { name: string; role: string; img: string | null };
export const collective: Member[] = [];

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
  /** What the engagement covers. */
  includes: string[];
  /** How the work runs, start to finish. */
  process: { step: string; title: string; desc: string }[];
};

export const servicesPage = {
  eyebrow: "Services",
  /** DRAFTED — the deck asks only for "a strong opening". */
  title: "Every Story Needs the Right Hands.",
  intro:
    "Four disciplines, one studio. We take an idea from the first conversation to the finished piece — and we do it under one roof, so nothing gets lost in the hand-off.",
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "video-film",
    title: "Film & Video Production",
    headline: "From the First Word of a Script to the Final Colour Grade.",
    intro:
      "Commercials, documentaries, brand films, and cinematic content — scripted, shot, and edited end-to-end. We build work that earns attention and holds it.",
    includes: [
      "Commercials & brand films",
      "Documentary & narrative",
      "Social and short-form content",
      "Event and live coverage",
      "Scripting & storyboarding",
      "Colour grading, sound & post",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "We start with the idea and the audience — what needs to be said, and who needs to feel it.",
      },
      {
        step: "02",
        title: "Pre-production",
        desc: "Script, storyboard, casting, location, schedule. The work is won or lost here.",
      },
      {
        step: "03",
        title: "Production",
        desc: "On set with a crew that knows the plan and can move when the plan changes.",
      },
      {
        step: "04",
        title: "Post",
        desc: "Edit, colour, sound, and delivery in every format you need.",
      },
    ],
  },
  {
    slug: "photography",
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
    process: [
      {
        step: "01",
        title: "Brief",
        desc: "We agree the look, the list, and what each image has to do.",
      },
      {
        step: "02",
        title: "Direction",
        desc: "References, styling, and location locked before anyone picks up a camera.",
      },
      {
        step: "03",
        title: "Shoot",
        desc: "A calm set and a clear shot list, with room for the frames you can't plan.",
      },
      {
        step: "04",
        title: "Delivery",
        desc: "Selected, retouched, and supplied in the crops and formats you'll actually use.",
      },
    ],
  },
  {
    slug: "design",
    title: "Design",
    headline: "Visual Language That Gives Your Brand a Face Worth Remembering.",
    intro:
      "Visual identities and creative assets built to be remembered — systems that hold together everywhere your brand shows up.",
    includes: [
      "Brand identity & logo systems",
      "Type, colour & art direction",
      "Campaign and social assets",
      "Motion graphics & titles",
      "Print & editorial layout",
      "Brand guidelines",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        desc: "Where the brand stands today, and what's getting in its way.",
      },
      {
        step: "02",
        title: "Direction",
        desc: "Routes explored properly, then narrowed to the one that fits.",
      },
      {
        step: "03",
        title: "Build",
        desc: "The identity drawn out across every asset it needs to live on.",
      },
      {
        step: "04",
        title: "Handover",
        desc: "Guidelines and files your team can run with without us in the room.",
      },
    ],
  },
  {
    slug: "creative-direction",
    title: "Creative Direction & Marketing",
    headline: "We Shape How Your Story Reaches the World.",
    intro:
      "Strategy and execution for campaigns that connect — from concept to campaign, and we make sure it lands.",
    includes: [
      "Creative strategy & concept",
      "Campaign planning",
      "Art direction across media",
      "Content strategy & calendars",
      "Social & influencer campaigns",
      "Measurement & reporting",
    ],
    process: [
      {
        step: "01",
        title: "Position",
        desc: "What you stand for, who you're for, and why anyone should care.",
      },
      {
        step: "02",
        title: "Concept",
        desc: "The idea the whole campaign hangs on — one line everyone can repeat.",
      },
      {
        step: "03",
        title: "Produce",
        desc: "Film, stills, and design made to the concept, not bolted on after.",
      },
      {
        step: "04",
        title: "Launch",
        desc: "Rollout, channels, and the reporting that tells you if it worked.",
      },
    ],
  },
];

export const contactPage = {
  eyebrow: "Contact",
  /** DRAFTED — the deck says only "Put information". */
  title: "You Have a Story. Let's Tell It Right.",
  intro:
    "Whether you have a brief or just a feeling — tell us what you're building and we'll help you say it in a way people won't forget.",
  /** Only the email and city are confirmed. Phone deliberately omitted. */
  details: [
    { label: "Email", value: studio.email, href: `mailto:${studio.email}` },
    { label: "Studio", value: studio.location, href: null },
  ],
};
