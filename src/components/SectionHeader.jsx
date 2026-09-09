import React from "react";
import Reveal from "./Reveal";

/**
 * Standardised, animated section intro — one shared rhythm across the page.
 */
export default function SectionHeader({
  eyebrow,
  icon: Icon,
  title,
  accent,
  description,
  align = "center",
  tone = "crimson",
  theme = "light",
  className = "",
}) {
  const isDark = theme === "dark";
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center mx-auto";

  const toneClasses = isDark
    ? "text-crimson-300"
    : tone === "amber"
      ? "text-amber-600"
      : tone === "slate"
        ? "text-slate-500"
        : "text-crimson-600";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal variant="fade" y={10}>
          <span
            className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] ${toneClasses}`}
          >
            {align === "left" && (
              <span className="h-px w-6 bg-current opacity-50" />
            )}
            {Icon && <Icon className="h-3.5 w-3.5" />}
            {eyebrow}
          </span>
        </Reveal>
      )}

      {title && (
        <Reveal variant="up" y={18} delay={60}>
          <h2
            className={`display-lg ${isDark ? "text-white" : "text-navy-900"}`}
          >
            <span className="block text-balance">{title}</span>
            {accent && (
              <span className="mt-0.5 block text-grad text-balance">
                {accent}
              </span>
            )}
          </h2>
        </Reveal>
      )}

      {description && (
        <Reveal variant="up" y={16} delay={120}>
          <p
            className={`text-[15px] leading-relaxed ${
              isDark ? "text-slate-300/85" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
