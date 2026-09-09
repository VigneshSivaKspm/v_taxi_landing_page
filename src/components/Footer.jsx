import React, { useState } from "react";
import { Phone, MapPin, ShieldCheck, MessageSquare, X } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";
import {
  BOOKING_OFFICE,
  PRIMARY_SERVICE_AREAS,
  TAXI_SERVICES,
} from "../data/landingData";
import Reveal from "./Reveal";

export default function Footer({ onOpenEnquiry }) {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-400 text-xs pt-16 pb-24 lg:pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        {/* Main Grid */}
        <Reveal as="div" y={22} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl v-gradient-crimson flex items-center justify-center text-white font-display text-xl">
                V
              </div>
              <div>
                <span className="text-xl font-display text-white">
                  V <span className="text-crimson-500">TAXI</span>
                </span>
                <p className="text-[11px] text-slate-400 font-medium">
                  {BOOKING_OFFICE.tagline}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {BOOKING_OFFICE.brandMessage}
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-crimson-500 flex-shrink-0" />
                <span>Central Booking Office, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  Helpline: {BOOKING_OFFICE.phone1} | {BOOKING_OFFICE.phone2}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BOOKING_OFFICE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 transition"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Service Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Taxi Services
            </h4>
            <ul className="space-y-2 text-slate-400">
              {TAXI_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-crimson-400 transition text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2 text-slate-400">
              {PRIMARY_SERVICE_AREAS.map((area, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection("service-areas")}
                    className="hover:text-crimson-400 transition text-left"
                  >
                    {area.name} ({area.tamil})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Vehicle Categories
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection("vehicles")}
                  className="hover:text-white text-left font-bold text-slate-200"
                >
                  5-Seater Sedan
                </button>
                <p className="text-[10px] text-slate-500">
                  City, Airport, Small Family
                </p>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("vehicles")}
                  className="hover:text-white text-left font-bold text-slate-200"
                >
                  7-Seater SUV
                </button>
                <p className="text-[10px] text-slate-500">
                  Family & Long-Distance Outstation
                </p>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("vehicles")}
                  className="hover:text-white text-left font-bold text-slate-200"
                >
                  Premium SUV
                </button>
                <p className="text-[10px] text-slate-500">
                  Executive Captain Seating
                </p>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("vehicles")}
                  className="hover:text-white text-left font-bold text-slate-200"
                >
                  Tempo Traveller
                </button>
                <p className="text-[10px] text-amber-500 font-semibold">
                  Coming Soon for Large Groups
                </p>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Legal & Policies */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setModalType("privacy")}
              className="hover:text-white transition underline underline-offset-4"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setModalType("terms")}
              className="hover:text-white transition underline underline-offset-4"
            >
              Terms and Conditions
            </button>
            <span>•</span>
            <span>Customer Consent Compliant</span>
          </div>

          <p className="text-slate-500">
            Booking Helpline: {BOOKING_OFFICE.phone1} / {BOOKING_OFFICE.phone2}
          </p>
        </div>

        {/* Development Credits & Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p className="text-slate-300 font-semibold">
              © 2026 V TAXI. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-500">
              Pre-Launch Official Landing Page • Tamil Nadu, India.
            </p>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-800 text-slate-400 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-crimson-500 flex-shrink-0" />
            <div>
              <span>Digital Strategy and Development by </span>
              <a
                href="https://legendaryone.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:text-amber-400 transition"
              >
                LEGENDARY ONE
              </a>
              <span className="text-[10px] block text-slate-500">
                Where Innovation Meets Excellence • UDYAM-TN-07-0110518 •
                Legendaryone.in
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy / Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-slate-800 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-navy-900">
                {modalType === "privacy"
                  ? "Privacy Policy"
                  : "Terms and Conditions"}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="p-1 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-3 leading-relaxed">
              {modalType === "privacy" ? (
                <>
                  <p>
                    <strong>Information Collection:</strong> V TAXI collects
                    information provided by users through our pre-launch
                    interest registration form (such as Name, Mobile Number,
                    City, Destination, and Travel Date) solely for the purpose
                    of travel enquiry follow-up, quotation sharing, and official
                    launch announcements.
                  </p>
                  <p>
                    <strong>Customer Consent:</strong> By submitting the enquiry
                    form, you explicitly consent to be contacted by our official
                    booking office via telephone or WhatsApp regarding your
                    travel requirement.
                  </p>
                  <p>
                    <strong>Data Protection:</strong> We respect your personal
                    privacy. We do not sell, rent, or lease customer contact
                    information to third-party marketing companies.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Pre-Launch Nature:</strong> This website represents
                    the official pre-launch landing page of V TAXI. Displayed
                    services and vehicle categories reflect our operational
                    roadmap.
                  </p>
                  <p>
                    <strong>Fares & Quotations:</strong> Any trip fare discussed
                    is shared as an itemized customized quotation based on
                    actual distance, vehicle availability, and route details.
                  </p>
                  <p>
                    <strong>Digital Platform Launch:</strong> The official
                    mobile application and comprehensive booking system are
                    under development and will be announced to registered
                    customers first.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
