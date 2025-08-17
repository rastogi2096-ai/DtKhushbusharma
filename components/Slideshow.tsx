"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/hero/img1.jpg",
  "/hero/img2.jpg",
  // Add more images as needed
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[360px] sm:h-[460px] lg:h-[520px]">
      <Image
        src={images[current]}
        alt={`Slideshow image ${current + 1}`}
        fill
        className="object-cover rounded-3xl shadow-soft animate-float transition-all duration-700"
      />
    </div>
  );
}
