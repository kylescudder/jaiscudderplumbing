import bathroomImage from "../assets/images/services/bathrooms.jpg";
import decoratingImage from "../assets/images/services/decorating.jpg";
import kitchensImage from "../assets/images/services/kitchens.jpg";
import maintenanceImage from "../assets/images/services/maintenance.jpg";
import plumbingImage from "../assets/images/services/plumbing.jpg";
import tilingImage from "../assets/images/services/tiling.jpg";
import { type ImageMetadata } from "astro";

export interface Service {
  title: string;
  image: ImageMetadata;
  description: string;
  details: string[];
}

export const services: Service[] = [
  {
    title: "Tiling",
    image: tilingImage,
    description: "Expert home plumbing solutions",
    details: ["Leak detection", "Pipe repairs", "Fixture installations"],
  },
  {
    title: "Plumbing",
    image: plumbingImage,
    description: "Professional business plumbing services",
    details: [
      "System inspections",
      "Large-scale repairs",
      "Maintenance contracts",
    ],
  },
  {
    title: "Property & Decorating",
    image: decoratingImage,
    description: "Comprehensive property care",
    details: ["General repairs", "Painting", "Handyman services"],
  },
  {
    title: "Bathroom",
    image: bathroomImage,
    description: "Detailed property repair solutions",
    details: [
      "Structural repairs",
      "Renovation support",
      "Quality assessments",
    ],
  },
  {
    title: "Kitchens",
    image: kitchensImage,
    description: "24/7 urgent plumbing assistance",
    details: [
      "Rapid response",
      "Immediate interventions",
      "Disaster mitigation",
    ],
  },
  {
    title: "Propert Maintenance",
    image: maintenanceImage,
    description: "Specialized industrial plumbing",
    details: [
      "Complex system support",
      "Heavy-duty repairs",
      "Technical diagnostics",
    ],
  },
];
