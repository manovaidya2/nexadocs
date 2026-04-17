import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-14 md:py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-6 lg:px-8">
        
        {/* Top */}
        <div className="mb-10">
          <span className="text-[#17345f] uppercase tracking-[0.25em] text-[12px] font-medium">
            About
          </span>

          <h2 className="mt-3 text-[28px] md:text-[36px] font-semibold text-[#0f172a]">
            About Nexa Docs Services
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Left Highlight Block */}
          <div className="border-l-4 border-[#17345f] pl-5">
            <p className="text-[16px] md:text-[17px] leading-7 text-[#475569]">
              Nexa Docs Services provides structured backend support for
              businesses handling high volumes of documentation and
              verification processes.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-5">
            <p className="text-[15px] md:text-[16px] leading-7 text-[#64748b]">
              We specialize in document processing, sorting, third-party
              verification, and secure dispatch coordination to ensure smooth
              operations.
            </p>

            <p className="text-[15px] md:text-[16px] leading-7 text-[#64748b]">
              Our focus is to streamline backend workflows while maintaining
              accuracy, efficiency, and reliability in document handling.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-10 border-t border-[#d9dfe8]"></div>

        {/* Bottom Tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="text-[13px] px-4 py-1.5 bg-white border border-[#d9dfe8] rounded-full text-[#17345f]">
            Document Processing
          </span>
          <span className="text-[13px] px-4 py-1.5 bg-white border border-[#d9dfe8] rounded-full text-[#17345f]">
            Verification
          </span>
          <span className="text-[13px] px-4 py-1.5 bg-white border border-[#d9dfe8] rounded-full text-[#17345f]">
            Compliance Support
          </span>
          <span className="text-[13px] px-4 py-1.5 bg-white border border-[#d9dfe8] rounded-full text-[#17345f]">
            Secure Dispatch
          </span>
        </div>
      </div>
    </section>
  );
}