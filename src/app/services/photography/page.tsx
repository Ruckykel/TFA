import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { FaCamera, FaImage, FaUsers, FaBuilding } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Photography | TFA Studios",
  description: "Editorial, product, and portrait photography crafted to elevate your visual identity.",
};

const services = [
  {
    icon: FaCamera,
    title: "Editorial & Portrait",
    description: "Crafted images that capture personality, emotion, and brand essence. We create striking portraits and editorial spreads that tell your story.",
    features: ["Studio Portraits", "Editorial Photography", "Headshots & Team Bios", "Fashion & Lookbooks"],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: FaImage,
    title: "Product & Commercial",
    description: "Clean, compelling product imagery that elevates your visual identity. From e-commerce to stylized campaign shots.",
    features: ["E-commerce Product Shots", "Stylized Commercial Shoots", "Food & Beverage", "Apparel & Accessories"],
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  {
    icon: FaUsers,
    title: "Event & Lifestyle",
    description: "Candid, authentic moments captured with a cinematic eye. We cover everything from corporate gatherings to private events.",
    features: ["Corporate Events", "Brand Activations", "Concerts & Festivals", "Lifestyle & Behind-the-scenes"],
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: FaBuilding,
    title: "Architectural & Interior",
    description: "Highlighting spaces with precision and style. We capture the essence of your architecture, interiors, and real estate properties.",
    features: ["Real Estate Photography", "Interior Design Portfolios", "Commercial Spaces", "Hospitality Venues"],
    gradient: "from-green-500/20 to-teal-500/20",
  },
];

export default function PhotographyPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Photography services" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 left-0 w-48 h-48 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-0 w-48 h-48 md:w-96 md:h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm text-blue-400 font-medium">Photography Services</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Capturing Moments That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Tell a Story
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Editorial, product, and portrait photography crafted to elevate your visual identity. We turn moments into masterpieces.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                Book a Session
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-blue-400 font-semibold text-sm tracking-wider uppercase">Our Expertise</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Photography Disciplines
            </h2>
            <p className="mt-4 text-white/70">
              From the studio to the field, we deliver high-end photography for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((category) => (
              <div
                key={category.title}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${category.gradient} backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-white/70 mb-6">{category.description}</p>

                <div className="space-y-3">
                  {category.features.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-sm text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-indigo-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-6 py-10 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Let&apos;s Capture{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Your Story</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Contact us to book a session or get a custom quote for your photography project.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
