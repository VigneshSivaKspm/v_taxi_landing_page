import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight, ChevronRight } from "lucide-react";
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

const Logo = ({ className = "h-12 sm:h-14" }) => (
  <span className={`inline-flex items-center overflow-hidden ${className}`}>
    <img
      src="/images/brand/v-taxi-logo-clean-transparent.png"
      alt="V TAXI — The People's Choice"
      className="h-full w-auto object-contain object-left"
    />
  </span>
);

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-500" />
            <span className="font-semibold text-slate-700">
              Official Pre-Launch
            </span>
            <span className="hidden text-slate-400 sm:inline">
              Chennai · Trichy · Thanjavur · Madurai · Rameswaram
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-slate-400 md:inline">
              Booking office
            </span>
            <a
              href={`tel:${BOOKING_OFFICE.phone1Raw}`}
              className="flex items-center gap-1.5 font-semibold text-slate-700 transition hover:text-crimson-600"
            >
              <Phone className="h-3 w-3 text-crimson-500" />
              {BOOKING_OFFICE.phone1}
            </a>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <a
              href={`tel:${BOOKING_OFFICE.phone2Raw}`}
              className="hidden items-center gap-1.5 font-semibold text-slate-700 transition hover:text-crimson-600 sm:flex"
            >
              <Phone className="h-3 w-3 text-crimson-500" />
              {BOOKING_OFFICE.phone2}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-slate-200 py-2.5 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]"
            : "border-transparent py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="group shrink-0 flex items-center py-1"
            aria-label="V TAXI — The People's Choice"
          >
            <Logo className="h-12 sm:h-14 md:h-16 transition-transform group-hover:scale-[1.03]" />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            {NAV_LINKS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="link-underline transition-colors hover:text-crimson-600"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 sm:flex">
            <a
              href={`tel:${BOOKING_OFFICE.phone2Raw}`}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Phone className="h-3.5 w-3.5 text-crimson-600" />
              Call Us
            </a>
            <Magnetic strength={0.3}>
              <button
                onClick={() => onOpenEnquiry()}
                className="btn-shine flex items-center gap-2 rounded-xl v-gradient-crimson px-4 py-2.5 text-xs font-bold text-white shadow-glow-crimson transition hover:brightness-105 active:scale-95"
              >
                Enquire Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenEnquiry()}
              className="rounded-lg v-gradient-crimson px-3 py-2 text-xs font-bold text-white sm:hidden"
            >
              Enquire
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${
          menuOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* scrim */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <Logo className="h-11 sm:h-12" />
            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-3">
            {NAV_LINKS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-[15px] font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-crimson-600"
              >
                {label}
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </button>
            ))}
          </nav>

          <div className="space-y-2.5 border-t border-slate-100 p-4">
            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs">
              <span className="text-slate-500">Booking office</span>
              <a
                href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                className="font-bold text-navy-900"
              >
                {BOOKING_OFFICE.phone1}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-700"
              >
                <Phone className="h-3.5 w-3.5 text-crimson-600" />
                Call Office
              </a>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="rounded-xl v-gradient-crimson py-3 text-xs font-bold text-white shadow-glow-crimson"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
