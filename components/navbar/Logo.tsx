import React from "react";

/**
 * Props for the Logo component
 */
interface LogoProps {
  isScrolled: boolean;
}

/**
 * A type-safe SVG Logo component
 */
export const Logo: React.FC<LogoProps> = ({ isScrolled }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition-colors duration-300"
    role="img"
    aria-label="Company Logo"
  >
    <rect
      width="40"
      height="40"
      rx="8"
      fill={isScrolled ? "#000000" : "#FFFFFF"}
    />
    <path
      d="M10 20L20 10L30 20L20 30L10 20Z"
      fill={isScrolled ? "#FFFFFF" : "#000000"}
    />
  </svg>
);
