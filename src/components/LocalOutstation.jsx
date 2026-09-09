import React from "react";
import { Navigation, Compass, CheckCircle2 } from "lucide-react";
import {
  LOCAL_SERVICES_LIST,
  OUTSTATION_SERVICES_LIST,
} from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

export default function LocalOutstation({ onOpenEnquiry }) {
  const columns = [
    {
      icon: Navigation,
      kicker: "City Travel",
      kickerClass: "text-crimson-600",
      iconClass: "bg-crimson-50 text-crimson-600",
      title: "Local Taxi Services",
      copy: "Punctual, comfortable transport for everyday life within the city — morning commutes, family outings and hospital appointments.",
      list: LOCAL_SERVICES_LIST,
      checkClass: "text-crimson-600",
      cta: "Enquire Local Ride",
      payload: { tripType: "Local City Travel" },
      btnClass: "bg-slate-100 hover:bg-slate-200 text-navy-900",
      variant: "left",
    },
    {
      icon: Compass,
      kicker: "Intercity Network",
      kickerClass: "text-amber-600",
      iconClass: "bg-ink text-white",
      title: "Outstation Taxi Services",
      copy: "Stress-free highway journeys connecting Chennai to all southern hubs, with trained highway chauffeurs and planned comfort pauses.",
      list: OUTSTATION_SERVICES_LIST,
      checkClass: "text-emerald-600",
      cta: "Enquire Outstation Journey",
      payload: { tripType: "Outstation Travel" },
      btnClass:
        "btn-shine v-gradient-crimson text-white shadow-glow-crimson hover:brightness-105",
      variant: "right",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Comprehensive Connectivity"
          tone="slate"
          title="From local streets"
          accent="to long-distance travel"
          description="One provider for your daily city transit and your cross-district travels across Tamil Nadu."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {columns.map(
            ({
              icon: Icon,
              kicker,
              kickerClass,
              iconClass,
              title,
              copy,
              list,
              checkClass,
              cta,
              payload,
              btnClass,
              variant,
            }) => (
              <Reveal key={title} variant={variant} className="h-full">
                <Spotlight className="lift h-full bg-white rounded-[26px] p-7 sm:p-9 border border-slate-200 shadow-card-soft hover:shadow-card-hover flex flex-col justify-between gap-6">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconClass}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest block ${kickerClass}`}
                        >
                          {kicker}
                        </span>
                        <h3 className="text-xl font-display text-navy-900">
                          {title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {copy}
                    </p>
                    <div className="space-y-3 pt-1">
                      {list.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${checkClass}`}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry(payload)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs transition ${btnClass}`}
                  >
                    {cta}
                  </button>
                </Spotlight>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
