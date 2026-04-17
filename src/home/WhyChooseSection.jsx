import React from "react";
import { Check } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    "Structured workflow systems",
    "Reliable and timely dispatch",
    "Secure document handling",
    "Efficient backend operations",
    "Accurate and reliable verification processes",
    "Scalable support for growing businesses",
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-12 md:py-16">
      <div className="max-w-[1500px] mx-auto px-6 md:px-8 lg:px-10">
        
        {/* Heading */}
        <div className="mb-10">
          <span className="block text-[#17345f] uppercase tracking-[0.26em] text-[13px] font-medium mb-4">
            Why Us
          </span>

          <h2 className="text-[32px] md:text-[40px] leading-none tracking-[-0.03em] font-semibold text-[#0f172a]">
            Why choose Nexa Docs
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#d9dfe8] rounded-[10px] min-h-[66px] flex items-center px-5 md:px-6"
            >
              <div className="w-6 h-6 rounded-full bg-[#eef2f6] flex items-center justify-center mr-4 shrink-0">
                <Check size={15} strokeWidth={2.5} className="text-[#17345f]" />
              </div>

              <p className="text-[16px] md:text-[17px] text-[#0f172a]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}