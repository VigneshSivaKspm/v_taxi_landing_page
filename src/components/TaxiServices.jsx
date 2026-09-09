import React from "react";
import {
  Navigation,
  Compass,
  Plane,
  Train,
  Users,
  Briefcase,
  Heart,
  Map,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { TAXI_SERVICES } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";
import Magnetic from "./Magnetic";

const iconMap = {
  Navigation: { Icon: Navigation, color: "text-crimson-600 bg-crimson-50" },
  Compass: { Icon: Compass, color: "text-crimson-600 bg-crimson-50" },
  Plane: { Icon: Plane, color: "text-blue-600 bg-blue-50" },
  Train: { Icon: Train, color: "text-emerald-600 bg-emerald-50" },
  Users: { Icon: Users, color: "text-amber-600 bg-amber-50" },
  Briefcase: { Icon: Briefcase, color: "text-indigo-600 bg-indigo-50" },
  Heart: { Icon: Heart, color: "text-rose-600 bg-rose-50" },
  Map: { Icon: Map, color: "text-teal-600 bg-teal-50" },
};

export default function TaxiServices({ onOpenEnquiry }) {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-slate-50 relative border-y border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Taxi Services"
          index="02"
          title="Travel solutions for"
          accent="every journey"
          description="From everyday city commutes to planned spiritual yatras and intercity corporate trips, V TAXI is built around your varied travel needs."
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {TAXI_SERVICES.map((service, i) => {
            const { Icon, color } = iconMap[service.icon];
            return (
              <Reveal key={service.id} delay={(i % 4) * 70} variant="up" y={24} className="h-full">
                <Spotlight
                  as="button"
                  onClick={() => onOpenEnquiry({ service: service.title })}
                  className="lift group h-full w-full text-left bg-white rounded-2xl p-6 border border-slate-200 shadow-card-soft hover:shadow-card-hover hover:border-crimson-300 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-crimson-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="text-[15px] font-bold text-navy-900">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-crimson-600 flex items-center gap-1 pt-3 border-t border-slate-100">
                    Enquire Service
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
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
