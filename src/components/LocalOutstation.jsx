import React from "react";
import { CheckCircle2 } from "lucide-react";
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
      image: "/images/journeys/local-city-travel.webp",
      alt: "V TAXI local city travel in Tamil Nadu",
      iconImg: "/images/icons/service-local.png",
      kicker: "City Travel",
      kickerClass: "text-crimson-600",
      iconClass: "bg-crimson-50 border border-crimson-100",
      title: "Local Taxi Services",
      copy: "Punctual, comfortable transport for everyday life within the city — morning commutes, family outings and hospital appointments.",
      list: LOCAL_SERVICES_LIST,
      checkClass: "text-crimson-600",
      cta: "Enquire Local Ride",
      payload: { tripType: "Local City Travel" },
      btnClass:
        "bg-slate-100 hover:bg-slate-200 text-navy-900 border border-slate-200",
      variant: "left",
    },
    {
      image: "/images/journeys/outstation-highway.webp",
      alt: "V TAXI outstation highway journey across Tamil Nadu",
      iconImg: "/images/icons/service-outstation.png",
      kicker: "Intercity Network",
      kickerClass: "text-crimson-700",
      iconClass: "bg-crimson-50 border border-crimson-100",
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
              image,
              alt,
              iconImg,
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
                <Spotlight className="lift group h-full bg-white rounded-[26px] overflow-hidden border border-slate-200 shadow-card-soft hover:shadow-card-hover flex flex-col justify-between">
                  <div>
                    {/* Journey Photography Header */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <img
                        src={image}
                        alt={alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="338"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md shadow-sm ${kickerClass}`}
                        >
                          {kicker}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 sm:p-8 space-y-5">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center p-2 flex-shrink-0 ${iconClass}`}
                        >
                          <img
                            src={iconImg}
                            alt=""
                            className="w-8 h-8 object-contain"
                            loading="lazy"
                            decoding="async"
                            width="32"
                            height="32"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-display text-navy-900 group-hover:text-crimson-600 transition-colors">
                            {title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {copy}
                      </p>
                      <div className="space-y-3 pt-2">
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
                  </div>

                  <div className="p-7 sm:p-8 pt-0">
                    <button
                      onClick={() => onOpenEnquiry(payload)}
                      className={`w-full py-3.5 rounded-xl font-bold text-xs transition ${btnClass}`}
                    >
                      {cta}
                    </button>
                  </div>
                </Spotlight>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
