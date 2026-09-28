import React from "react";
import {
  Phone,
  ArrowRight,
  MapPin,
  Route,
  Clock3,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { BOOKING_OFFICE, PRIMARY_SERVICE_AREAS } from "../data/landingData";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import Spotlight from "./Spotlight";

const QUICK_FACTS = [
  { icon: Route, label: "Local + Outstation" },
  { icon: Clock3, label: "24/7 Booking Desk" },
  { icon: Sparkles, label: "Sedan · SUV · Premium" },
];

export default function Hero({ onOpenEnquiry }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#8e0303] via-[#b3160c] to-[#d32014] text-white pt-16 pb-24 sm:pt-20 lg:pt-28 lg:pb-36 shadow-inner"
    >
      {/* Cinematic background with Tamil Nadu photography */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <picture className="absolute inset-0 block w-full h-full">
          <source
            media="(max-width: 640px)"
            srcSet="/images/hero/hero-tamil-nadu-mobile.webp"
          />
          <img
            src="/images/hero/hero-tamil-nadu-desktop.webp"
            alt="V TAXI Tamil Nadu Travel"
            className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity scale-105"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            width="2048"
            height="1152"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-br from-[#8e0303]/90 via-[#b3160c]/85 to-[#d32014]/80" />
        <div className="absolute inset-0 bg-dots opacity-25" />
        <div className="absolute inset-0 bg-grid-dark opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000,transparent)]" />
        <div className="aurora bg-white/10 w-[620px] h-[460px] -top-32 -left-24" />
        <div
          className="aurora bg-amber-400/25 w-[520px] h-[420px] top-10 right-[-120px]"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="aurora bg-black/25 w-[440px] h-[360px] bottom-[-140px] left-1/3"
          style={{ animationDelay: "-4s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      {/* Oversized ghost wordmark */}
      <span
        className="ghost-num right-2 sm:right-6 top-8 select-none hidden md:block opacity-20 text-white"
        style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.25)" }}
        aria-hidden="true"
      >
        V
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-7 space-y-7">
            <Reveal variant="fade" y={12}>
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[11px] font-bold tracking-[0.16em] text-white shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-80 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300" />
                </span>
                OFFICIAL PRE-LAUNCH · TAMIL NADU
              </span>
            </Reveal>

            <Reveal variant="up" y={26} delay={80}>
              <h1 className="display-xl text-white drop-shadow">
                Your trusted ride
                <br />
                <span className="text-amber-300 font-extrabold">
                  across Tamil Nadu
                </span>
              </h1>
            </Reveal>

            <Reveal variant="up" y={20} delay={150}>
              <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed drop-shadow-sm font-medium">
                Comfortable local and outstation journeys for families,
                corporate travellers and airport transfers — coordinated
                personally by our booking office.
              </p>
            </Reveal>

            <Reveal variant="up" y={18} delay={210}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                {QUICK_FACTS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/15"
                  >
                    <Icon className="w-4 h-4 text-amber-300" />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal variant="up" y={20} delay={280}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Magnetic strength={0.35} className="w-full sm:w-auto">
                  <button
                    onClick={() => onOpenEnquiry()}
                    className="btn-shine group w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-crimson-700 font-extrabold text-sm sm:text-base shadow-2xl active:scale-[0.98] transition"
                  >
                    <span>Register Your Interest</span>
                    <ArrowRight className="w-4 h-4 text-crimson-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Magnetic>

                <a
                  href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-white/40 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base backdrop-blur-sm transition"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call {BOOKING_OFFICE.phone1}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — booking desk card */}
          <div className="lg:col-span-5">
            <Reveal variant="scale" delay={200}>
              <Spotlight className="rounded-[28px] shadow-2xl float-slow">
                <div className="relative rounded-[28px] bg-white text-navy-900 p-6 sm:p-7 overflow-hidden border border-white/40 shadow-2xl">
                  <div className="relative space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-crimson-600 text-white flex items-center justify-center font-display text-lg shadow-md shadow-crimson-600/30">
                          V
                        </div>
                        <div>
                          <p className="text-sm font-black leading-tight text-navy-900">
                            V TAXI Booking Desk
                          </p>
                          <p className="text-[11px] text-slate-500 font-medium">
                            Central Office · Tamil Nadu
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live 24/7
                      </span>
                    </div>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-3">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-crimson-600">
                        Direct Booking Line
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black tracking-tight font-mono text-navy-900">
                          {BOOKING_OFFICE.phone1}
                        </span>
                        <a
                          href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                          className="btn-shine text-xs font-bold px-3.5 py-2 rounded-lg bg-crimson-600 hover:bg-crimson-700 text-white shadow-sm transition"
                        >
                          Call Now
                        </a>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500 font-mono pt-1.5 border-t border-slate-200">
                        <span>{BOOKING_OFFICE.phone2}</span>
                        <span className="text-[10px] text-slate-400">
                          Secondary line
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-crimson-600" />
                        Popular corridors
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {PRIMARY_SERVICE_AREAS.map((area) => (
                          <span
                            key={area.name}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
                          >
                            {area.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenEnquiry()}
                      className="w-full py-3 rounded-xl bg-crimson-50 hover:bg-crimson-100 text-crimson-700 font-bold text-xs border border-crimson-200 transition"
                    >
                      Submit travel details for a fare quote
                    </button>
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2 text-white/70 hidden lg:flex flex-col items-center gap-2">
        <span />
        <ChevronDown className="w-4 h-4 -mt-1 opacity-60" />
      </div>
    </section>
  );
}
