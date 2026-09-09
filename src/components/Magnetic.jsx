import React, { useRef } from "react";

/**
 * Subtle magnetic pull toward the cursor. Great for primary CTAs.
 * Renders a <span> by default so it can wrap buttons/links safely.
 */
export default function Magnetic({
  as: Tag = "span",
  strength = 0.25,
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
      const x = (clientX - (r.left + r.width / 2)) * strength;
      const y = (clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
  };

  const reset = () => {
    cancelAnimationFrame(raf.current);
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`magnetic inline-flex${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
