import React from "react";
import { Users, Briefcase, Check, Car, Sparkles, ArrowRight } from "lucide-react";
import { VEHICLE_CATEGORIES } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

export default function VehicleCategories({ onOpenEnquiry }) {
  return (
    <section
      id="vehicles"
      className="py-20 sm:py-28 bg-ink text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000,transparent)]" />
        <div className="aurora bg-crimson-600/25 w-[520px] h-[420px] -top-24 right-[-120px]" />
        <div
          className="aurora bg-amber-500/15 w-[440px] h-[360px] bottom-[-140px] left-[-100px]"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Vehicle Categories"
          icon={Car}
          theme="dark"
          title="Choose the right"
          accent="V ride"
          description="Vehicle choices configured for your passenger count, luggage and journey type. Submit your details for an itemized quotation."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VEHICLE_CATEGORIES.map((vehicle, i) => {
            const isPopular = vehicle.isPopular;
            const isComingSoon = vehicle.isComingSoon;

            return (
              <Reveal key={vehicle.id} delay={i * 80} variant="up" y={28} className="h-full">
                <Spotlight
                  className={`on-dark lift h-full rounded-[26px] p-6 flex flex-col justify-between relative border ${
                    isPopular
                      ? "ring-gradient bg-white/[0.07] border-transparent shadow-glow-crimson"
                      : isComingSoon
                        ? "bg-white/[0.02] border-dashed border-white/15"
                        : "bg-white/[0.04] border-white/10 hover:border-white/20"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-6 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full v-gradient-crimson text-white shadow-glow-crimson">
                      Most Booked
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md ${
                          isPopular
                            ? "bg-crimson-600 text-white"
                            : isComingSoon
                              ? "bg-amber-400/15 text-amber-300 border border-amber-300/30"
                              : "bg-white/10 text-slate-300"
                        }`}
                      >
                        {vehicle.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-display text-white">
                      {vehicle.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                      {vehicle.examples}
                    </p>
                    <p className="text-xs text-slate-300/80 leading-relaxed mb-4">
                      {vehicle.suitability}
                    </p>

                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-xs space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Users className="w-4 h-4 text-crimson-400 flex-shrink-0" />
                        <span className="font-semibold">{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-200">
                        <Briefcase className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="font-semibold">{vehicle.luggage}</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 mb-6">
                      {vehicle.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenEnquiry({ vehicle: vehicle.title })}
                    className={`btn-shine w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                      isPopular
                        ? "v-gradient-crimson text-white hover:brightness-105"
                        : isComingSoon
                          ? "bg-amber-400/15 text-amber-300 hover:bg-amber-400/25"
                          : "bg-white text-ink hover:bg-slate-200"
                    }`}
                  >
                    <span>
                      {isComingSoon ? "Pre-Register Group" : "Request Fare Quote"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="up" y={16}>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>
                <strong className="text-white">Fare transparency:</strong> custom
                quotations based on your pickup, destination and vehicle class —
                zero hidden drop-off charges.
              </span>
            </div>
            <button
              onClick={() => onOpenEnquiry()}
              className="font-bold text-crimson-400 hover:text-crimson-300 flex-shrink-0"
            >
              Submit Travel Details →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
