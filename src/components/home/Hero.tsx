import React from "react";
import { home } from "../../data/copy";

/** Type-led opener, centred. */
export function Hero() {
  return (
    <section
      className="relative flex items-center pt-24 pb-10 md:min-h-[90vh] md:pt-28 md:pb-16"
      aria-label="Introduction"
    >
      <div className="container-wide text-center">
        <h1 className="headline text-[clamp(2.5rem,8.5vw,9rem)] font-medium">
          <span className="rise-in block">Connecting</span>
          <span className="rise-in block" style={{ animationDelay: "110ms" }}>
            Hearts{" "}
            <span className="font-serif-editorial font-normal italic normal-case text-accent">
              and
            </span>{" "}
            Minds
          </span>
        </h1>

        <p
          className="rise-in mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted md:mt-10 md:text-lg"
          style={{ animationDelay: "260ms" }}
        >
          {home.hero.intro}
        </p>
      </div>
    </section>
  );
}
