import Link from "next/link";
import React from "react";
import { footer, studio } from "../data/copy";

/**
 * The wordmark is inline SVG rather than styled text: `textLength` pins it to
 * the container width at every viewport, so it can never overflow and clip,
 * and `lengthAdjust="spacing"` absorbs the difference as tracking instead of
 * stretching the glyphs.
 */
function Wordmark() {
  return (
    <svg
      viewBox="0 0 1200 200"
      role="img"
      aria-label={studio.name}
      className="block w-full"
    >
      <text
        x="600"
        y="158"
        textAnchor="middle"
        textLength="1180"
        lengthAdjust="spacing"
        className="fill-white transition-colors duration-500 group-hover:fill-accent"
        style={{
          fontFamily: "var(--font-jost), Futura, system-ui, sans-serif",
          fontWeight: 700,
          fontSize: "200px",
        }}
      >
        TFA STUDIOS
      </text>
    </svg>
  );
}

export function Footer() {
  /**
   * Inverted ground. The palette's lighter tones — custard, cream, mauve —
   * have no contrast on white, so the footer runs black and lets each column
   * heading take a colour that actually reads.
   */
  const columns = [
    {
      heading: "Studio",
      tone: "text-mauve",
      body: (
        <>
          <p className="font-serif-editorial text-xl italic text-white">
            {footer.tagline}
          </p>
          <p className="mt-2 text-sm text-white/60">{studio.location}</p>
        </>
      ),
    },
    {
      heading: "Reach Us",
      tone: "text-cream",
      body: (
        <a
          href={`mailto:${studio.email}`}
          className="text-sm text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          {studio.email}
        </a>
      ),
    },
    {
      heading: "Follow",
      tone: "text-custard",
      body: (
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {footer.social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <footer className="bg-black pt-16 md:pt-20">
      {/* Palette band, marking the change of ground */}
      <div aria-hidden="true" className="flex h-2 w-full">
        <span className="flex-1 bg-accent" />
        <span className="flex-1 bg-custard" />
        <span className="flex-1 bg-mauve" />
        <span className="flex-1 bg-cream" />
      </div>

      <div className="container-wide">
        <div className="grid grid-cols-1 gap-10 py-14 text-center md:grid-cols-3 md:gap-8">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col items-center">
              <p
                className={`text-[10px] uppercase tracking-[0.3em] ${col.tone}`}
              >
                {col.heading}
              </p>
              <div className="mt-4">{col.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Oversized wordmark — SVG, scales to fit, never clips */}
      <div className="group px-6">
        <Link href="/" aria-label={`${studio.name} — home`} className="block">
          <Wordmark />
        </Link>
      </div>

      <div className="container-wide">
        <div className="flex flex-col items-center gap-2 py-6 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {studio.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-white/50">{studio.location}</p>
        </div>
      </div>
    </footer>
  );
}
