import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook. Returns [ref, visible].
 *
 * - Elements already in the viewport on mount animate in on the next
 *   frame (no wait on the observer) so above-the-fold content never
 *   flashes empty.
 * - A safety timeout guarantees content is shown even if the observer
 *   never fires.
 * - Respects prefers-reduced-motion and missing IntersectionObserver.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const alreadyInView = rect.top < vh * 0.92 && rect.bottom > 0;

    if (alreadyInView) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px", ...options }
    );

    observer.observe(el);
    const safety = setTimeout(() => setVisible(true), 2500);

    return () => {
      observer.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return [ref, visible];
}
