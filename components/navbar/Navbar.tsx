"use client";
import React, { useState, useRef } from "react";
import Logo from "./Logo";
import Burger from "./Burger";
import NavOverlay from "./NavOverlay";
import { NAV_ITEMS,  } from "../../data/navData";

const Navbar = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState<number | null>(null);
  const navItemRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleMainNavClick = (index: number) => {
    setActiveNavIndex(activeNavIndex === index ? null : index);
  };

  return (
    <nav className="bg-white w-full h-full flex flex-col md:flex-col items-center md:justify-between p-4 md:p-0 relative overflow-hidden border border-r border-gray-200">
      <div className="hidden md:flex flex-col items-center gap-20 min-h-screen w-24 pt-2">
        <Burger onClick={() => setOverlayOpen(!isOverlayOpen)} />
        <div className="transform -rotate-90 scale-120">
          <Logo width={200} height={200} className="scale-200 h-48" />
        </div>
      </div>
      <div className="flex md:hidden justify-between items-center w-full relative z-50">
        <Burger onClick={() => setOverlayOpen(!isOverlayOpen)} />
        <div className="shrink-0">
          <Logo width={120} height={120} />
        </div>
      </div>
      <NavOverlay
        isOpen={isOverlayOpen}
        closeOverlay={() => setOverlayOpen(false)}
        navItems={NAV_ITEMS}
        handleItemClick={handleMainNavClick}
        activeIndex={activeNavIndex}
        itemRefs={navItemRefs}
      />
    </nav>
  );
};

export default Navbar;
