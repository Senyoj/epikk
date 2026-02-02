export interface NavItem {
  label: string;
  href?: string;
  subLinks?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Projects",

    subLinks: [
      { label: "Design Projects", href: "/projects/designs" },
      { label: "Engineering", href: "/projects/engineering" },
      { label: "Engineering Desings", href: "/projects/all" },
    ],
  },

  {
    label: "Key Sectors",
    subLinks: [
      { label: "3D Modelling", href: "/3D-modelling" },
      { label: "Embeded Systems", href: "/embeded-systems" },
      { label: "IoT", href: "/iot" },
      { label: "Robotics", href: "/robotics" },
      { label: "Machine Learning and AI", href: "/ml-ai" },
      { label: "Software Engineering", href: "/sofware-engineering" },
    ],
  },
  {
    label: "Services",
    subLinks: [
      { label: "3D Modelling ", href: "/services/modelling" },
      { label: "Robotics Solutions", href: "/services/robotics" },
      { label: "AI & ML Solutions", href: "/services/ai-ml" },
      { label: "Mobile App Development", href: "/services/mobile-app-dev" },
      { label: "Web Development", href: "/services/web-dev" },
      { label: "UI/UX Design", href: "/services/uiux-design" },
      { label: "Motion Desing", href: "/services/motion-design" },
    ],
  },
  {
    label: "Our Company",
    href: "/our-company",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];
