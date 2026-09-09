import React from "react";

/**
 * Seamless auto-scrolling keyword ribbon with edge fades. Pauses on hover.
 */
export default function Marquee({ items = [], className = "" }) {
  const Row = () => (
    <div className="marquee-track flex shrink-0 items-center gap-8 pr-8">
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2.5 whitespace-nowrap text-[13px] font-bold uppercase tracking-[0.18em] text-slate-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-crimson-500 to-amber-500" />
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] ${className}`}
      aria-hidden="true"
    >
      <div className="flex group-hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </div>
  );
}
