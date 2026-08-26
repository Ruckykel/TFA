"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ContactButton } from "./ContactButton";
import { LiveLink } from "./LiveLink";

/** Page list per the client reference. Gated routes stay visible but inert. */
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
];

const liveClass =
  "nav-link text-xs uppercase tracking-[0.2em] text-text transition-colors hover:text-accent";
/* Gated: present in the map of the site, but visibly not yet open. */
const gatedClass =
  "text-xs uppercase tracking-[0.2em] text-muted/50 cursor-default select-none";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between py-5">
          <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
            <Image
              src="/TFA.png"
              alt="TFA Studios"
              width={140}
              height={40}
              className="h-7 w-auto object-contain md:h-8"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:gap-9 md:flex">
            {navItems.map((item) => (
              <LiveLink
                key={item.href}
                href={item.href}
                gated="text"
                className={liveClass}
                gatedClassName={gatedClass}
                gatedTitle="Coming soon"
              >
                {item.label}
              </LiveLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <ContactButton className="nav-cta border-2 border-black bg-mauve px-6 py-3 text-xs uppercase tracking-[0.2em] text-black hover:bg-accent">
              Start a Project
            </ContactButton>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center text-text md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 7h18M3 17h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-bg md:hidden">
          <div className="container-wide py-8">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <LiveLink
                  key={item.href}
                  href={item.href}
                  gated="text"
                  className="headline block border-b border-border py-5 text-3xl text-text"
                  gatedClassName="headline block border-b border-border py-5 text-3xl text-muted/40 cursor-default select-none"
                  gatedTitle="Coming soon"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </LiveLink>
              ))}
            </nav>

            <ContactButton className="mt-10 w-full border-2 border-black bg-mauve px-6 py-4 text-xs uppercase tracking-[0.2em] text-black">
              Start a Project
            </ContactButton>
          </div>
        </div>
      )}
    </header>
  );
}
