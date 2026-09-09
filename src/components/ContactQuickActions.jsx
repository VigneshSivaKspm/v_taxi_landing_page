import React, { useState } from "react";
import { Phone, MessageSquare, ChevronDown, Send } from "lucide-react";
import { BOOKING_OFFICE, FAQS } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function ContactQuickActions({ onOpenEnquiry }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? -1 : index);

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-slate-50 relative border-b border-slate-200 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-radial-fade pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col items-center gap-16">
        {/* Contact */}
        <div className="flex flex-col items-center gap-6 w-full">
          <SectionHeader
            eyebrow="Contact & Quick Actions"
            icon={Phone}
            index="12"
            title="Ready to start"
            accent="your journey?"
            description="Reach our booking office directly, or submit your travel details for a quotation and launch privileges."
          />

          <Reveal y={18} className="flex flex-wrap justify-center items-center gap-3">
            {[BOOKING_OFFICE.phone1, BOOKING_OFFICE.phone2].map((num, i) => (
              <a
                key={num}
                href={`tel:${i === 0 ? BOOKING_OFFICE.phone1Raw : BOOKING_OFFICE.phone2Raw}`}
                className="lift px-5 py-3 rounded-2xl bg-white border border-slate-300 shadow-card-soft hover:border-crimson-400 hover:shadow-card-hover text-navy-900 font-mono font-bold text-base sm:text-lg flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-crimson-600" />
                <span>{num}</span>
              </a>
            ))}
          </Reveal>

          <Reveal y={16} className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenEnquiry()}
              className="btn-shine flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl v-gradient-crimson text-white font-bold text-sm shadow-glow-crimson hover:brightness-105 transition"
            >
              <Send className="w-4 h-4" />
              <span>Send a Travel Enquiry</span>
            </button>
            <a
              href={`https://wa.me/${BOOKING_OFFICE.whatsapp}?text=${encodeURIComponent(
                "Hello V TAXI, I would like to enquire about your upcoming taxi services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-sm transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </Reveal>
        </div>

        {/* FAQ */}
        <div className="w-full space-y-6">
          <SectionHeader
            eyebrow="FAQ"
            tone="slate"
            title="Frequently Asked"
            accent="Questions"
            description="Key details about V TAXI services, vehicles and our pre-launch process."
          />

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={faq.q} delay={index * 45} y={14}>
                  <div
                    className={`bg-white rounded-2xl border shadow-card-soft overflow-hidden transition-colors ${
                      isOpen ? "border-crimson-300" : "border-slate-200"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition"
                    >
                      <span className="text-xs sm:text-sm font-bold text-navy-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-crimson-600 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-300 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
