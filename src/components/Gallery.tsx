import { useState } from "react";
import ImageGallery from "react-image-gallery";
import type { GalleryItem } from "../data/galleries";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = ({ galleries }: { galleries: GalleryItem[] }) => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(
    null,
  );

  const formatImagesForGallery = (images: any[]) => {
    return images.map((img) => ({
      original: img.src,
      thumbnail: img.src,
      originalAlt: img.alt || "",
      thumbnailAlt: img.alt || "",
    }));
  };

  return (
    <section className="py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">Gallery</h2>
        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {galleries.map((gallery, index) => (
            <div
              key={index}
              onClick={() => setSelectedGallery(gallery)}
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={gallery.images[0].src}
                  alt={gallery.name}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="mb-2 text-xl font-bold">{gallery.name}</h3>
                  <p className="text-sm">{gallery.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedGallery && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            <button
              onClick={() => setSelectedGallery(null)}
              className="absolute right-4 top-4 z-50 p-4 text-white transition-colors hover:text-gray-300"
            >
              Close
            </button>
            <div className="w-full max-w-5xl">
              <ImageGallery
                items={formatImagesForGallery(selectedGallery.images)}
                showPlayButton={false}
                showFullscreenButton={true}
                showNav={true}
                showThumbnails={true}
                useBrowserFullscreen={true}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;