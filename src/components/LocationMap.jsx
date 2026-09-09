import React from "react";
import { MapPin, Phone, Clock, Navigation, ExternalLink } from "lucide-react";
import { BOOKING_OFFICE } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function LocationMap() {
  return (
    <section className="py-24 sm:py-32 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Office & Location"
          icon={MapPin}
          index="11"
          tone="slate"
          title="Booking office &"
          accent="operations"
          description="Reach out to our booking team or visit our central coordination office in Tamil Nadu."
          className="mb-14"
        />

        {/* 2-Column Location & Map Card */}
        <Reveal variant="up" y={30} className="ring-gradient bg-slate-50 rounded-[28px] border border-slate-200 overflow-hidden shadow-card-soft grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 p-7 sm:p-9 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-crimson-600 bg-crimson-50 px-2.5 py-1 rounded">
                  HEADQUARTERS & BOOKING DESK
                </span>
                <h3 className="text-2xl font-black text-navy-900 mt-2">
                  V TAXI Booking Office
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  The People's Choice • Tamil Nadu, India
                </p>
              </div>

              {/* Contact Information Points */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-crimson-600 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block">
                      Central Booking Address:
                    </span>
                    <span className="text-slate-600 leading-relaxed block">
                      V TAXI Booking Center, Central Corridor Road, Tamil Nadu,
                      India.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-crimson-600 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block">
                      Booking Helpline Numbers:
                    </span>
                    <div className="flex flex-col gap-1 pt-0.5 font-mono">
                      <a
                        href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                        className="text-crimson-700 font-bold hover:underline"
                      >
                        {BOOKING_OFFICE.phone1}
                      </a>
                      <a
                        href={`tel:${BOOKING_OFFICE.phone2Raw}`}
                        className="text-crimson-700 font-bold hover:underline"
                      >
                        {BOOKING_OFFICE.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 text-emerald-600 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-navy-900 block">
                      Business Operating Hours:
                    </span>
                    <span className="text-slate-600">
                      {BOOKING_OFFICE.operatingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Action */}
            <div className="pt-6 border-t border-slate-200">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-sm"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions via Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Viewport */}
          <div className="lg:col-span-7 bg-slate-200 min-h-[350px] relative flex items-center justify-center overflow-hidden">
            <iframe
              title="V TAXI Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8899878262777!2d79.1350!3d10.7870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzEzLjIiTiA3OcKwMDgnMDYuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            ></iframe>

            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-md text-[11px] font-bold text-navy-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Verified Location Desk</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
