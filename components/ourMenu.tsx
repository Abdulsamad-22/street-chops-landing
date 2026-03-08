"use client";

import { MapPinLine, CurrencyNgn } from "@phosphor-icons/react";
import { useRef } from "react";
import Image from "next/image";

interface houseType {
  image: string;
  name: string;
  location: string;
  price: string;
  oldPrice: string;
  buttonText: string;
}

const houses: houseType[] = [
  {
    image: "/houseType1-1.png",
    name: "Royal Mansions",
    location: "Centenary city Airport road, Abuja",
    price: "7million",
    oldPrice: "9.5million",
    buttonText: "More details",
  },

  {
    image: "/houseType1-2.png",
    name: "4 bedroom terrace duplex",
    location: "Wuye, Abuja",
    price: "10million",
    oldPrice: "12.5million",
    buttonText: "More details",
  },

  {
    image: "/houseType1-3.png",
    name: "The Chateaux",
    location: "Life camp, beside paradise estate, Abuja",
    price: "7.5million",
    oldPrice: "8million",
    buttonText: "More details",
  },

  {
    image: "/houseType1.png",
    name: "7 bedroom villa",
    location: "Cosgroove smart estate Guzape, Abuja",
    price: "12million",
    oldPrice: "14million",
    buttonText: "More details",
  },
];

export default function OurMenu() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  return (
    <section>
      <div className="text-center">
        <h2 className="text-[3rem] font-semibold">
          Savour the Journey, Enjoy the Delight
        </h2>
      </div>

      <div
        ref={sectionRef}
        className="w-full flex flex-col md:flex-row md:items-center gap-4 px-6 md:px-12"
      >
        {houses.map((house, index) => (
          <div
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            key={house.name}
            className="house-card w-full border-[1px] border-[#EEE9E6] rounded-[8px] property-card"
          >
            <div className="relative h-70 md:h-70 lg:h-80 rounded-[8px]">
              <Image
                src={house.image}
                fill
                alt="house image"
                className="rounded-[8px]"
              />
            </div>
            <div className="px-2 py-4 space-y-2">
              <h3 className="text-[1.125rem] font-medium">{house.name}</h3>
              <div className="flex items-center gap-1">
                <MapPinLine size={20} />
                <p className="text-[#737373] line-clamp-1">{house.location}</p>
              </div>

              <div className="flex item-center gap-3 text-[1.125rem] font-medium">
                <div className="flex items-center">
                  <CurrencyNgn size={20} />
                  <span className="line-through">{house.oldPrice}</span>
                </div>

                <div className="flex items-center">
                  <CurrencyNgn size={20} />
                  <p> {house.price}</p>
                </div>
              </div>

              <button className="inline-block bg-[#BF6028] text-[#f3f3f3] px-4 py-3 rounded-[8px] mt-3">
                {house.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
