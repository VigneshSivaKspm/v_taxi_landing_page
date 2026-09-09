import React, { useState, useEffect } from "react";
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

export default function EnquiryModal({ isOpen, onClose, initialData = null }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pickupCity, setPickupCity] = useState("Chennai");
  const [destination, setDestination] = useState("Trichy");
  const [travelDate, setTravelDate] = useState("");
  const [tripType, setTripType] = useState("One Way");
  const [preferredVehicle, setPreferredVehicle] = useState("7-Seater SUV");
  const [passengers, setPassengers] = useState(4);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      if (initialData.pickupCity) setPickupCity(initialData.pickupCity);
      if (initialData.destination) setDestination(initialData.destination);
      if (initialData.tripType) setTripType(initialData.tripType);
      if (initialData.vehicle) setPreferredVehicle(initialData.vehicle);
      if (initialData.service)
        setMessage(`Service enquiry: ${initialData.service}`);
      if (initialData.specialOffer)
        setMessage(`Offer interest: ${initialData.specialOffer}`);
    }
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
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert("Please check the consent box to proceed.");
      return;
    }

    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fade-up"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="v-gradient-crimson text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded text-white">
              V TAXI PRE-LAUNCH ENQUIRY
            </span>
            <h3 className="text-lg font-black tracking-tight text-white mt-0.5">
              Plan Your Journey with V TAXI
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[82vh] overflow-y-auto">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-xs sm:text-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name <span className="text-crimson-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 font-medium transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-crimson-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="e.g. 098400 00000"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 font-medium transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address{" "}
                  <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. ramesh@example.com"
                  className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 font-medium transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Pickup City <span className="text-crimson-600">*</span>
                  </label>
                  <select
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 font-medium text-xs"
                  >
                    {PRIMARY_SERVICE_AREAS.map((a, i) => (
                      <option key={i} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                    <option value="Other Tamil Nadu City">
                      Other Tamil Nadu City
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Destination <span className="text-crimson-600">*</span>
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 font-medium text-xs"
                  >
                    {PRIMARY_SERVICE_AREAS.map((a, i) => (
                      <option key={i} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                    <option value="Kumbakonam">Kumbakonam</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Other Destination">Other Destination</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Trip Type
                  </label>
                  <select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 font-medium text-xs"
                  >
                    <option value="One Way">One Way</option>
                    <option value="Round Trip">Round Trip</option>
                    <option value="Local">Local City Ride</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Vehicle
                  </label>
                  <select
                    value={preferredVehicle}
                    onChange={(e) => setPreferredVehicle(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 font-medium text-xs"
                  >
                    <option value="5-Seater Sedan">5-Seater Sedan</option>
                    <option value="7-Seater SUV">7-Seater SUV</option>
                    <option value="Premium SUV">Premium SUV</option>
                    <option value="Tempo Traveller">Tempo Traveller</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 font-medium text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Message or Special Requirement
                </label>
                <textarea
                  rows="2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Flight arrival timing, pickup landmark, luggage details..."
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 font-medium text-xs"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="modalConsent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-crimson-600 focus:ring-crimson-500 cursor-pointer"
                />
                <label
                  htmlFor="modalConsent"
                  className="text-xs text-slate-600 leading-relaxed cursor-pointer"
                >
                  By submitting this form, I agree to be contacted by V TAXI
                  regarding my enquiry, launch updates and relevant offers.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-shine w-full py-3.5 px-4 rounded-xl v-gradient-crimson text-white font-extrabold text-sm shadow-glow-crimson hover:brightness-105 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Register My Interest</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-navy-900">
                Enquiry Received Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for choosing V TAXI. Your enquiry has been received
                successfully. Our team will contact you shortly.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2">
                <a
                  href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                  className="px-4 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-crimson-400" />
                  <span>Call {BOOKING_OFFICE.phone1}</span>
                </a>
                <button
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
