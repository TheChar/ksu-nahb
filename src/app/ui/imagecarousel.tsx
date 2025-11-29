'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import type { TouchEvent } from "react";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

export default function ImageCarousel({ images, interval = 3000 }: ImageCarouselProps) {
  const [current, setCurrent] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  /* AUTOPLAY */
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(timer);
  }, [current, interval]);

  /* SWIPE HANDLERS */
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) next(); // swipe left
    if (diff < -50) prev(); // swipe right

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto select-none">
      {/* MAIN SLIDE */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-lg h-64 sm:h-[70vh]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[current]}
          alt="carousel image"
          fill
          className="object-cover transition-all duration-500"
        />

        {/* CONTROLS */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 backdrop-blur p-2 rounded-full shadow hover:bg-white hover:cursor-pointer transition"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 backdrop-blur p-2 rounded-full shadow hover:bg-white hover:cursor-pointer transition"
        >
          ▶
        </button>

        {/* DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full transition cursor-pointer ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* THUMBNAILS */
      <div className="mt-4 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
        <div className="flex gap-3 px-2 py-1 w-max">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative h-20 w-20 min-w-20 rounded-lg overflow-hidden shadow cursor-pointer border-2 transition ${
                i === current ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => setCurrent(i)}
            >
              <Image src={img} alt="thumbnail" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
}
