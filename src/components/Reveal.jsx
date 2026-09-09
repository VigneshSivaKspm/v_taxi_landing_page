import React from "react";
import { useReveal } from "../hooks/useReveal";

const VARIANTS = {
  up: { "--ry": "28px" },
  down: { "--ry": "-28px" },
  left: { "--rx": "36px", "--ry": "0px" },
  right: { "--rx": "-36px", "--ry": "0px" },
  scale: { "--rs": "0.94", "--ry": "14px" },
  fade: { "--ry": "0px" },
};

/**
 * Fade + move reveal wrapper driven by IntersectionObserver.
 *
 * <Reveal variant="left" delay={120} as="section">…</Reveal>
 */
export default function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  variant = "up",
  y,
  className = "",
  style,
  ...rest
}) {
  const [ref, visible] = useReveal();

  const vars = { ...(VARIANTS[variant] || VARIANTS.up) };
  if (y != null) vars["--ry"] = `${y}px`;

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " reveal-in" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ "--reveal-delay": `${delay}ms`, ...vars, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Staggers a list of children.
 */
export function RevealStagger({
  children,
  step = 80,
  base = 0,
  variant = "up",
  className = "",
  childClassName = "",
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <Reveal
          delay={base + i * step}
          variant={variant}
          className={childClassName}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
