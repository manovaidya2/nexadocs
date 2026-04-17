import React from "react";
import { ArrowRight } from "lucide-react";

export default function LedgerHeroSection() {
  return (
    <section className="w-full bg-[#f3f6fb]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="inline-block text-sm text-gray-600 border border-gray-300 rounded-full px-4 py-1.5 mb-6 bg-white/70">
              Business support · Document processing · Third-party verification
            </span>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[58px] leading-[1] font-semibold tracking-[-0.03em] text-[#111827]">
              Reliable Document
              <br />
              Processing &
              <br />
              Verification Solutions
            </h1>

            <p className="mt-8 text-[20px] leading-9 text-[#6b7280] max-w-lg">
              Providing business support through structured document processing,
              compliance handling, and third-party verification services.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-[#17345f] hover:bg-[#122b4f] text-white font-semibold px-6 py-4 rounded-xl transition">
                Contact Us
                <ArrowRight size={18} />
              </button>

              <button className="inline-flex items-center justify-center border border-gray-300 bg-white text-[#1f2937] font-medium px-6 py-4 rounded-xl hover:bg-gray-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration Box */}
          <div className="w-full">
            <div className="relative bg-[#eaf1fa] rounded-[32px] min-h-[420px] md:min-h-[460px] flex items-center justify-center overflow-hidden">
              
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 700 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="220"
                  y1="210"
                  x2="350"
                  y2="145"
                  stroke="#b9c6d8"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
                <line
                  x1="220"
                  y1="290"
                  x2="350"
                  y2="355"
                  stroke="#b9c6d8"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
                <line
                  x1="480"
                  y1="210"
                  x2="350"
                  y2="145"
                  stroke="#b9c6d8"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
                <line
                  x1="480"
                  y1="290"
                  x2="350"
                  y2="355"
                  stroke="#b9c6d8"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
              </svg>

              {/* Top Check Card */}
              <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-[18px] bg-[#17345f] flex items-center justify-center shadow-sm z-10">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12.5L10 17L19 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Left Document Card */}
              <div className="absolute left-[70px] md:left-[95px] top-1/2 -translate-y-1/2 w-[120px] h-[150px] bg-white rounded-2xl border border-gray-200 shadow-sm p-4 z-10">
                <div className="space-y-3">
                  <div className="h-2.5 bg-gray-300 rounded w-16"></div>
                  <div className="h-2.5 bg-gray-300 rounded w-14"></div>
                  <div className="h-2.5 bg-gray-300 rounded w-12"></div>
                </div>
                <div className="absolute bottom-5 left-4 w-9 h-5 bg-[#17345f] rounded-md"></div>
              </div>

              {/* Center Small Block */}
              <div className="absolute left-1/2 top-[62%] -translate-x-1/2 w-[68px] h-[68px] bg-white rounded-2xl border border-gray-200 shadow-sm z-10 flex items-center justify-center">
                <div className="w-5 h-4 bg-[#17345f] rounded-sm"></div>
              </div>

              {/* Right Document Card */}
              <div className="absolute right-[70px] md:right-[95px] top-1/2 -translate-y-1/2 w-[120px] h-[150px] bg-white rounded-2xl border border-gray-200 shadow-sm p-4 z-10">
                <div className="space-y-3">
                  <div className="h-2.5 bg-gray-300 rounded w-16"></div>
                  <div className="h-2.5 bg-gray-300 rounded w-14"></div>
                </div>
                <div className="absolute bottom-5 left-4 w-20 h-5 bg-[#dbe6f4] border border-[#b8c7dc] rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}