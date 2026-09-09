import React, { useEffect, useState } from "react";
import { Phone, Send } from "lucide-react";
import { BOOKING_OFFICE } from "../data/landingData";

const WHATSAPP_ICON = "https://cdn.simpleicons.org/whatsapp/white";

export default function StickyMobileBar({ onOpenEnquiry }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = `https://wa.me/${BOOKING_OFFICE.whatsapp}?text=${encodeURIComponent(
    "Hello V TAXI, I would like to enquire about your upcoming taxi services."
  )}`;

  const fab =
    "w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-[0_12px_28px_-8px_rgba(0,0,0,0.4)] active:scale-90 transition-transform";

  return (
    <div
      className={`lg:hidden fixed left-3.5 bottom-5 z-40 flex flex-col gap-3 transition-all duration-500 ${
        visible
          ? "translate-x-0 opacity-100"
          : "-translate-x-24 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={`tel:${BOOKING_OFFICE.phone1Raw}`}
        aria-label="Call the V TAXI booking office"
        className={`${fab} bg-white ring-1 ring-slate-900/10`}
      >
        <Phone className="w-[22px] h-[22px] text-crimson-600" />
      </a>

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
          width="26"
          height="26"
          className="w-[26px] h-[26px]"
        />
      </a>

      <button
        onClick={() => onOpenEnquiry()}
        aria-label="Open the travel enquiry form"
        className={`${fab} btn-shine v-gradient-crimson text-white shadow-glow-crimson`}
      >
        <Send className="w-[21px] h-[21px]" />
      </button>
    </div>
  );
}
