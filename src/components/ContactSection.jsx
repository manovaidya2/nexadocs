import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#f3f6fb]">
      {/* Top Header Area */}
      <div className="border-b border-[#d9dfe8]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-10 md:py-12">
          <span className="block text-[#17345f] uppercase tracking-[0.28em] text-[12px] font-medium mb-3">
            Contact
          </span>

          <h1 className="text-[42px] md:text-[56px] leading-none tracking-[-0.03em] font-semibold text-[#111827] mb-4">
            Get in touch
          </h1>

          <p className="text-[17px] md:text-[18px] text-[#64748b] max-w-3xl">
            Share a few details about your document workflow and our team will
            respond shortly.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-12 md:py-14">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-20 items-start">
          
          {/* Left Info */}
          <div className="space-y-7 pl-4 md:pl-6">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-[6px] bg-[#e8eef8] text-[#17345f] flex items-center justify-center shrink-0">
                <Phone size={16} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748b] mb-1">
                  Phone
                </p>
                <p className="text-[16px] text-[#0f172a]">+91 88602 47763</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-[6px] bg-[#e8eef8] text-[#17345f] flex items-center justify-center shrink-0">
                <Mail size={16} strokeWidth={2} />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748b] mb-1">
                  Email
                </p>
                <p className="text-[16px] text-[#0f172a]">
                  contact@nexadocsservices.com
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-[6px] bg-[#e8eef8] text-[#17345f] flex items-center justify-center shrink-0">
                <MapPin size={16} strokeWidth={2} />
              </div>
            <div>
  <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748b] mb-1">
    Office
  </p>

  <p className="text-[16px] text-[#0f172a] leading-7">
    Nexa Docs Services,
   
    B-62, Basement Amar Colony
    <br />
    Delhi - 110025
  </p>
</div>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex justify-end">
            <div className="border border-[#d9dfe8] rounded-[8px] bg-white p-5 md:p-6 max-w-[480px] w-full">
              <form className="space-y-4">
                <div>
                  <label className="block text-[13px] text-[#0f172a] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-[38px] border border-[#d9dfe8] rounded-[6px] px-3 text-[14px] outline-none focus:border-[#17345f]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] text-[#0f172a] mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="w-full h-[38px] border border-[#d9dfe8] rounded-[6px] px-3 text-[14px] outline-none focus:border-[#17345f]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] text-[#0f172a] mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border border-[#d9dfe8] rounded-[6px] px-3 py-2 text-[14px] outline-none focus:border-[#17345f] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#17345f] hover:bg-[#122b4f] text-white text-[13px] font-medium px-4 py-2.5 rounded-[6px] transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}