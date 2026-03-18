"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import galleryMenu from "@/data/galleryImages";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function OurGallery() {
  const containerRef = useRef(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = [
    "all",
    ...new Set(galleryMenu.map((item) => item.category)),
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryMenu
      : galleryMenu.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.children;

    gsap.fromTo(
      items,
      { opacity: 0, scale: 0.95, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: "power2.out",
      },
    );
  }, [activeCategory]);
  return (
    <section ref={containerRef} className="px-4 sm:px-6 md:px-8 lg:px-12">
      <h3 className="text-center text-xl sm:text-2xl md:text-[1.5rem] font-bold mb-4 sm:mb-6">
        Our Gallery
      </h3>

      <div className="flex flex-wrap gap-1 sm:gap-1 md:gap-2 justify-center mb-8 sm:mb-10 md:mb-12">
        {categories.map((cat) => {
          const active = cat === activeCategory;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm sm:text-base md:text-lg lg:text-[1.25rem] capitalize cursor-pointer px-3 py-1 sm:px-4 sm:py-2 transition-colors
          ${active ? "text-[#B70E10] font-semibold" : "text-black hover:text-[#B70E10]/70"}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-[900px] mx-auto"
      >
        {filteredImages.map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl"
          >
            <Image
              src={item.image}
              alt={item.category}
              fill
              className="gallery-item object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
