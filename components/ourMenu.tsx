"use client";

import { CurrencyNgn } from "@phosphor-icons/react";
import { useRef } from "react";
import Image from "next/image";

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

  return (
    <section className="menu-section mb-20">
      <div className="text-center mb-8">
        <div className="text-center text-[1.125rem] md:text-[1.5rem] font-bold">
          Our Menu
        </div>
        <h2 className="text-[3rem] font-semibold">
          Savour the Journey, Enjoy the Delight
        </h2>
      </div>

      <div
        ref={sectionRef}
        className="w-full flex flex-col md:flex-row md:items-center justify-center gap-0 px-6 md:px-12 mb-12"
      >
        {menuItems.map((item, index) => (
          <div
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            key={index}
            className="menu-card bg-[#fff] hover:bg-[#b70e10] hover:text-[#f3f3f3] transition-colors transform-0.5 flex flex-col w-60 border-[1px] border-[#EEE9E6] rounded-[0px]"
          >
            <div className="relative w-full h-50 md:h-60 lg:h-55">
              <Image src={item.image} fill alt="house image" className="" />
            </div>
            <div className="px-2 py-4 space-y-2">
              <h3 className="text-[1.125rem] font-medium">{item.name}</h3>

              <div className="flex items-center">
                <CurrencyNgn size={20} />
                <p> {Number(item.price).toLocaleString("en-NG")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
