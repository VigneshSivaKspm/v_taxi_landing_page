import React from "react";
import { Smartphone, CheckCircle, Bell } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import Magnetic from "./Magnetic";

const PLANNED_FEATURES = [
  "Online taxi booking interface",
  "Instant vehicle-category selection",
  "Precise pickup and destination entry",
  "Transparent fare information",
  "Instant booking confirmation",
  "Real-time trip-status updates",
  "Direct customer support access",
  "Exclusive promotional app offers",
];

export default function ComingSoonApp({ onOpenEnquiry }) {
  return (
    <section
      id="coming-soon"
      className="py-24 sm:py-32 bg-ink text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000,transparent)]" />
        <div className="aurora bg-crimson-600/25 w-[480px] h-[400px] top-0 left-[-120px]" />
        <div
          className="aurora bg-amber-500/15 w-[420px] h-[340px] bottom-[-120px] right-[-100px]"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Phone mock */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal variant="left">
              <TiltCard max={9} className="w-full max-w-xs">
                <div className="bg-ink-800 rounded-[40px] p-4 shadow-2xl border-4 border-white/10 relative float-slow">
                  <div className="absolute -inset-6 bg-crimson-500/20 blur-3xl rounded-full -z-10" />
                  <div className="bg-[#0f1018] rounded-[32px] overflow-hidden p-5 space-y-4">
                    <div className="flex justify-between items-center text-[10px] text-slate-500 pb-1">
                      <span>9:41 AM</span>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>5G</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg v-gradient-crimson flex items-center justify-center font-bold text-xs">
                          V
                        </div>
                        <span className="font-bold text-xs tracking-tight">
                          V TAXI App
                        </span>
                      </div>
                      <span className="text-[9px] font-mono uppercase bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded">
                        In Development
                      </span>
                    </div>

                    <div className="bg-white/[0.04] rounded-2xl p-3.5 space-y-2 border border-white/10">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full bg-crimson-500" />
                        <span className="text-slate-300 text-[11px]">
                          Chennai (Airport / City)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-slate-300 text-[11px]">
                          Trichy / Madurai / Thanjavur
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Choose Category
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2.5 rounded-xl bg-white/[0.06] border border-crimson-500/50 font-semibold text-center">
                          5-Seater Sedan
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 text-center">
                          7-Seater SUV
                        </div>
                      </div>
                    </div>

                    <div className="w-full py-2.5 rounded-xl v-gradient-crimson text-center font-bold text-xs">
                      View Instant Quotation
                    </div>
                    <p className="text-center text-[10px] text-slate-600">
                      * Interactive mock-up. App launching soon.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal variant="fade" y={12}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-crimson-300 text-[11px] font-bold uppercase tracking-[0.18em]">
                <Smartphone className="w-3.5 h-3.5" />
                Digital Roadmap · 08
              </span>
            </Reveal>
            <Reveal variant="up" y={22} delay={60}>
              <h2 className="display-lg text-white">
                The V TAXI digital experience
                <br />
                <span className="text-grad-animate">is coming soon</span>
              </h2>
            </Reveal>
            <Reveal variant="up" y={18} delay={120}>
              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-xl">
                We are developing the official V TAXI app and website to make
                discovering services, requesting rides and managing future
                bookings effortless.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {PLANNED_FEATURES.map((feat, idx) => (
                <Reveal key={feat} delay={idx * 55} variant="up" y={14}>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal variant="up" y={18} delay={120}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Magnetic strength={0.3} className="w-full sm:w-auto">
                  <button
                    onClick={() => onOpenEnquiry()}
                    className="btn-shine w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl v-gradient-crimson text-white font-bold text-xs sm:text-sm shadow-glow-crimson hover:brightness-105 transition"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Notify Me at Launch</span>
                  </button>
                </Magnetic>
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  Google Play &amp; App Store links will be published upon
                  release.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
