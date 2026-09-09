import React from "react";
import Reveal from "./Reveal";

/**
 * Standardised, animated section intro — shared rhythm and motion
 * across every section. Optional oversized ghost index behind it.
 */
export default function SectionHeader({
  eyebrow,
  icon: Icon,
  index,
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
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  const toneClasses = isDark
    ? "bg-white/5 border-white/15 text-crimson-300"
    : tone === "amber"
      ? "bg-amber-50 border-amber-200 text-amber-800"
      : tone === "slate"
        ? "bg-slate-100 border-slate-200 text-slate-700"
        : "bg-crimson-50 border-crimson-200 text-crimson-700";

  return (
    <div className={`relative flex flex-col gap-4 max-w-3xl ${alignment} ${className}`}>
      {index && (
        <span
          className={`ghost-num ${isDark ? "on-dark" : ""} ${
            align === "left" ? "-left-2 -top-16" : "left-1/2 -translate-x-1/2 -top-20"
          } hidden sm:block`}
          aria-hidden="true"
        >
          {index}
        </span>
      )}

      {eyebrow && (
        <Reveal variant="fade" y={12}>
          <span
            className={`relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-bold uppercase tracking-[0.18em] ${toneClasses}`}
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            {eyebrow}
          </span>
        </Reveal>
      )}

      {title && (
        <Reveal variant="up" y={20} delay={60}>
          <h2
            className={`relative display-lg text-balance ${
              isDark ? "text-white" : "text-navy-900"
            }`}
          >
            {title}
            {accent && (
              <>
                {" "}
                <span className="text-grad-animate">{accent}</span>
              </>
            )}
          </h2>
        </Reveal>
      )}

      {description && (
        <Reveal variant="up" y={18} delay={130}>
          <p
            className={`relative text-sm sm:text-[15px] leading-relaxed ${
              isDark ? "text-slate-300/90" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
