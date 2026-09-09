import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";
import { BOOKING_OFFICE, PRIMARY_SERVICE_AREAS } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function EnquiryForm({ initialData = null }) {
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
        setMessage(`Enquiring about: ${initialData.service}`);
      if (initialData.specialOffer)
        setMessage(`Interested in offer: ${initialData.specialOffer}`);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert("Please check the consent box to proceed.");
      return;
    }

    setIsSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setMessage("");
  };

  return (
    <section id="enquiry" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-radial-fade pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Customer Registration"
          index="09"
          title="Plan your journey with"
          accent="V TAXI"
          description="Submit your travel details to receive a customized quotation and pre-launch priority updates from our booking office."
          className="mb-14"
        />

        {/* Form Container */}
        <Reveal variant="up" y={30} className="ring-gradient bg-gradient-to-br from-slate-50 to-white rounded-[28px] p-6 sm:p-12 border border-slate-200/80 shadow-card-soft">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-crimson-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Anand Sundaram"
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number <span className="text-crimson-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="e.g. 098400 00000"
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                  />
                </div>
              </div>

              {/* Row 2: Email & Passengers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address{" "}
                    <span className="text-slate-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. anand@example.com"
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Number of Passengers
                  </label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                  >
                    <option value={1}>1-2 Passengers (Couple / Solo)</option>
                    <option value={3}>3-4 Passengers (Small Family)</option>
                    <option value={5}>5-6 Passengers (Family Group)</option>
                    <option value={7}>
                      7+ Passengers (Executive / Extended)
                    </option>
                    <option value={12}>12+ Passengers (Tempo Group)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Pickup City & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pickup City <span className="text-crimson-600">*</span>
                  </label>
                  <select
                    value={pickupCity}
                    onChange={(e) => setPickupCity(e.target.value)}
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
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
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Destination <span className="text-crimson-600">*</span>
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                  >
                    {PRIMARY_SERVICE_AREAS.map((a, i) => (
                      <option key={i} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                    <option value="Kumbakonam">Kumbakonam</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Dindigul">Dindigul</option>
                    <option value="Other Destination">Other Destination</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Trip Type, Vehicle, Travel Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Trip Type
                  </label>
                  <select
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                  >
                    <option value="One Way">One Way</option>
                    <option value="Round Trip">Round Trip</option>
                    <option value="Local">Local City Trip</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Vehicle
                  </label>
                  <select
                    value={preferredVehicle}
                    onChange={(e) => setPreferredVehicle(e.target.value)}
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                  >
                    <option value="5-Seater Sedan">5-Seater Sedan</option>
                    <option value="7-Seater SUV">7-Seater SUV</option>
                    <option value="Premium SUV">Premium SUV</option>
                    <option value="Tempo Traveller">
                      Tempo Traveller (Coming Soon)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Travel Date{" "}
                    <span className="text-slate-400 font-normal">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                  />
                </div>
              </div>

              {/* Message / Special Requirement */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message or Special Requirement
                </label>
                <textarea
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Airport flight timing, senior citizen wheelchair space, luggage count, temple stops..."
                  className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-white py-3.5 px-4 text-slate-800 focus:outline-none focus:ring-4 focus:ring-crimson-500/15 focus:border-crimson-400 hover:border-slate-400 transition"
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200">
                <input
                  type="checkbox"
                  id="consentCheckbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-crimson-600 focus:ring-crimson-500 cursor-pointer"
                />
                <label
                  htmlFor="consentCheckbox"
                  className="text-xs text-slate-600 leading-relaxed cursor-pointer"
                >
                  By submitting this form, I agree to be contacted by V TAXI
                  regarding my enquiry, launch updates and relevant offers.
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="btn-shine w-full py-4 px-6 rounded-xl v-gradient-crimson text-white font-extrabold text-sm sm:text-base shadow-glow-crimson hover:brightness-105 active:scale-[0.99] transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Register My Interest</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  🔒 Information collected solely for travel enquiry follow-up.
                  No spam.
                </p>
              </div>
            </form>
          ) : (
            /* SECTION 12: ENQUIRY SUCCESS MESSAGE */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-navy-900">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-sm sm:text-base text-slate-700 max-w-lg mx-auto font-medium leading-relaxed">
                  Thank you for choosing V TAXI. Your enquiry has been received
                  successfully. Our team will contact you shortly.
                </p>
              </div>

              {/* Quick Actions in Success State */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 max-w-md mx-auto space-y-4 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Need Immediate Assistance?
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-crimson-400" />
                    <span>{BOOKING_OFFICE.phone1}</span>
                  </a>

                  <a
                    href={`https://wa.me/${BOOKING_OFFICE.whatsapp}?text=${encodeURIComponent(`Hi V TAXI, I just registered on your website. Name: ${name}, Route: ${pickupCity} to ${destination}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Office</span>
                  </a>
                </div>

                <div className="pt-2 text-xs text-slate-500">
                  <span>
                    Upcoming V TAXI App notification will be sent to{" "}
                    <strong>{mobile}</strong>
                  </span>
                </div>
              </div>

              <div>
                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-crimson-600 hover:underline"
                >
                  Submit Another Travel Enquiry
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
