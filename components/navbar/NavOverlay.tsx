import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { NavItem } from "../../data/navData";
import MainNavLinks from "./MainNavLinks";
import SubNavPanel from "./SubNavPanel";
import NavLinkIndicator from "./NavLinkIndicator";
import { overlayPushVariants } from "./variants";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  closeOverlay: () => void;
  navItems: NavItem[];
  handleItemClick: (index: number) => void;
  activeIndex: number | null;
  itemRefs: React.MutableRefObject<{ [key: number]: HTMLDivElement | null }>;
}

export default function NavOverlay({
  isOpen,
  navItems,
  handleItemClick,
  activeIndex,
  itemRefs,
}: Props) {
  const [mobileAccordion, setMobileAccordion] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          id="nav-overlay"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayPushVariants as Variants}
          className={`top-0 left-0 h-screen z-40 bg-white text-black  md:w-[1440px] w-[92vw] fixed md:relative overflow-y-auto flex-col flex md:flex-row md:overflow-y-visible transition-all duration-100`}
          style={{
            position: isMobile ? "fixed" : "fixed",
            width: isMobile ? "100%" : "100vw",
            maxWidth: "100vw",
          }}
        >
          <div className="w-full min-h-screen bg-black/40 absolute inset-0 -z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full -z-20">
            <Image
              src="/bgipik.svg"
              alt="Background"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <MainNavLinks
            navItems={navItems}
            onItemClick={handleItemClick}
            activeIndex={activeIndex}
            itemRefs={itemRefs}
            isMobile={isMobile}
            mobileAccordion={mobileAccordion}
            onAccordionClick={(idx) =>
              setMobileAccordion(mobileAccordion === idx ? null : idx)
            }
          />
          {!isMobile && (
            <>
              <div className="relative w-6/12 flex justify-center">
                <NavLinkIndicator
                  activeIndex={activeIndex}
                  itemRefs={itemRefs}
                />
              </div>
              <SubNavPanel
                navItem={
                  activeIndex !== null ? navItems[activeIndex] : undefined
                }
              />
            </>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
