"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { categoryLabels, type Work } from "../data/works";

type Props = {
  work: Work;
  /** Tailwind aspect class, e.g. "aspect-[3/4]". Ignored when `fill` is set. */
  aspect?: string;
  /** Stretch to the parent grid cell instead of imposing an aspect ratio. */
  fill?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * One project cell. Renders a silent looping clip where one exists, the still
 * where it doesn't, and a typographic placeholder where neither has landed.
 * Video is fetched only as the tile nears the viewport and pauses on exit, so
 * a wall of autoplaying tiles never decodes all at once.
 */
export function WorkTile({
  work,
  aspect = "aspect-[4/3]",
  fill = false,
  className = "",
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
}: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.preload !== "auto") video.preload = "auto";
          void video.play().catch(() => {
            /* autoplay refused — the poster stays put */
          });
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const media = (
    <div
      className={`relative overflow-hidden bg-elevated ${
        fill ? "h-full w-full" : `w-full ${aspect}`
      }`}
    >
      {work.src ? (
        <video
          ref={ref}
          src={work.src}
          poster={work.poster ?? undefined}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : work.poster ? (
        <Image
          src={work.poster}
          alt={work.title}
          fill
          unoptimized
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        /* No media yet — a considered placeholder rather than a broken frame */
        <div className="flex h-full w-full items-center justify-center border border-border p-4">
          <span className="headline text-center text-lg leading-tight text-muted md:text-xl">
            {work.title}
          </span>
        </div>
      )}

      {/* Label reveals on hover, keeping the wall clean at rest */}
      {(work.poster || work.src) && (
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-accent">
              {categoryLabels[work.category]}
            </p>
            <p className="mt-1 text-sm font-medium text-white">{work.title}</p>
          </div>
        </div>
      )}
    </div>
  );

  if (!work.href) {
    return (
      <div className={`group block ${fill ? "h-full" : ""} ${className}`}>
        {media}
      </div>
    );
  }

  return (
    <Link
      href={work.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${fill ? "h-full" : ""} ${className}`}
      aria-label={`${work.title} — ${categoryLabels[work.category]}`}
    >
      {media}
    </Link>
  );
}
