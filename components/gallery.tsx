"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import galleryMenu from "@/data/galleryImages";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function OurGallery() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
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
    <section ref={containerRef}>
      <h3 className="text-center text-[1.5rem] font-bold mb-4">Our Gallery</h3>
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((cat) => {
          const active = cat === activeCategory;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[0.875rem] md:text-[1.25rem] capitalize cursor-pointer
              ${active ? "text-[#B70E10] font-semibold" : "text-black"}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div
        ref={gridRef}
        className="flex flex-wrap justify-center gap-4 max-w-[900px] mx-auto"
      >
        {filteredImages.map((item, index) => (
          <div
            key={index}
            className="relative w-[280px] h-[200px] md:h-[240px] lg:h-[260px]"
          >
            <Image
              src={item.image}
              alt={item.category}
              fill
              className="gallery-item relative w-full sm:w-[48%] lg:w-[31%] h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
