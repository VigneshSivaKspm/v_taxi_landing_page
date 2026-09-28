import React from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

const VALUES = [
  {
    icon: "/images/icons/value-customer.png",
    tone: "bg-crimson-50 border border-crimson-100",
    title: "Customer Focused",
    desc: "Designed around passengers, luggage comfort and senior travellers.",
  },
  {
    icon: "/images/icons/value-dependable.png",
    tone: "bg-crimson-50 border border-crimson-100",
    title: "Dependable Service",
    desc: "Clean cars, verified schedules and polite coordination.",
  },
  {
    icon: "/images/icons/value-network.png",
    tone: "bg-crimson-50 border border-crimson-100",
    title: "Growing Network",
    desc: "Expanding across priority Tamil Nadu corridors.",
  },
];

export default function BrandIntro() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Brand Introduction"
          tone="slate"
          title="Meet V TAXI"
          accent="The people’s choice"
          className="mb-12"
        />

        <Reveal variant="up" y={32}>
          <Spotlight className="rounded-[28px] ring-gradient">
            <div className="rounded-[28px] bg-gradient-to-br from-slate-50 to-white p-7 sm:p-12 border border-slate-200/80 shadow-card-soft relative overflow-hidden">
              <div className="absolute -top-24 -right-16 w-64 h-64 rounded-full bg-crimson-500/10 blur-3xl" />

              {/* Editorial Feature Image */}
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-card border border-slate-200/80 group">
                <img
                  src="/images/brand/v-taxi-family-journey.webp"
                  alt="Multigenerational Tamil family starting a journey with V TAXI"
                  className="w-full h-56 sm:h-80 object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-crimson-600/90 text-white backdrop-blur-sm shadow-sm mb-1.5">
                    Authentic Tamil Nadu Mobility
                  </span>
                  <p className="text-sm sm:text-base font-medium text-white/95 drop-shadow-sm">
                    Comfortable, dependable travel crafted for individuals,
                    families, and senior citizens.
                  </p>
                </div>
              </div>

              <div className="relative space-y-5 text-slate-700 leading-relaxed sm:leading-loose">
                <p className="font-medium text-slate-800 text-lg sm:text-xl text-balance">
                  V TAXI is a growing Tamil Nadu taxi brand created to make
                  local and outstation journeys more comfortable, convenient and
                  dependable. Beginning from Chennai, we are expanding across
                  Trichy, Thanjavur, Madurai and Rameswaram.
                </p>
                <p className="text-slate-600 text-sm sm:text-base">
                  With vehicle options for individuals, families and premium
                  travellers, V TAXI aims to provide the right ride for every
                  journey — from everyday city travel and airport pickups to
                  long-distance family tours and sacred temple yatras.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-9 mt-9 border-t border-slate-200">
                {VALUES.map(({ icon, tone, title, desc }, i) => (
                  <Reveal key={title} delay={i * 100} variant="up" y={20}>
                    <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/70 border border-slate-100 hover:border-crimson-200 transition-colors shadow-sm">
                      <div
                        className={`p-2 rounded-xl flex-shrink-0 ${tone} flex items-center justify-center w-12 h-12`}
                      >
                        <img
                          src={icon}
                          alt=""
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                          decoding="async"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wide">
                          {title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Spotlight>
        </Reveal>
      </div>
    </section>
  );
}
