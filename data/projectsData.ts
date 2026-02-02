// Put this in /data/projectsData.ts
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string[];
  heroImage: string;
  keyPoints: { major: string; detail: string }[];
  gallery: string[];
  additionalDescription?: string[];
}

export const projectsData: Project[] = [
  {
    id: "image_buildingshotel",
    title: "L'Oscar Hotel",
    subtitle: "Bloomsbury, London",
    heroImage: "/image_buildings1.jpg",
    description: [
      "A former Baptist church converted into a highly luxurious boutique hotel. Refurbishment included a vertical extension and chapel renovation.",
      "The hotel offers 41 suites, a restaurant, banqueting suite, and library. A spectacular chandelier rises through the original staircase.",
    ],
    keyPoints: [
      { major: "Heritage", detail: "Luxurious boutique hotel" },
      { major: "Luxury", detail: "Converted from a former Baptist church" },
      { major: "Hotels", detail: "Interior design by Jacques Garcia" },
      { major: "Full Fit-Out", detail: "41 luxury suites" },
    ],
    gallery: [
      "/image_buildings1.jpg",
      "/image_buildings2.jpg",
      "/image_buildings3.jpg",
    ],
    additionalDescription: [
      "The project took place over two phases: structural construction and hotel fit out.",
      "Fixtures include dark wood panelling, sumptuous fabrics, and a chandelier decorated with amber birds.",
    ],
  },
  {
    id: "city-healthcare-clinic",
    title: "City Healthcare Clinic",
    subtitle: "City Centre",
    heroImage: "/image_buildings1.jpg",
    description: [
      "Repurposed retail and office space for a 50-room outpatient clinic over two floors.",
    ],
    keyPoints: [
      { major: "Healthcare", detail: "Private sector healthcare facility" },
      { major: "Full Fit-Out", detail: "50-room outpatient clinic" },
    ],
    gallery: ["/clinic-1.jpg", "/clinic-2.jpg"],
  },
  // Add more projects...
];
