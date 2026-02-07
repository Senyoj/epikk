"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/data/navData";
import { NavLink } from "@/data/constants";

const NAVBAR_OFFSET = 96;

interface NavbarProps {
  theme?: "dark" | "light";
}

export default function Navbar({ theme = "dark" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Choose logo based on theme and scroll state
  const logoSrc =
    theme === "dark"
      ? isScrolled
        ? "/logo-black.png"
        : "/logo-white.png"
      : isScrolled
        ? "/logo-white.png"
        : "/logo-black.png";

  const textColor =
    theme === "dark"
      ? isScrolled
        ? "text-black"
        : "text-white"
      : isScrolled
        ? "text-white"
        : "text-black";
  const hoverUnderlineColor =
    theme === "dark"
      ? isScrolled
        ? "bg-black"
        : "bg-white"
      : isScrolled
        ? "bg-white"
        : "bg-black";
  const ctaBtnClasses =
    theme === "dark"
      ? isScrolled
        ? "bg-black text-white hover:bg-gray-800"
        : "bg-white text-black hover:bg-gray-200"
      : isScrolled
        ? "bg-white text-black hover:bg-gray-200"
        : "bg-black text-white hover:bg-gray-800";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 border-gray-100 shadow-sm"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src={logoSrc}
            alt="ePIKK logo"
            width={60}
            height={60}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium relative transition-opacity hover:opacity-70 ${textColor}`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all hover:w-full ${hoverUnderlineColor}`}
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${ctaBtnClasses}`}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full transition-all ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-2 bg-black"
                  : isScrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-full transition-all ${
                isMobileMenuOpen
                  ? "opacity-0"
                  : isScrolled
                    ? "bg-black"
                    : "bg-white"
              }`}
            />
            <span
              className={`h-0.5 w-full transition-all ${
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-5">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-black hover:text-gray-600"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-4 w-full bg-black text-white py-4 rounded-xl font-semibold">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}
