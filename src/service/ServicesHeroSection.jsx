import React from "react";
import { ArrowRight } from "lucide-react";
import ProcessSection from "../home/ProcessSection";
import WhatWeDoSection from "../home/WhatWeDoSection";

export default function ServicesHeroSection() {
  return (
    <>
      <section className="w-full bg-white py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <span className="inline-block text-[12px] md:text-sm font-medium tracking-[0.24em] uppercase text-slate-500">
                Services
              </span>

              <h1 className="mt-4 text-[36px] md:text-[42px] leading-[1.05] tracking-[-0.03em] font-semibold text-slate-900">
                Business support, document processing & third-party verification
              </h1>

              <p className="mt-5 max-w-xl text-[16px] md:text-[18px] leading-8 text-slate-600">
                We help professional services firms keep their document workflows
                organized, verified, compliant, and reliably dispatched.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                <button className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Side Clean Cards */}
            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Organized Processing
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Clear and structured document handling for smooth daily operations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Verification Support
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Trusted third-party verification to improve compliance and reduce workflow delays.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Reliable Dispatch
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Timely coordination and dependable dispatch support for critical business documents.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
<WhatWeDoSection    />
      {/* Next Section */}
      <ProcessSection />
    </>
  );
}