import React from "react";
import {
  Inbox,
  ClipboardCheck,
  PackageCheck,
  Send,
} from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      icon: <Inbox size={22} strokeWidth={2} />,
      title: "Document Collection",
      description: "Intake from clients and partners.",
    },
    {
      number: "2",
      icon: <ClipboardCheck size={22} strokeWidth={2} />,
      title: "Verification & Sorting",
      description: "Quality checks and categorization.",
    },
    {
      number: "3",
      icon: <PackageCheck size={22} strokeWidth={2} />,
      title: "Processing & Packaging",
      description: "Preparation for secure dispatch.",
    },
    {
      number: "4",
      icon: <Send size={22} strokeWidth={2} />,
      title: "Dispatch via Courier Network",
      description: "Tracked delivery to destination.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f6fb] py-10 md:py-14">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-10">
          <span className="block text-[#17345f] uppercase tracking-[0.25em] text-[12px] font-medium mb-3">
            Process
          </span>

          <h2 className="text-[32px] md:text-[40px] font-semibold tracking-[-0.02em] text-[#0f172a]">
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* Top Row */}
              <div className="flex items-center mb-5">
                
                {/* Number */}
                <div className="w-[42px] h-[42px] rounded-full bg-[#17345f] text-white flex items-center justify-center text-[14px] font-semibold">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="ml-3 text-[#6b7280]">
                  {step.icon}
                </div>

                {/* Line */}
                <div className="h-px bg-[#d7dde7] flex-1 ml-4"></div>
              </div>

              {/* Title */}
              <h3 className="text-[18px] md:text-[19px] font-semibold text-[#1b2430] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] md:text-[15px] leading-6 text-[#667085]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}