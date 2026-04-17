import React from "react";
import {
  FileText,
  ShieldCheck,
  Truck,
  Layers3,
} from "lucide-react";

export default function WhatWeDoSection() {
  const services = [
    {
      icon: <FileText size={22} strokeWidth={2} />,
      title: "Document Processing & Sorting",
      description:
        "Efficient handling, organizing, and preparation of documents for operational and dispatch purposes.",
    },
    {
      icon: <ShieldCheck size={22} strokeWidth={2} />,
      title: "Compliance Document Support",
      description:
        "Backend assistance for managing regulatory, tax, and corporate documentation workflows.",
    },
    {
      icon: <Layers3 size={22} strokeWidth={2} />,
      title: "Third-Party Verification Services",
      description:
        "Structured verification support including document checks, validation processes, and coordination with external entities.",
    },
    {
      icon: <Truck size={22} strokeWidth={2} />,
      title: "Secure Dispatch Coordination",
      description:
        "Managing courier and logistics partners for safe and timely document delivery.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-6 md:py-8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-8">
        <span className="text-[#17345f] uppercase tracking-[0.25em] text-[12px] font-medium">
            Services
          </span>
        {/* Heading */}
        <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.02em] text-[#0f172a] mb-8">
          What we do
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#d8dee8] rounded-[14px] px-6 py-6 min-h-[200px]"
            >
              {/* Icon */}
              <div className="w-[44px] h-[44px] rounded-[8px] bg-[#e8eef8] text-[#17345f] flex items-center justify-center mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0f172a] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-6 text-[#5f6f86]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}