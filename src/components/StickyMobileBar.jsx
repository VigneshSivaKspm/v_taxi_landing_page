import React from "react";
import { Phone, Send } from "lucide-react";
import { BOOKING_OFFICE } from "../data/landingData";

const WHATSAPP_ICON = "https://cdn.simpleicons.org/whatsapp/white";

export default function StickyMobileBar({ onOpenEnquiry }) {
  const waHref = `https://wa.me/${BOOKING_OFFICE.whatsapp}?text=${encodeURIComponent(
    "Hello V TAXI, I would like to enquire about your upcoming taxi services."
  )}`;

  const fab =
    "w-14 h-14 rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-transform";

  return (
    <div className="lg:hidden fixed left-4 bottom-5 z-40 flex flex-col gap-3.5">
      {/* Call */}
      <a
        href={`tel:${BOOKING_OFFICE.phone1Raw}`}
        aria-label="Call the V TAXI booking office"
        className={`${fab} bg-white ring-1 ring-slate-900/10`}
      >
        <Phone className="w-6 h-6 text-crimson-600" />
      </a>

      {/* WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message V TAXI on WhatsApp"
        className={`${fab} pulse-ring bg-[#25D366]`}
      >
        <img
          src={WHATSAPP_ICON}
          alt=""
          aria-hidden="true"
          width="30"
          height="30"
          className="w-[30px] h-[30px]"
        />
      </a>

      {/* Enquire */}
      <button
        onClick={() => onOpenEnquiry()}
        aria-label="Open the travel enquiry form"
        className={`${fab} btn-shine v-gradient-crimson text-white shadow-glow-crimson`}
      >
        <Send className="w-6 h-6" />
      </button>
    </div>
  );
}
