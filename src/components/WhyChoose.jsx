import React from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { WHY_CHOOSE_POINTS } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

export default function WhyChoose() {
  return (
    <section
      id="why-v-taxi"
      className="py-24 sm:py-32 bg-slate-50 relative border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Commitment"
          icon={ShieldCheck}
          index="06"
          title="Why travel with"
          accent="V TAXI?"
          description="We focus on operational consistency, comfortable vehicles and clear communication for a superior journey experience."
          className="mb-16"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Feature tile */}
          <Reveal variant="up" className="col-span-2 sm:col-span-3 lg:col-span-1 lg:row-span-2 h-full">
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
            <Reveal key={pt.title} delay={(idx % 4) * 55} variant="up" y={20} className="h-full">
              <Spotlight className="lift group h-full bg-white p-5 rounded-2xl border border-slate-200 shadow-card-soft hover:shadow-card-hover hover:border-crimson-300 flex flex-col justify-between gap-2">
                <div className="space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-crimson-50 text-crimson-700 flex items-center justify-center font-mono font-bold text-xs group-hover:v-gradient-crimson group-hover:text-white transition-colors">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy-900 leading-snug">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
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
