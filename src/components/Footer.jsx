import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/1 (1).png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f3f6fb] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Nexa Docs Services Logo"
                className="h-12 w-auto object-contain"
              />
             
            </div>

            <p className="text-[15px] text-[#64748b] leading-7 max-w-sm">
              Backend document processing, verification, and business support
              services.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h4 className="text-[16px] font-semibold text-[#0f172a] mb-4">
              Navigate
            </h4>

            <div className="flex flex-col gap-2 text-[15px] text-[#64748b]">
              <Link to="/" className="hover:text-[#0f172a] transition">
                Home
              </Link>
              <Link to="/services" className="hover:text-[#0f172a] transition">
                Services
              </Link>
              <Link to="/contact" className="hover:text-[#0f172a] transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-[16px] font-semibold text-[#0f172a] mb-4">
              Contact
            </h4>

            <div className="text-[15px] text-[#64748b] space-y-2">
              <p>contact@nexadocsservices.com</p>
              <p>+91 00000 00000</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d9dfe8] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-[14px] text-[#64748b] text-center md:text-left">
            © 2026 Nexa Docs Services. All rights reserved.
          </p>

          <p className="text-[14px] text-[#64748b] text-center md:text-right">
            Document processing · Verification · Business support
          </p>
        </div>
      </div>
    </footer>
  );
}