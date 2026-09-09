import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { PRIMARY_SERVICE_AREAS } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

export default function ServiceAreas({ onOpenEnquiry }) {
  return (
    <section
      id="service-areas"
      className="py-20 sm:py-28 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Service Areas"
          icon={MapPin}
          title="Growing across"
          accent="Tamil Nadu"
          description="Focusing on Tamil Nadu’s key residential, industrial, cultural and spiritual centers."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Corridor visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal variant="left">
              <div className="bg-ink text-white rounded-[28px] p-6 sm:p-8 relative shadow-2xl overflow-hidden ring-gradient">
                <div className="absolute inset-0 bg-grid-dark opacity-60" />
                <div className="relative">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase">
                      Tamil Nadu Corridor
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      5 Core Hubs
                    </span>
                  </div>

                  <div className="py-6">
                    <div className="w-full max-w-xs mx-auto space-y-4 relative">
                      <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-gradient-to-b from-crimson-500 via-amber-400 to-crimson-600 opacity-60" />
                      {PRIMARY_SERVICE_AREAS.map((area, idx) => (
                        <Reveal
                          key={area.name}
                          delay={idx * 90}
                          variant="up"
                          y={14}
                        >
                          <div className="relative flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border-2 border-crimson-500 flex items-center justify-center font-mono font-bold text-xs z-10 group-hover:scale-110 transition-transform">
                              0{idx + 1}
                            </div>
                            <div className="bg-white/[0.04] p-3 rounded-xl border border-white/10 flex-1 flex items-center justify-between">
                              <div>
                                <h4 className="text-sm font-bold">
                                  {area.name}
                                </h4>
                                <span className="text-[11px] text-slate-400">
                                  {area.tamil}
                                </span>
                              </div>
                              <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                                {area.role.split(" ")[0]}
                              </span>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Local &amp; outstation hubs</span>
                    <span className="text-emerald-400 font-bold">
                      Active rollout
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Detail cards */}
          <div className="lg:col-span-7 space-y-4">
            {PRIMARY_SERVICE_AREAS.map((area, idx) => (
              <Reveal key={area.name} delay={idx * 70} variant="right">
                <Spotlight className="lift bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-crimson-300 hover:shadow-card-soft flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-crimson-600 bg-crimson-50 px-2 py-0.5 rounded">
                        ZONE 0{idx + 1}
                      </span>
                      <h3 className="text-lg font-display text-navy-900">
                        {area.name}{" "}
                        <span className="text-slate-500 font-normal text-sm font-sans">
                          ({area.tamil})
                        </span>
                      </h3>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                      {area.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                      {area.description}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry({ pickupCity: area.name })}
                    className="flex-shrink-0 px-4 py-2 rounded-xl bg-white hover:bg-crimson-600 hover:text-white border border-slate-300 hover:border-crimson-600 text-slate-800 font-bold text-xs transition flex items-center justify-center gap-1 group"
                  >
                    <span>Enquire {area.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Spotlight>
              </Reveal>
            ))}

            <p className="text-xs text-slate-500 pt-1">
              Planning travel to another destination in Tamil Nadu? We also
              arrange customized multi-city itineraries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
