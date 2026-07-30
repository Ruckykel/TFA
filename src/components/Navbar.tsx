"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Container } from "./Container";
import { ContactButton } from "./ContactButton";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Video & Film Production", href: "/services/video-film" },
  { label: "Photography", href: "/services/photography" },
  { label: "Design", href: "/services/design" },
  { label: "Creative Direction & Marketing", href: "/services/creative-direction" },
];

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const onServicesLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const next = e.relatedTarget as EventTarget | null;
    const container = servicesRef.current;
    if (!container) {
      setServicesOpen(false);
      return;
    }
    if (next && typeof next === "object" && "nodeType" in (next as Node)) {
      const node = next as Node;
      if (container.contains(node)) return;
    }
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <Container className="py-3">
        <div className="relative">
          {/* Mild accent glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#00F0FF]/6 blur-md" aria-hidden="true" />
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:backdrop-blur px-3 py-2 ring-1 ring-[#00F0FF]/10 shadow-[0_0_10px_rgba(0,240,255,0.08)]">
            <Link href="/" className="flex items-center gap-2 pl-1">
              <Image src="/TFA.png" alt="TFA Studios" width={140} height={40} className="w-auto h-8 md:h-10 object-contain" priority />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) =>
                item.label === "Services" ? (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={onServicesLeave}
                    ref={servicesRef}
                  >
                    <Link href={item.href} className="text-sm text-muted inline-flex items-center gap-1 rounded-full px-3 py-1 transition-colors hover:bg-[#00F0FF] hover:text-black">
                      {item.label}
                      <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-text" : "text-muted"}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" /></svg>
                    </Link>
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-0 -translate-y-px min-w-[300px] rounded-lg border border-white/10 bg-[rgba(12,16,24,0.6)] backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-2 z-[60] transition duration-150 ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={onServicesLeave}
                    >
                      <div className="grid">
                        {serviceLinks.map((sl) => (
                          <Link key={sl.href} href={sl.href} className="rounded-md px-4 py-2 text-sm text-muted hover:text-text transition-colors">
                            <span className="nav-link inline-block">{sl.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.href} href={item.href} className="text-sm text-muted rounded-full px-3 py-1 transition-colors hover:bg-[#00F0FF] hover:text-black">
                    {item.label}
                  </Link>
                )
              )}
            </nav>
            <div className="hidden md:block pr-1">
              <ContactButton
                className="inline-flex items-center justify-center rounded-full font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-[1px] px-6 py-2.5 text-sm bg-[#00F0FF] text-black hover:brightness-110 focus-visible:ring-[#00F0FF]"
              >
                Get Started
              </ContactButton>
            </div>

            {/* Mobile hamburger button */}
            <button
              className="md:hidden flex items-center justify-center h-10 w-10 rounded-full text-white/80 hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>

          {/* Mobile dropdown menu */}
          {mobileOpen && (
            <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-[rgba(12,16,24,0.95)] backdrop-blur-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 border-t border-white/10 pt-3">
                <p className="px-4 text-[10px] tracking-widest text-white/40 uppercase mb-2">Services</p>
                {serviceLinks.map((sl) => (
                  <Link
                    key={sl.href}
                    href={sl.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-2 text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {sl.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <ContactButton
                  className="w-full flex items-center justify-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110"
                >
                  Get Started
                </ContactButton>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
