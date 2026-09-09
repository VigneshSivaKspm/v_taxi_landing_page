import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { BOOKING_OFFICE } from "../data/landingData";
import Magnetic from "./Magnetic";

const NAV_LINKS = [
  ["home", "Home"],
  ["services", "Services"],
  ["vehicles", "Vehicles"],
  ["service-areas", "Service Areas"],
  ["why-v-taxi", "Why V TAXI"],
  ["launch-offers", "Launch Offers"],
  ["coming-soon", "Coming Soon"],
  ["contact", "Contact"],
];

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const solid = isScrolled || mobileMenuOpen;

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-ink text-slate-300 text-xs py-2 px-4 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-crimson-500 animate-pulse" />
            <span className="font-semibold text-white">
              Pre-Launch Announcement:
            </span>
            <span className="hidden sm:inline text-slate-400">
              Chennai • Trichy • Thanjavur • Madurai • Rameswaram
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-500">
              Booking Office:
            </span>
            <a
              href={`tel:${BOOKING_OFFICE.phone1Raw}`}
              className="flex items-center gap-1 text-white hover:text-amber-400 transition font-medium"
            >
              <Phone className="w-3 h-3 text-crimson-400" />
              <span>{BOOKING_OFFICE.phone1}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={`tel:${BOOKING_OFFICE.phone2Raw}`}
              className="hidden sm:flex items-center gap-1 text-white hover:text-amber-400 transition font-medium"
            >
              <Phone className="w-3 h-3 text-crimson-400" />
              <span>{BOOKING_OFFICE.phone2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          solid
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-2.5 border-b border-slate-200/70"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl v-gradient-crimson flex items-center justify-center shadow-glow-crimson text-white font-display text-xl group-hover:scale-105 transition-transform">
              V
            </div>
            <div>
              <span
                className={`text-2xl font-display leading-none block transition-colors ${
                  solid ? "text-navy-900" : "text-white"
                }`}
              >
                V <span className="text-crimson-500">TAXI</span>
              </span>
              <p
                className={`text-[11px] font-medium tracking-wide transition-colors ${
                  solid ? "text-slate-500" : "text-slate-300"
                }`}
              >
                {BOOKING_OFFICE.tagline}
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav
            className={`hidden lg:flex items-center gap-7 text-sm font-semibold transition-colors ${
              solid ? "text-slate-700" : "text-slate-200"
            }`}
          >
            {NAV_LINKS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="link-underline hover:text-crimson-500 transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BOOKING_OFFICE.phone2Raw}`}
              className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border font-bold text-xs transition ${
                solid
                  ? "border-slate-300 text-slate-800 hover:bg-slate-50"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-crimson-500" />
              <span>Call Us</span>
            </a>
            <Magnetic strength={0.3}>
              <button
                onClick={() => onOpenEnquiry()}
                className="btn-shine flex items-center gap-2 px-4 py-2.5 rounded-xl v-gradient-crimson text-white font-bold text-xs shadow-glow-crimson hover:brightness-105 active:scale-95 transition"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="sm:hidden px-3 py-1.5 rounded-lg v-gradient-crimson text-white font-bold text-xs"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition ${
                solid
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 mt-2.5 shadow-xl animate-fade-up">
            <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
              {NAV_LINKS.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left py-2 border-b border-slate-100 hover:text-crimson-600"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-300 font-bold text-slate-800 text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-crimson-600" />
                Call Office
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="py-2.5 rounded-xl v-gradient-crimson text-white font-bold text-xs shadow-md"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
