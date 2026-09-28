import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import confetti from "canvas-confetti";
import { BOOKING_OFFICE, PRIMARY_SERVICE_AREAS } from "../data/landingData";
import { inputBase, Label, GroupTitle, SelectField } from "./formUI";

export default function EnquiryModal({ isOpen, onClose, initialData = null }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pickupCity, setPickupCity] = useState("Chennai");
  const [destination, setDestination] = useState("Trichy");
  const [travelDate, setTravelDate] = useState("");
  const [tripType, setTripType] = useState("One Way");
  const [preferredVehicle, setPreferredVehicle] = useState("7-Seater SUV");
  const [passengers, setPassengers] = useState("3-4 Passengers");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!initialData) return;
    if (initialData.pickupCity) setPickupCity(initialData.pickupCity);
    if (initialData.destination) setDestination(initialData.destination);
    if (initialData.tripType) setTripType(initialData.tripType);
    if (initialData.vehicle) setPreferredVehicle(initialData.vehicle);
    if (initialData.service)
      setMessage(`Service enquiry: ${initialData.service}`);
    if (initialData.specialOffer)
      setMessage(`Offer interest: ${initialData.specialOffer}`);
  }, [initialData]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsSubmitted(false);
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 120);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) return;
    setIsSubmitted(true);
    confetti({ particleCount: 90, spread: 65, origin: { y: 0.4 } });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const waHref = `https://wa.me/${BOOKING_OFFICE.whatsapp}?text=${encodeURIComponent(
    `Hi V TAXI, I just registered an enquiry. Name: ${name || "-"}, Route: ${pickupCity} to ${destination}`,
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 backdrop-blur-md p-0 sm:items-center sm:p-4 animate-fade-up"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="relative flex w-full min-w-0 max-w-full max-h-[92vh] flex-col overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-2xl animate-fade-up sm:max-w-lg sm:max-h-[88vh] sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="V TAXI travel enquiry"
      >
        {/* drag handle (mobile) */}
        <div className="mx-auto mt-2.5 h-1 w-10 shrink-0 rounded-full bg-slate-200 sm:hidden" />

        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-3 px-5 pt-4 pb-4 sm:px-7 sm:pt-6">
          <div className="min-w-0">
            <span className="inline-flex items-center h-12 overflow-hidden">
              <img
                src="/images/brand/v-taxi-logo-clean-transparent.png"
                alt="V TAXI — The People's Choice"
                className="h-full w-auto object-contain object-left"
              />
            </span>
            <h3 className="mt-2.5 font-display text-lg leading-tight text-navy-900">
              Plan your journey
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Pre-launch enquiry · our office calls you back
            </p>
          </div>
          <button
            onClick={handleClose}
            className="-mr-1 -mt-1 shrink-0 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!isSubmitted ? (
          <>
            {/* Body */}
            <form
              id="enquiry-modal-form"
              onSubmit={handleSubmit}
              className="min-w-0 flex-1 space-y-7 overflow-y-auto overflow-x-hidden border-t border-slate-100 px-5 py-6 sm:px-7"
            >
              {/* Contact */}
              <div>
                <GroupTitle>Your details</GroupTitle>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block min-w-0">
                      <Label required>Full name</Label>
                      <input
                        ref={firstFieldRef}
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ramesh Kumar"
                        className={inputBase}
                      />
                    </label>
                    <label className="block min-w-0">
                      <Label required>Mobile number</Label>
                      <input
                        type="tel"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="098400 00000"
                        className={inputBase}
                      />
                    </label>
                  </div>
                  <label className="block min-w-0">
                    <Label hint="(optional)">Email address</Label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ramesh@example.com"
                      className={inputBase}
                    />
                  </label>
                </div>
              </div>

              {/* Trip */}
              <div>
                <GroupTitle>Trip details</GroupTitle>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <SelectField
                      label="Pickup city"
                      required
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                    >
                      {PRIMARY_SERVICE_AREAS.map((a) => (
                        <option key={a.name} value={a.name}>
                          {a.name}
                        </option>
                      ))}
                      <option value="Other Tamil Nadu City">
                        Other Tamil Nadu City
                      </option>
                    </SelectField>
                    <SelectField
                      label="Destination"
                      required
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    >
                      {PRIMARY_SERVICE_AREAS.map((a) => (
                        <option key={a.name} value={a.name}>
                          {a.name}
                        </option>
                      ))}
                      <option value="Kumbakonam">Kumbakonam</option>
                      <option value="Tirunelveli">Tirunelveli</option>
                      <option value="Other Destination">
                        Other Destination
                      </option>
                    </SelectField>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <SelectField
                      label="Trip type"
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                    >
                      <option value="One Way">One way</option>
                      <option value="Round Trip">Round trip</option>
                      <option value="Local">Local city ride</option>
                    </SelectField>
                    <SelectField
                      label="Preferred vehicle"
                      value={preferredVehicle}
                      onChange={(e) => setPreferredVehicle(e.target.value)}
                    >
                      <option value="5-Seater Sedan">5-Seater Sedan</option>
                      <option value="7-Seater SUV">7-Seater SUV</option>
                      <option value="Premium SUV">Premium SUV</option>
                      <option value="Tempo Traveller">Tempo Traveller</option>
                    </SelectField>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <SelectField
                      label="Passengers"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                    >
                      <option>1-2 Passengers</option>
                      <option>3-4 Passengers</option>
                      <option>5-6 Passengers</option>
                      <option>7+ Passengers</option>
                      <option>12+ Passengers</option>
                    </SelectField>
                    <label className="block min-w-0">
                      <Label hint="(optional)">Travel date</Label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className={`${inputBase} cursor-pointer`}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <GroupTitle>Anything else?</GroupTitle>
                <textarea
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Flight timing, pickup landmark, luggage, temple stops…"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-crimson-400 focus:ring-4 focus:ring-crimson-500/10 focus:outline-none transition"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate-50 p-3.5">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-crimson-600 focus:ring-crimson-500"
                />
                <span className="text-xs leading-relaxed text-slate-600">
                  I agree to be contacted by V TAXI about my enquiry, launch
                  updates and relevant offers.
                </span>
              </label>
            </form>

            {/* Footer */}
            <div className="shrink-0 border-t border-slate-100 bg-white px-5 py-4 sm:px-7">
              <button
                type="submit"
                form="enquiry-modal-form"
                disabled={!consent}
                className="btn-shine flex h-12 w-full items-center justify-center gap-2 rounded-xl v-gradient-crimson text-sm font-extrabold text-white shadow-glow-crimson transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                <span>Register my interest</span>
              </button>
              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5" />
                Used only to follow up on this enquiry. No spam.
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 overflow-y-auto border-t border-slate-100 px-6 py-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50/80 p-2 shadow-sm border border-emerald-100 ring-8 ring-emerald-50/60">
              <img
                src="/images/icons/enquiry-success.png"
                alt="Enquiry Success"
                className="h-14 w-14 object-contain"
                loading="lazy"
                decoding="async"
                width="56"
                height="56"
              />
            </div>
            <h4 className="mt-5 font-display text-xl text-navy-900">
              Enquiry received
            </h4>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              Thank you for choosing V TAXI. Our booking office will review your
              route ({pickupCity} → {destination}) and contact you shortly.
            </p>

            <div className="mx-auto mt-6 flex max-w-xs flex-col gap-2.5">
              <a
                href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-navy-900 text-xs font-bold text-white transition hover:bg-navy-800"
              >
                <Phone className="h-4 w-4 text-crimson-400" />
                Call {BOOKING_OFFICE.phone1}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-xs font-bold text-white transition hover:brightness-105"
              >
                <MessageSquare className="h-4 w-4" />
                Message on WhatsApp
              </a>
              <button
                onClick={handleClose}
                className="h-11 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 transition hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
