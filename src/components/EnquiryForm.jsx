import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";
import { BOOKING_OFFICE, PRIMARY_SERVICE_AREAS } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { GroupTitle, SelectField, TextField, textareaBase } from "./formUI";

export default function EnquiryForm({ initialData = null }) {
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

  useEffect(() => {
    if (!initialData) return;
    if (initialData.pickupCity) setPickupCity(initialData.pickupCity);
    if (initialData.destination) setDestination(initialData.destination);
    if (initialData.tripType) setTripType(initialData.tripType);
    if (initialData.vehicle) setPreferredVehicle(initialData.vehicle);
    if (initialData.service)
      setMessage(`Enquiring about: ${initialData.service}`);
    if (initialData.specialOffer)
      setMessage(`Interested in offer: ${initialData.specialOffer}`);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) return;
    setIsSubmitted(true);
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.5 } });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setMessage("");
  };

  const waHref = `https://wa.me/${BOOKING_OFFICE.whatsapp}?text=${encodeURIComponent(
    `Hi V TAXI, I just registered on your website. Name: ${name || "-"}, Route: ${pickupCity} to ${destination}`,
  )}`;

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[900px] -translate-x-1/2 bg-radial-fade" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Registration"
          title="Plan your journey"
          accent="with V TAXI"
          description="Share your travel details and our booking office will respond with a customized quotation and pre-launch priority updates."
          className="mb-12"
        />

        <Reveal
          variant="up"
          y={30}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card-soft"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 p-6 sm:p-10">
              <div>
                <GroupTitle>Your details</GroupTitle>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <TextField
                      label="Full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Anand Sundaram"
                    />
                    <TextField
                      label="Mobile number"
                      required
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="098400 00000"
                    />
                  </div>
                  <TextField
                    label="Email address"
                    hint="(optional)"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="anand@example.com"
                  />
                </div>
              </div>

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
                      <option value="Dindigul">Dindigul</option>
                      <option value="Other Destination">
                        Other Destination
                      </option>
                    </SelectField>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
                      <option value="Tempo Traveller">
                        Tempo Traveller (soon)
                      </option>
                    </SelectField>
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
                  </div>

                  <TextField
                    label="Travel date"
                    hint="(optional)"
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <GroupTitle>Anything else?</GroupTitle>
                <textarea
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Flight timing, senior-citizen assistance, luggage count, temple stops…"
                  className={textareaBase}
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

              <div>
                <button
                  type="submit"
                  disabled={!consent}
                  className="btn-shine flex h-12 w-full items-center justify-center gap-2 rounded-xl v-gradient-crimson text-sm font-extrabold text-white shadow-glow-crimson transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  Register my interest
                </button>
                <p className="mt-2.5 text-center text-[11px] text-slate-400">
                  Used only to follow up on this enquiry. No spam.
                </p>
              </div>
            </form>
          ) : (
            <div className="px-6 py-12 text-center sm:px-10">
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
              <h3 className="mt-5 font-display text-2xl text-navy-900">
                Enquiry received
              </h3>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                Thank you for choosing V TAXI. Our booking office will review
                your route ({pickupCity} → {destination}) and contact you
                shortly.
              </p>

              <div className="mx-auto mt-7 flex max-w-sm flex-col gap-2.5 sm:flex-row">
                <a
                  href={`tel:${BOOKING_OFFICE.phone1Raw}`}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-navy-900 text-xs font-bold text-white transition hover:bg-navy-800"
                >
                  <Phone className="h-4 w-4 text-crimson-400" />
                  Call {BOOKING_OFFICE.phone1}
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] text-xs font-bold text-white transition hover:brightness-105"
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp office
                </a>
              </div>

              <button
                onClick={handleReset}
                className="mt-6 text-xs font-bold text-crimson-600 hover:underline"
              >
                Submit another enquiry
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
