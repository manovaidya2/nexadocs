import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full bg-[#f3f6fb] py-14 md:py-20">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-[28px] md:text-[36px] font-semibold tracking-[-0.02em] text-[#0f172a] mb-4">
          Looking for a reliable backend partner?
        </h2>

        {/* Subtext */}
        <p className="text-[16px] md:text-[18px] text-[#64748b] mb-8">
          Get in touch to discuss your document workflow requirements.
        </p>

        {/* Button */}
        <button className="inline-flex items-center gap-2 bg-[#17345f] hover:bg-[#122b4f] text-white px-6 py-3 rounded-lg text-[15px] font-medium transition">
          Contact Us
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}