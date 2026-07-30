import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "../../components/Container";

// Inline SVG icons to replace react-icons (saves bundle size)
function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.5A1.75 1.75 0 1 1 6.5 5a1.75 1.75 0 0 1 0 3.5ZM20 19h-3v-4.5c0-1.1-.4-1.9-1.5-1.9-1.3 0-1.8 1-1.8 2V19h-3v-9h3v1.2A3.3 3.3 0 0 1 16.5 10c2.2 0 3.5 1.4 3.5 4.2V19Z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

type Member = {
  name: string;
  role: string;
  bio: string;
  img: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
};

const members: Member[] = [
  {
    name: "Collins Nnaji",
    role: "Data Analytics & Architecture Specialist",
    bio: "Experienced in designing, implementing, and optimizing data-driven solutions. Skilled in SQL, Power BI, Azure, Python, and Power Automate, with expertise in data engineering and cloud architecture.",
    img: "/Collins.png",
    linkedin: "https://www.linkedin.com/in/collins-nnaji"
  },
  {
    name: "Joshua Omoraiyewa",
    role: "Solutions & Enterprise Architect",
    bio: "Experienced in Cloud computing, DevOps, and Security, driving digital transformation for diverse products. Specializes in Microsoft Azure and AWS solutions that align with business requirements.",
    img: "/Joshua.png",
    linkedin: "https://www.linkedin.com/in/omoraiyewa-joshua"
  },
  {
    name: "Peace Nnaji",
    role: "Digital Marketer & Social Media Manager",
    bio: "Strategic digital marketer with expertise in social media management, content strategy, and brand growth across multiple platforms.",
    img: "/Peace.png",
    linkedin: "https://www.linkedin.com/in/peace-nnaji-164682326"
  },
  {
    name: "Favour Nnaji",
    role: "Product Designer & Web Developer",
    bio: "Creative product designer and web developer focused on crafting intuitive user experiences and building responsive, modern web applications.",
    img: "/Favour.png",
    linkedin: "https://www.linkedin.com/in/favour-nnaji-b585073a5"
  },
];

export function Team() {
  return (
    <section aria-label="Team" className="py-8">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[11px] tracking-widest text-white/60">MEET OUR TEAM</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">The Creative Minds Behind the Magic</h2>
          <p className="mt-2 text-sm md:text-base text-white/70">A team of creators, strategists, designers, and developers — united by a love for storytelling and innovation. We bring diverse skills and bold perspectives to every project, ensuring TFA Studios delivers work that feels fresh, dynamic, and distinctly you.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((m) => (
            <div key={m.name} className="rounded-xl border border-white/10 bg-white/5 p-2">
              <div className="relative w-full h-44 md:h-56 overflow-hidden rounded-lg">
                <Image src={m.img} alt={m.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="mt-3">
                <h3 className="text-sm font-semibold">{m.name}</h3>
                <p className="text-xs text-[#00F0FF] font-semibold">{m.role}</p>
                <p className="mt-2 text-xs text-white/70">{m.bio}</p>
                <div className="mt-3 flex items-center gap-3 text-white/70">
                  {m.linkedin && (
                    <Link href={m.linkedin} target="_blank" aria-label={`${m.name} on LinkedIn`} className="hover:text-white"><IconLinkedin className="h-4 w-4" /></Link>
                  )}
                  {m.instagram && (
                    <Link href={m.instagram} target="_blank" aria-label={`${m.name} on Instagram`} className="hover:text-white"><IconInstagram className="h-4 w-4" /></Link>
                  )}
                  {m.twitter && (
                    <Link href={m.twitter} target="_blank" aria-label={`${m.name} on X`} className="hover:text-white"><IconX className="h-4 w-4" /></Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
