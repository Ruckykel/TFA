"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, Suspense } from "react";

function NavigationProgressBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);
    const prevPath = useRef(pathname);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        // When pathname changes, we know navigation completed
        if (prevPath.current !== pathname) {
            // Complete the progress bar
            setProgress(100);
            hideTimerRef.current = setTimeout(() => {
                setVisible(false);
                setProgress(0);
            }, 300);
            prevPath.current = pathname;
        }

        return () => {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        };
    }, [pathname, searchParams]);

    useEffect(() => {
        // Intercept all link clicks to start progress
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href) return;

            // Skip external links, hash links, and same-page links
            if (
                href.startsWith("http") ||
                href.startsWith("#") ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                anchor.target === "_blank"
            ) return;

            // Skip if it's the current page
            if (href === pathname) return;

            // Start the progress bar
            if (timerRef.current) clearInterval(timerRef.current);
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

            setProgress(15);
            setVisible(true);

            // Gradually increase progress
            timerRef.current = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 90) {
                        if (timerRef.current) clearInterval(timerRef.current);
                        return 90;
                    }
                    // Slow down as we get further
                    const increment = prev < 50 ? 8 : prev < 70 ? 4 : 2;
                    return Math.min(prev + increment, 90);
                });
            }, 200);
        };

        document.addEventListener("click", handleClick, true);
        return () => {
            document.removeEventListener("click", handleClick, true);
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [pathname]);

    if (!visible && progress === 0) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                zIndex: 9999,
                pointerEvents: "none",
            }}
        >
            <div
                style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "var(--color-accent)",
                    boxShadow: "0 0 12px rgba(250, 105, 3, 0.6), 0 0 4px rgba(250, 105, 3, 0.3)",
                    transition: progress === 100
                        ? "width 200ms ease-out, opacity 300ms ease 200ms"
                        : "width 300ms ease-out",
                    opacity: progress === 100 && !visible ? 0 : 1,
                    borderRadius: "0 2px 2px 0",
                }}
            />
        </div>
    );
}

export function NavigationProgress() {
    return (
        <Suspense fallback={null}>
            <NavigationProgressBar />
        </Suspense>
    );
}
