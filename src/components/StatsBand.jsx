import React from "react";
import { MapPin, Car, LayoutGrid, Headphones } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import Reveal from "./Reveal";

const STATS = [
  { value: 5, suffix: "", label: "Cities across Tamil Nadu", icon: MapPin },
  { value: 4, suffix: "", label: "Vehicle classes to choose", icon: Car },
  { value: 8, suffix: "", label: "Service types covered", icon: LayoutGrid },
  { value: null, display: "24/7", label: "Booking desk & assistance", icon: Headphones },
];

function Stat({ stat, delay }) {
  const [ref, val] = useCountUp(stat.value ?? 0);
  const Icon = stat.icon;
  return (
    <Reveal variant="up" delay={delay} className="h-full">
      <div className="lift group h-full rounded-2xl border border-slate-200 bg-white p-6 hover:border-crimson-300 hover:shadow-card-hover">
        <Icon className="w-5 h-5 text-crimson-600 mb-4" />
        <div
          ref={ref}
          className="font-display text-4xl sm:text-[2.75rem] leading-none text-navy-900 tracking-tightest"
        >
          {stat.value != null ? Math.round(val) : stat.display}
          {stat.suffix}
        </div>
        <p className="mt-2 text-xs text-slate-500 leading-snug">{stat.label}</p>
      </div>
    </Reveal>
  );
}

export default function StatsBand() {
  return (
    <section className="relative -mt-10 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <Stat key={stat.label} stat={stat} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
