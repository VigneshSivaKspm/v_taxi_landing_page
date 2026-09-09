import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from `start` to `target`.
 * Runs immediately if the element is already on screen, otherwise when
 * it scrolls into view. Always resolves to `target` (safety timeout).
 */
export function useCountUp(target, { duration = 1600, start = 0 } = {}) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }

    let rafId = 0;
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(start + (target - start) * eased);
        if (p < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      run();
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);

    const safety = setTimeout(() => {
      run();
      io.disconnect();
    }, 2600);

    return () => {
      io.disconnect();
      clearTimeout(safety);
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return [ref, value];
}
