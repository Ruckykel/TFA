import React from "react";
import { home } from "../../data/copy";

/**
 * Showreel, directly under the hero. No heading — the reel speaks for itself.
 *
 * Two sources, one shape: a local file wins if `showreel.file` is set,
 * otherwise the YouTube placeholder is embedded. Both ship muted — browsers
 * refuse to autoplay video with sound, so muted is what makes autoplay work
 * at all.
 *
 * The frame runs edge to edge with a slim gutter and a fixed viewport-based
 * height. The media inside is oversized to whichever of width/height is the
 * limiting side, then centred — a `cover` crop, which works for the iframe
 * too since it has no `object-fit`.
 */
export function Showreel() {
  const { title, file, youtubeId, poster } = home.showreel;

  const cover =
    "absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2";

  return (
    <section
      id="showreel"
      className="px-4 pt-2 pb-8 md:px-6 md:pt-4 md:pb-12"
      aria-label={title}
    >
      <div className="relative h-[60vh] w-full overflow-hidden border-2 border-black bg-black md:h-[90vh]">
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
            className={cover}
            /* `playlist` repeats the same id — YouTube needs it to loop a
               single video. `mute=1` is what makes autoplay stick. */
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&playsinline=1&rel=0&modestbranding=1&controls=0`}
            title={`${title} | TFA Studios`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </section>
  );
}
