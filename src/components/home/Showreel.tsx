import React from "react";
import { home } from "../../data/copy";

/**
 * Showreel, directly under the hero.
 *
 * Two sources, one shape: a local file wins if `showreel.file` is set,
 * otherwise the YouTube placeholder is embedded. Both ship muted — browsers
 * refuse to autoplay video with sound, so muted is what makes autoplay work
 * at all.
 *
 * The frame is 16:9 but width-limited by viewport height: at 1680px wide it
 * would compute ~945px tall, taller than most screens. `max-w-[142vh]` caps
 * the width at the point where 16:9 reaches 80vh, so the reel never runs
 * past a screen no matter how wide the display.
 */
export function Showreel() {
  const { title, intro, file, youtubeId, poster } = home.showreel;

  return (
    <section
      id="showreel"
      className="pt-4 pb-14 md:pt-8 md:pb-24"
      aria-labelledby="showreel-heading"
    >
      <div className="container-wide">
        <h2
          id="showreel-heading"
          className="headline flex items-center gap-3 text-4xl md:text-5xl"
        >
          <span aria-hidden="true" className="h-3 w-3 shrink-0 bg-custard" />
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {intro}
        </p>

        <div className="mx-auto mt-10 aspect-video w-full max-w-[142vh] overflow-hidden border-2 border-black bg-black md:mt-14">
          {file ? (
            <video
              className="h-full w-full object-cover"
              src={file}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          ) : (
            <iframe
              className="h-full w-full"
              /* `playlist` repeats the same id — YouTube needs it to loop a
                 single video. `mute=1` is what makes autoplay stick. */
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&playsinline=1&rel=0&modestbranding=1`}
              title={`${title} | TFA Studios`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
