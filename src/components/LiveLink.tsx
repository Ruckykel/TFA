import React from "react";
import Link from "next/link";
import { isRouteLive } from "../lib/routes";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** When the target is gated: hide entirely, or render as plain text. */
  gated?: "hide" | "text";
  /**
   * Classes used instead of `className` when the target is gated. Lets a
   * gated item stay visible while clearly reading as not-yet-available.
   */
  gatedClassName?: string;
  /** Tooltip shown on a gated item. */
  gatedTitle?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

/**
 * A link that respects the pre-launch gate. Points at a live route and it
 * behaves as a normal Link; points at a gated one and it either disappears
 * or degrades to unclickable text, so the page never offers a dead end.
 */
export function LiveLink({
  href,
  children,
  className = "",
  gated = "hide",
  gatedClassName,
  gatedTitle,
  ...rest
}: Props) {
  if (!isRouteLive(href)) {
    if (gated === "hide") return null;
    return (
      <span
        className={gatedClassName ?? className}
        title={gatedTitle}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}
