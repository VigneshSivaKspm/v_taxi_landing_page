import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { WHY_CHOOSE_POINTS } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

const WHY_ICONS = [
  "/images/icons/why-comfort.png",
  "/images/icons/why-capacity.png",
  "/images/icons/why-local-outstation.png",
  "/images/icons/why-phone.png",
  "/images/icons/why-family.png",
  "/images/icons/why-assistance.png",
  "/images/icons/why-transparent.png",
  "/images/icons/why-tamil-nadu.png",
  "/images/icons/why-premium.png",
  "/images/icons/why-digital.png",
];

export default function WhyChoose() {
  return (
    <section
      id="why-v-taxi"
      className="py-20 sm:py-28 bg-slate-50 relative border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Commitment"
          icon={ShieldCheck}
          title="Why travel with"
          accent="V TAXI?"
          description="We focus on operational consistency, comfortable vehicles and clear communication for a superior journey experience."
          className="mb-12"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Feature tile */}
          <Reveal
            variant="up"
            className="col-span-2 sm:col-span-3 lg:col-span-1 lg:row-span-2 h-full"
          >
            <div className="ring-gradient h-full rounded-[26px] bg-ink text-white p-7 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -bottom-16 -right-12 w-48 h-48 rounded-full bg-crimson-600/30 blur-3xl" />
              <Sparkles className="w-6 h-6 text-amber-400 relative" />
              <div className="relative space-y-2 pt-10">
                <p className="font-display text-2xl leading-tight">
                  Ten reasons riders will choose{" "}
                  <span className="text-grad-animate">V TAXI</span>
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every detail below is part of the standard we are building
                  before launch.
                </p>
              </div>
            </div>
          </Reveal>

          {WHY_CHOOSE_POINTS.map((pt, idx) => (
            <Reveal
              key={pt.title}
              delay={(idx % 4) * 55}
              variant="up"
              y={20}
              className="h-full"
            >
              <Spotlight className="lift group h-full bg-white p-5 rounded-2xl border border-slate-200 shadow-card-soft hover:shadow-card-hover hover:border-crimson-300 flex flex-col justify-between gap-3">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-crimson-50 border border-crimson-100 flex items-center justify-center p-1.5 group-hover:scale-110 group-hover:border-crimson-300 transition-all">
                      <img
                        src={WHY_ICONS[idx]}
                        alt=""
                        className="w-7 h-7 object-contain"
                        loading="lazy"
                        decoding="async"
                        width="28"
                        height="28"
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy-900 leading-snug group-hover:text-crimson-600 transition-colors">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {pt.desc}
                </p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
