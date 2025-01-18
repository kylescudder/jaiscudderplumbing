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
}

export const services: Service[] = [
  {
    title: "Property Maintenance",
    image: maintenanceImage,
  },
  {
    title: "Bathrooms",
    image: bathroomImage,
  },
  {
    title: "Kitchens",
    image: kitchensImage,
  },
  {
    title: "Plumbing",
    image: plumbingImage,
  },
  {
    title: "Tiling",
    image: tilingImage,
  },
  {
    title: "Decorating",
    image: decoratingImage,
  },
];
