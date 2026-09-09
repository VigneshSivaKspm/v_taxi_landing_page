import React, { useRef } from "react";

/**
 * Pointer-reactive 3D tilt. Children can use `transform: translateZ(...)`
 * for a layered parallax effect (transform-style: preserve-3d is set).
 */
export default function TiltCard({
  max = 7,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const raf = useRef(0);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const px = (clientX - r.left) / r.width - 0.5;
      const py = (clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${(-py * max).toFixed(
        2
      )}deg) rotateY(${(px * max).toFixed(2)}deg)`;
    });
  };

  const reset = () => {
    cancelAnimationFrame(raf.current);
    if (ref.current)
      ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
