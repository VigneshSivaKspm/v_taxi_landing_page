import React, { useRef } from "react";

/**
 * Wrapper that tracks the cursor and exposes it as --mx / --my custom
 * properties so a CSS radial highlight can follow the pointer.
 * Pair with the `.spotlight` class (see index.css).
 */
export default function Spotlight({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const raf = useRef(0);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || raf.current) return;
    const { clientX, clientY } = e;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - r.left}px`);
      el.style.setProperty("--my", `${clientY - r.top}px`);
    });
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
