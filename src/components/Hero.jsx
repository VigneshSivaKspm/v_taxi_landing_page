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
      className="relative overflow-hidden bg-ink text-white -mt-[104px] pt-44 pb-28 lg:pt-52 lg:pb-36"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000,transparent)]" />
        <div className="aurora bg-crimson-600/40 w-[620px] h-[460px] -top-32 -left-24" />
        <div
          className="aurora bg-amber-500/25 w-[520px] h-[420px] top-10 right-[-120px]"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="aurora bg-crimson-500/20 w-[440px] h-[360px] bottom-[-140px] left-1/3"
          style={{ animationDelay: "-4s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      {/* Oversized ghost wordmark */}
      <span
        className="ghost-num on-dark right-2 sm:right-6 top-8 select-none hidden md:block"
        aria-hidden="true"
      >
        V
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-7 space-y-7">
            <Reveal variant="fade" y={12}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-dark text-[11px] font-bold tracking-[0.16em] text-slate-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-crimson-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson-500" />
                </span>
                OFFICIAL PRE-LAUNCH · TAMIL NADU
              </span>
            </Reveal>

            <Reveal variant="up" y={26} delay={80}>
              <h1 className="display-xl text-white">
                Your trusted ride
                <br />
                <span className="text-grad-animate">across Tamil Nadu</span>
              </h1>
            </Reveal>

            <Reveal variant="up" y={20} delay={150}>
              <p className="text-base sm:text-lg text-slate-300/90 max-w-xl leading-relaxed">
                Comfortable local and outstation journeys for families, corporate
                travellers and airport transfers — coordinated personally by our
                booking office.
              </p>
            </Reveal>

            <Reveal variant="up" y={18} delay={210}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                {QUICK_FACTS.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300"
                  >
                    <Icon className="w-4 h-4 text-crimson-400" />
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
                    className="btn-shine group w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl v-gradient-crimson text-white font-bold text-sm sm:text-base shadow-glow-crimson hover:brightness-105 active:scale-[0.98] transition"
                  >
                    <span>Register Your Interest</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Magnetic>

                <a
                  href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold text-sm sm:text-base transition"
                >
                  <Phone className="w-4 h-4 text-crimson-400" />
                  <span>Call {BOOKING_OFFICE.phone1}</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — booking desk card */}
          <div className="lg:col-span-5">
            <Reveal variant="scale" delay={200}>
              <Spotlight className="on-dark ring-gradient rounded-[28px] float-slow">
                <div className="relative rounded-[28px] glass-dark p-6 sm:p-7 overflow-hidden">
                  <div className="absolute -top-20 -right-16 w-52 h-52 rounded-full bg-crimson-600/25 blur-3xl" />

                  <div className="relative space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl v-gradient-crimson flex items-center justify-center font-display text-lg">
                          V
                        </div>
                        <div>
                          <p className="text-sm font-black leading-tight">
                            V TAXI Booking Desk
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Central Office · Tamil Nadu
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live 24/7
                      </span>
                    </div>

                    <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4 space-y-3">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400">
                        Direct Booking Line
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black tracking-tight font-mono">
                          {BOOKING_OFFICE.phone1}
                        </span>
                        <a
                          href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                          className="btn-shine text-xs font-bold px-3.5 py-2 rounded-lg bg-crimson-600 hover:bg-crimson-500 transition"
                        >
                          Call Now
                        </a>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-1 border-t border-white/10">
                        <span>{BOOKING_OFFICE.phone2}</span>
                        <span className="text-[10px]">Secondary line</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-crimson-400" />
                        Popular corridors
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {PRIMARY_SERVICE_AREAS.map((area) => (
                          <span
                            key={area.name}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/10 text-slate-200"
                          >
                            {area.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenEnquiry()}
                      className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-xs transition"
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
      <div className="scroll-cue absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-500 hidden lg:flex flex-col items-center gap-2">
        <span />
        <ChevronDown className="w-4 h-4 -mt-1 opacity-60" />
      </div>
    </section>
  );
}
