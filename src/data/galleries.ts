import { type ImageMetadata } from 'astro';

export interface GalleryItem {
  name: string;
  description: string;
  images: ImageMetadata[];
}

// Example of how you might import and structure the data
import gallery1img1 from '../assets/images/gallery/gallery1/Pic1.jpg';
import gallery1img2 from '../assets/images/gallery/gallery1/Pic2.jpg';
import gallery1img3 from '../assets/images/gallery/gallery1/Pic3.jpg';
import gallery1img4 from '../assets/images/gallery/gallery1/Pic4.jpg';
import gallery1img5 from '../assets/images/gallery/gallery1/Pic5.jpg';
import gallery1img6 from '../assets/images/gallery/gallery1/Pic6.jpg';
import gallery2img1 from '../assets/images/gallery/gallery2/Pic1.jpg';
import gallery2img2 from '../assets/images/gallery/gallery2/Pic2.jpg';
import gallery2img3 from '../assets/images/gallery/gallery2/Pic3.jpg';
import gallery2img4 from '../assets/images/gallery/gallery2/Pic4.jpg';
import gallery2img5 from '../assets/images/gallery/gallery2/Pic5.jpg';
import gallery2img6 from '../assets/images/gallery/gallery2/Pic6.jpg';

export const galleries: GalleryItem[] = [
  {
    name: "Bathroom 1",
    description: "A stunning bathroom",
    images: [gallery1img1, gallery1img2, gallery1img3, gallery1img4, gallery1img5, gallery1img6]
  },
  {
    name: "Bathroom 2",
    description: "A stunning bathroom",
    images: [gallery2img1, gallery2img2, gallery2img3, gallery2img4, gallery2img5, gallery2img6]
  },
];
