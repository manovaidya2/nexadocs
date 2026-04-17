import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/1 (1).png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-[74px] md:h-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0">
  <img
    src={logo}
    alt="LedgerLink Logo"
    className="h-15 w-auto object-contain"
  />
  

</a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-gray-600 font-medium">
            <a href="/" className="hover:text-black transition">
              Home
            </a>
            <a href="/services" className="hover:text-black transition">
              Services
            </a>
            <a href="/contact" className="hover:text-black transition">
              Contact
            </a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="bg-[#17345f] hover:bg-[#122b4f] text-white px-5 py-2.5 rounded-lg font-medium transition"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[82%] max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-[74px] border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#17345f] text-white flex items-center justify-center rounded-lg font-semibold text-base">
              L
            </div>
            <span className="text-base font-semibold text-gray-800">
              LedgerLink
            </span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-5 py-6 flex flex-col h-[calc(100%-74px)]">
          <nav className="flex flex-col gap-1 text-gray-700 font-medium">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-gray-50 transition"
            >
              Home
            </a>
            <a
              href="/services"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-gray-50 transition"
            >
              Services
            </a>
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-xl hover:bg-gray-50 transition"
            >
              Contact
            </a>
          </nav>

          <div className="mt-auto pt-6">
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center bg-[#17345f] hover:bg-[#122b4f] text-white px-5 py-3 rounded-xl font-medium transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
}