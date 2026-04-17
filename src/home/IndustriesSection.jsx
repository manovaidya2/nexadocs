import React from "react";

export default function IndustriesSection() {
  const industries = [
    "Accounting & Tax Firms",
    "Corporate Service Providers",
    "Consultants & Agencies",
    "Legal & Compliance Teams",
    "Verification & Processing Agencies",
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-10 md:py-12">
      <div className="max-w-[1300px] mx-auto px-5 md:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-8">
          <span className="block text-[#17345f] uppercase tracking-[0.25em] text-[12px] font-medium mb-3">
            Industries
          </span>

          <h2 className="text-[28px] md:text-[36px] font-semibold tracking-[-0.02em] text-[#0f172a]">
            Who we support
          </h2>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#d9dfe8] rounded-[8px] h-[60px] flex items-center px-4"
            >
              <p className="text-[15px] md:text-[16px] text-[#0f172a]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}