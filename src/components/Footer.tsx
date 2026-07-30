import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "./Container";

// Inline SVG icons to replace react-icons (eliminates ~100KB+ bundle from react-icons/fa6 and react-icons/md)
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3v9ZM6.5 8.5A1.75 1.75 0 1 1 6.5 5a1.75 1.75 0 0 1 0 3.5ZM20 19h-3v-4.5c0-1.1-.4-1.9-1.5-1.9-1.3 0-1.8 1-1.8 2V19h-3v-9h3v1.2A3.3 3.3 0 0 1 16.5 10c2.2 0 3.5 1.4 3.5 4.2V19Z" />
    </svg>
  );
}

function IconTiktok({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.28 6.28 0 1 0 6.28 6.28V9.67a8.2 8.2 0 0 0 3.83.96V7.18a4.84 4.84 0 0 1-.01-.49Z" />
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

function IconEmail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,4 12,13 2,4" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.93.69 2.85a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.92.33 1.88.56 2.85.69a2 2 0 0 1 1.72 2.03Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-elevated">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1 — Brand + Socials */}
          <div className="space-y-4 w-fit">
            <Link href="/" className="inline-flex">
              <Image src="/TFA.png" alt="TFA Studios" width={160} height={48} className="w-auto h-10 object-contain" />
            </Link>
            <p className="text-sm text-muted max-w-[40ch]">TFA Studios is a creative agency and media production house built on vision, precision, and the belief that great work changes everything.</p>
            <div className="flex items-center gap-4 text-muted">
              <Link href="#" aria-label="Instagram" className="hover:text-text" title="Instagram"><IconInstagram className="h-5 w-5" /></Link>
              <Link href="#" aria-label="YouTube" className="hover:text-text" title="YouTube"><IconYoutube className="h-5 w-5" /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-text" title="LinkedIn"><IconLinkedin className="h-5 w-5" /></Link>
              <Link href="#" aria-label="TikTok" className="hover:text-text" title="TikTok"><IconTiktok className="h-5 w-5" /></Link>
              <Link href="#" aria-label="X" className="hover:text-text" title="X"><IconX className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-sm font-semibold">Our Services</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services/video-film" className="text-sm text-muted hover:text-text">Video & Film Production</Link></li>
              <li><Link href="/services/photography" className="text-sm text-muted hover:text-text">Photography</Link></li>
              <li><Link href="/services/design" className="text-sm text-muted hover:text-text">Design</Link></li>
              <li><Link href="/services/creative-direction" className="text-sm text-muted hover:text-text">Creative Direction & Marketing</Link></li>
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-muted hover:text-text">About</Link></li>
              <li><Link href="/portfolio" className="text-sm text-muted hover:text-text">Portfolio</Link></li>
              <li><Link href="/contact" className="text-sm text-muted hover:text-text">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted hover:text-text">Careers</Link></li>
            </ul>
          </div>

          {/* Column 4 — Contact + Newsletter */}
          <div>
            <h4 className="text-sm font-semibold">Contact Us</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted">Lagos, Nigeria</li>
              <li className="text-sm text-muted flex items-center gap-2"><IconEmail className="h-4 w-4" /><a href="mailto:hello@tfastudios.com" className="hover:text-[#00F0FF] transition-colors">hello@tfastudios.com</a></li>
              <li className="text-sm text-muted flex items-center gap-2"><IconPhone className="h-4 w-4" /><a href="tel:+2348000000000" className="hover:text-[#00F0FF] transition-colors">+234 (0) 800 000 0000</a></li>
            </ul>
            <form className="mt-6 flex items-center gap-2">
              <input type="email" placeholder="Your email" className="w-48 rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent" />
              <button className="rounded-full bg-[#00F0FF] px-4 py-2 text-sm font-semibold text-black hover:brightness-110">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-sm text-muted">© {new Date().getFullYear()} TFA Studios. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
