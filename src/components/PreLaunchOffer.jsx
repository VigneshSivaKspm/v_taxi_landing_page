import React from "react";
import { Tag, ArrowRight, Bell } from "lucide-react";
import { LAUNCH_OFFERS } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import Magnetic from "./Magnetic";

export default function PreLaunchOffer({ onOpenEnquiry }) {
  return (
    <section
      id="launch-offers"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-radial-fade pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Pre-Launch Benefits"
          icon={Tag}
          index="07"
          tone="amber"
          title="Be among the first to"
          accent="ride with V TAXI"
          description="Register during our pre-launch period for priority updates, launch announcements and access to introductory offers."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LAUNCH_OFFERS.map((offer, idx) => (
            <Reveal key={offer.title} delay={idx * 80} variant="up" y={24} className="h-full">
              <Spotlight className="lift group h-full bg-slate-50 hover:bg-white rounded-[24px] p-6 border border-slate-200 hover:border-amber-300 hover:shadow-card-hover flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-md uppercase">
                    {offer.tag}
                  </span>
                  <h3 className="text-base font-bold text-navy-900 leading-snug">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {offer.desc}
                  </p>
                </div>
                <button
                  onClick={() => onOpenEnquiry({ specialOffer: offer.title })}
                  className="text-xs font-bold text-crimson-600 hover:text-crimson-700 flex items-center gap-1 pt-3 border-t border-slate-200/60"
                >
                  <span>Claim Early Interest</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" y={24}>
          <div className="rounded-[28px] bg-ink text-white p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute inset-0 bg-grid-dark opacity-50" />
            <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-crimson-600/25 blur-3xl" />
            <div className="relative space-y-2.5 text-center md:text-left">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-crimson-600 text-white px-2.5 py-1 rounded">
                Limited Pre-Launch Registration
              </span>
              <h3 className="font-display text-2xl sm:text-3xl">
                Unlock priority travel access
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Registered customers receive approved introductory coupons and
                first vehicle booking access before the general rollout.
              </p>
            </div>
            <Magnetic strength={0.3} className="relative flex-shrink-0">
              <button
                onClick={() => onOpenEnquiry()}
                className="btn-shine px-7 py-4 rounded-2xl v-gradient-crimson text-white font-extrabold text-sm shadow-glow-crimson hover:brightness-105 active:scale-95 transition flex items-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>Register for Launch Offers</span>
              </button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
