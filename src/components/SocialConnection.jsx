import React from "react";
import { MessageSquare, Share2 } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";
import { BOOKING_OFFICE } from "../data/landingData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import Spotlight from "./Spotlight";

export default function SocialConnection() {
  const channels = [
    {
      href: "https://instagram.com",
      label: "Instagram",
      handle: "@VTaxiOfficial",
      Icon: InstagramIcon,
      tone: "bg-pink-50 text-pink-600",
      border: "hover:border-pink-300",
    },
    {
      href: "https://facebook.com",
      label: "Facebook",
      handle: "/VTaxiTamilNadu",
      Icon: FacebookIcon,
      tone: "bg-blue-50 text-blue-600",
      border: "hover:border-blue-300",
    },
    {
      href: `https://wa.me/${BOOKING_OFFICE.whatsapp}?text=${encodeURIComponent(
        "Hello V TAXI, I would like to enquire about your upcoming taxi services."
      )}`,
      label: "WhatsApp",
      handle: "Direct Office",
      Icon: MessageSquare,
      tone: "bg-emerald-50 text-emerald-600",
      border: "hover:border-emerald-300",
    },
    {
      href: null,
      label: "YouTube",
      handle: "Coming Soon",
      Icon: YoutubeIcon,
      tone: "bg-red-50 text-red-600",
      border: "",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-12">
        <SectionHeader
          eyebrow="Community Connection"
          icon={Share2}
          index="10"
          title="Follow the"
          accent="V journey"
          description="Follow V TAXI for service updates, new destinations, travel ideas, launch offers and official announcements."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
          {channels.map(({ href, label, handle, Icon, tone, border }, i) => {
            const inner = (
              <>
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${tone} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-navy-900">{label}</span>
                <span
                  className={`text-[10px] ${
                    href
                      ? "text-slate-400"
                      : "text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded"
                  }`}
                >
                  {handle}
                </span>
              </>
            );

            return (
              <Reveal key={label} delay={i * 70} variant="up" y={18} className="h-full">
                {href ? (
                  <Spotlight
                    as="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`lift group p-5 bg-white rounded-2xl border border-slate-200 shadow-card-soft hover:shadow-card-hover ${border} flex flex-col items-center gap-2.5 h-full`}
                  >
                    {inner}
                  </Spotlight>
                ) : (
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-card-soft opacity-80 flex flex-col items-center gap-2.5 h-full">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
