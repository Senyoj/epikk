import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "../../data/navData";
import Link from "next/link";

interface Props {
  navItems: NavItem[];
  onItemClick: (index: number) => void;
  activeIndex: number | null;
  itemRefs: React.MutableRefObject<{ [key: number]: HTMLDivElement | null }>;
  isMobile: boolean;
  mobileAccordion: number | null;
  onAccordionClick: (idx: number) => void;
}

export default function MainNavLinks({
  navItems,
  onItemClick,
  activeIndex,
  itemRefs,
  isMobile,
  mobileAccordion,
  onAccordionClick,
}: Props) {
  return (
    <div className="flex flex-col gap-6 p-20 md:w-1/3 w-full">
      {navItems.map((item, index) => (
        <div key={index} className="w-full">
          <div
            ref={(el) => { itemRefs.current[index] = el; }}
            className={`cursor-pointer text-3xl font-extralight  hover:text-blue-200 transition flex items-center justify-between ${
              activeIndex === index ? "font- text-blue-200" : "text-white"
            }`}
            onClick={() => {
              if (item.subLinks) {
                if (isMobile) {
                  onAccordionClick(index);
                } else {
                  onItemClick(index);
                }
              } else if (item.href) {
                window.location.href = item.href;
              }
            }}
          >
            {item.label}
            {isMobile && item.subLinks && (
              <span className="ml-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={`transform transition-transform duration-300 ${
                    mobileAccordion === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
          {isMobile && item.subLinks && (
            <AnimatePresence initial={false}>
              {mobileAccordion === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-4"
                >
                  {item.subLinks.map((subItem, subIdx) => (
                    <Link
                      href={subItem.href}
                      key={subIdx}
                      className="block py-1 text-lg text-gray-300 hover:text-white transition"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  );
}