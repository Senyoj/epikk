"use client";
import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/data/navData";
import { NavLink } from "@/data/constants";

export default function Navbar(){
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      // Transition point at 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 border-gray-100 shadow-sm"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <Logo isScrolled={isScrolled} />
          <span
            className={`font-bold text-xl tracking-tighter transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            e<span className="font-light">PIKK</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:opacity-70 relative group ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-black" : "bg-white"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
            <span
              className={`w-full h-0.5 transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-2 bg-black"
                  : isScrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
            <span
              className={`w-full h-0.5 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-0 translate-x-2"
                  : isScrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
            <span
              className={`w-full h-0.5 transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-2 bg-black"
                  : isScrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Grows from top down */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-4 transform transition-transform duration-500 ease-out">
          {NAV_LINKS.map((link: NavLink, index: number) => (
            <a
              key={link.name}
              href={link.href}
              style={
                { transitionDelay: `${index * 50}ms` } as React.CSSProperties
              }
              className={`text-black text-lg font-medium hover:text-gray-600 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div
            className={`pt-2 transition-all duration-500 delay-300 ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <button className="w-full bg-black text-white py-4 rounded-xl font-semibold shadow-lg active:scale-95 transition-transform">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
