import React from "react";
import { Phone, MessageSquare, Send } from "lucide-react";
import { BOOKING_OFFICE } from "../data/landingData";

export default function StickyMobileBar({ onOpenEnquiry }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto text-xs font-bold">
        {/* Call Button */}
        <a
          href={`tel:${BOOKING_OFFICE.phone1Raw}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-navy-900 transition active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-crimson-600" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${BOOKING_OFFICE.whatsapp}?text=${encodeURIComponent("Hello V TAXI, I would like to enquire about your upcoming taxi services.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white transition active:scale-95 shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire Modal Trigger */}
        <button
          onClick={() => onOpenEnquiry()}
          className="btn-shine flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl v-gradient-crimson text-white transition active:scale-95 shadow-glow-crimson"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}
