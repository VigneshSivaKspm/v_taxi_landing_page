import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TAXI_SERVICES } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import Magnetic from "./Magnetic";

const SERVICE_ASSETS = {
  local: {
    image: "/images/services/local-taxi.webp",
    icon: "/images/icons/service-local.png",
    alt: "V TAXI local city taxi service in Tamil Nadu",
  },
  outstation: {
    image: "/images/services/outstation-taxi.webp",
    icon: "/images/icons/service-outstation.png",
    alt: "V TAXI outstation highway taxi intercity travel",
  },
  airport: {
    image: "/images/services/airport-transfer.webp",
    icon: "/images/icons/service-airport.png",
    alt: "V TAXI airport transfer pickup and drop",
  },
  railway: {
    image: "/images/services/railway-transfer.webp",
    icon: "/images/icons/service-railway.png",
    alt: "V TAXI railway station pickup and drop",
  },
  family: {
    image: "/images/brand/v-taxi-family-journey.webp",
    icon: "/images/icons/service-family.png",
    alt: "V TAXI spacious family travel vehicle",
  },
  business: {
    image: "/images/services/business-travel.webp",
    icon: "/images/icons/service-business.png",
    alt: "V TAXI executive corporate business travel",
  },
  pilgrimage: {
    image: "/images/services/pilgrimage-travel.webp",
    icon: "/images/icons/service-pilgrimage.png",
    alt: "V TAXI pilgrimage and temple travel across Tamil Nadu",
  },
  tours: {
    image: "/images/services/tour-packages.webp",
    icon: "/images/icons/service-tour.png",
    alt: "V TAXI customized holiday and weekend tour packages",
  },
};

export default function TaxiServices({ onOpenEnquiry }) {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-slate-50 relative border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Taxi Services"
          title="Travel solutions"
          accent="for every journey"
          description="From everyday city commutes to planned spiritual yatras and intercity corporate trips, V TAXI is built around your varied travel needs."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {TAXI_SERVICES.map((service, i) => {
            const assets = SERVICE_ASSETS[service.id] || {
              image: "/images/services/local-taxi.webp",
              icon: "/images/icons/service-local.png",
              alt: service.title,
            };

            return (
              <Reveal
                key={service.id}
                delay={(i % 4) * 70}
                variant="up"
                y={24}
                className="h-full"
              >
                <Spotlight
                  as="button"
                  onClick={() => onOpenEnquiry({ service: service.title })}
                  className="lift group h-full w-full text-left bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card-soft hover:shadow-card-hover hover:border-crimson-400 flex flex-col justify-between transition-all"
                >
                  <div>
                    {/* 4:3 Photographic Card Header */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                      <img
                        src={assets.image}
                        alt={assets.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      {/* Illustrated Custom Service Icon Badge */}
                      <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md p-1.5 shadow-md flex items-center justify-center border border-white/60 group-hover:scale-110 transition-transform">
                        <img
                          src={assets.icon}
                          alt=""
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                          decoding="async"
                          width="32"
                          height="32"
                        />
                      </div>

                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm text-slate-400 group-hover:text-crimson-600 group-hover:bg-white transition-colors">
                        <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <h3 className="text-[16px] font-bold text-navy-900 group-hover:text-crimson-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2">
                    <span className="text-xs font-bold text-crimson-600 flex items-center gap-1 pt-3 border-t border-slate-100">
                      Enquire Service
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="up" y={16} className="flex justify-center">
          <Magnetic strength={0.3}>
            <button
              onClick={() => onOpenEnquiry()}
              className="btn-shine inline-flex items-center gap-2 px-7 py-4 rounded-2xl v-gradient-crimson text-white font-bold text-sm shadow-glow-crimson hover:brightness-105 transition"
            >
              <span>Discuss Your Travel Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
