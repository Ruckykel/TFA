import React from "react";
import Image from "next/image";
import { clients } from "../data/copy";

/**
 * Optical sizing: every mark gets the same visual area rather than the same
 * width or height, so a long wordmark and a square badge read at one weight.
 * Width = √(area × aspect), height = √(area ÷ aspect), then clamped so very
 * tall or very wide marks don't dominate their cell.
 */
const AREA = 5200;
const MAX_W = 150;
const MAX_H = 70;

/** Display width in px; height follows from the aspect ratio. */
function displayWidth(width: number, height: number) {
  const aspect = width / height;
  const w = Math.sqrt(AREA * aspect);
  const h = Math.sqrt(AREA / aspect);
  const scale = Math.min(1, MAX_W / w, MAX_H / h);
  return Math.round(w * scale);
}

/** `narrow`: for a column rather than the full container — four per row at most. */
export function ClientLogos({
  className = "",
  narrow = false,
}: {
  className?: string;
  narrow?: boolean;
}) {
  return (
    <ul
      className={`flex flex-wrap justify-center gap-y-2 ${className}`}
      aria-label="Clients"
    >
      {clients.map((c) => {
        const w = displayWidth(c.width, c.height);
        return (
          <li
            key={c.name}
            className={`flex h-24 w-1/3 items-center justify-center px-3 sm:w-1/4 md:h-28 ${
              narrow ? "" : "lg:w-1/5"
            }`}
          >
            <Image
              src={c.logo}
              alt={c.name}
              width={c.width}
              height={c.height}
              sizes="160px"
              style={{ width: w, height: "auto", maxWidth: "100%" }}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </li>
        );
      })}
    </ul>
  );
}
