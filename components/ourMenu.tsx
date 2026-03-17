"use client";

import { CurrencyNgn } from "@phosphor-icons/react";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface foodType {
  image: string;
  name: string;
  price: string;
}

const menuItems: foodType[] = [
  {
    image: "/hero-image.png",
    name: "Burger",
    price: "1000",
  },

  {
    image: "/pizzaBg.png",
    name: "Pizza",
    price: "2500",
  },

  {
    image: "/xShawarma 2.png",
    name: "Shawarma",
    price: "3000",
  },

  {
    image: "/plainBgChips.png",
    name: "Chips & Fries",
    price: "1500",
  },
];

export default function OurMenu() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    const section = sectionRef.current;

    if (!cards.length || !section) return;

    // initial state
    gsap.set(cards, {
      opacity: 0,
      scale: 0.85,
      rotationY: -45,
      x: -100,
      y: 80,
      z: -200,
      transformOrigin: "center center",
    });

    // Main reveal timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        end: "top 25%",
        scrub: 2,
        anticipatePin: 1,
      },
    });

    // Layered reveal with depth
    tl.to(cards, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      x: 0,
      y: 0,
      z: 0,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "power2.out",
      },
      duration: 1.2,
      ease: "power3.out",
    }).to(
      cards,
      {
        y: -8,
        duration: 0.4,
        ease: "sine.out",
      },
      "-=0.2",
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="menu-section mb-20">
      <div className="text-center mb-8 px-4">
        <div className="text-center text-[1.125rem] md:text-[1.5rem] font-bold">
          Our Menu
        </div>
        <h2 className="text-[1.5rem] md:text-[3rem] font-semibold">
          Savour the Journey, Enjoy the Delight
        </h2>
      </div>

      <div
        ref={sectionRef}
        className="w-full flex items-center justify-center px-4 sm:px-6 md:px-12 mb-12 overflow-x-auto overflow-y-visible"
        style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center gap-0 min-w-max">
          {menuItems.map((item, index) => (
            <div
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              key={index}
              className="menu-card bg-[#fff] hover:bg-[#b70e10] hover:text-[#f3f3f3] transition-colors duration-600 flex flex-col w-48 sm:w-52 md:w-60 border-[1px] border-[#EEE9E6] rounded-[0px]"
            >
              <div className="relative w-full h-40 sm:h-44 md:h-[220px]">
                <Image
                  src={item.image}
                  fill
                  alt={item.name}
                  className="object-cover"
                />
              </div>
              <div className="px-2 py-4 space-y-2">
                <h3 className="text-base sm:text-lg md:text-[1.125rem] font-medium">
                  {item.name}
                </h3>

                <div className="flex items-center text-sm sm:text-base md:text-lg">
                  <CurrencyNgn size={18} className="sm:w-5 sm:h-5" />
                  <p>{Number(item.price).toLocaleString("en-NG")}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
