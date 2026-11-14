
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageLightboxProps {
  images: GalleryImage[];
  index: number;
  className?: string;
  loading?: "lazy" | "eager";
  draggable?: boolean;
}

export function ImageLightbox({
  images,
  index,
  className = "",
  loading = "lazy",
  draggable = false,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(index);

  const currentImage = images[activeIndex];

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Keyboard navigation and body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, images.length]);

  useEffect(() => {
    setActiveIndex(index);
  }, [index]);

  if (!images.length || !currentImage) return null;

  return (
    <>
      {/* Thumbnail inside the original card */}
      <button
        type="button"
        onClick={() => {
          setActiveIndex(index);
          setIsOpen(true);
        }}
        className="group/lightbox relative block w-full cursor-zoom-in overflow-hidden text-left"
        aria-label={`View larger image: ${images[index]?.alt}`}
      >
        <img
          src={images[index]?.src}
          alt={images[index]?.alt}
          loading={loading}
          decoding="async"
          draggable={draggable}
          className={className}
        />

        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/lightbox:bg-black/25 group-hover/lightbox:opacity-100">
          <span className="flex size-11 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white shadow-xl backdrop-blur-sm">
            <ZoomIn className="size-5" />
          </span>
        </span>
      </button>

      {/* FULLSCREEN LIGHTBOX - RENDERED DIRECTLY IN BODY */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[999999] flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-black/95 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-[1000001] flex size-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:rotate-90 hover:bg-white/20 sm:right-8 sm:top-8"
              aria-label="Close gallery"
            >
              <X className="size-6" />
            </button>

            {/* Image counter */}
            <div className="absolute left-1/2 top-6 z-[1000001] -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-white backdrop-blur-md">
              {activeIndex + 1} / {images.length}
            </div>

            {/* Previous button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previousImage();
                }}
                className="absolute left-3 top-1/2 z-[1000001] flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25 sm:left-8 sm:size-14"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-7" />
              </button>
            )}

            {/* Full image */}
            <div
              className="flex h-full w-full items-center justify-center px-14 py-20 sm:px-24 sm:py-24"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                draggable={false}
                className="max-h-full max-w-full select-none object-contain drop-shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              />
            </div>

            {/* Next button */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 z-[1000001] flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25 sm:right-8 sm:size-14"
                aria-label="Next image"
              >
                <ChevronRight className="size-7" />
              </button>
            )}

            {/* Caption */}
            <div className="absolute bottom-5 left-1/2 z-[1000001] max-w-[80%] -translate-x-1/2 truncate rounded-full border border-white/10 bg-white/10 px-5 py-2 text-center text-xs text-white/80 backdrop-blur-md">
              {currentImage.alt}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
