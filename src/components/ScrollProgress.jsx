import React, { useEffect, useState } from "react";

/**
 * Thin gradient reading-progress bar pinned to the very top of the viewport.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, scrollTop / height) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
      <div
        className="h-full origin-left bg-gradient-to-r from-crimson-500 via-crimson-600 to-amber-500 transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(220,38,38,0.5)]"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
