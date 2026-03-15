"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const container = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".skateboard, .burger", {
      x: 800,
      duration: 1.4,
      ease: "power4.out",
    })

      .to(".skateboard, .burger", {
        // rotation: -10,
        duration: 0.25,
        yoyo: true,
        repeat: 1,
      });

    tl.from(".onion-image", {
      x: 300,
      duration: 0.4,
    });

    tl.from(".pizza-image", {
      x: -300,
      duration: 0.4,
    });

    tl.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 0.6,
    });
  }, []);

  return (
    <section className="relative bg-[#B70E10] min-h-screen w-full text-[#fff] px-8 mb-12 overflow-hidden">
      <div ref={container} className="relative">
        <Image
          src="/Frame 5.png"
          alt="hero image"
          width={550}
          height={350}
          className="burger object-cover absolute absolute -right-40 md:top-6 top-70 rotate-[2deg] -translate-x-1/2 md:z-1"
        />

        <Image
          src="/bgImage.png"
          alt="background image"
          width={280}
          height={200}
          className="onion-image object-cover absolute top-15 -right-20"
        />

        <Image
          src="/pizzaBg.png"
          alt="background image"
          width={280}
          height={200}
          className="pizza-image object-cover absolute top-25 -left-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FFF5EF"
            fill-opacity="1"
            d="M0,96L34.3,90.7C68.6,85,137,75,206,101.3C274.3,128,343,192,411,218.7C480,245,549,235,617,224C685.7,213,754,203,823,181.3C891.4,160,960,128,1029,149.3C1097.1,171,1166,245,1234,240C1302.9,235,1371,149,1406,106.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="w-full md:w-1/3 absolute md:left-45 top-50 hero-text text z-1">
        <h1 className="text-[3rem] font-bold">Street Flavor. Full Speed.</h1>
        <p className="">
          Burgers that drip, shawarmas that wrap perfection, wings that crunch,
          chips that satisfy, and smoothies that cool the ride. Stop by at{" "}
          <strong>Paddi Chops</strong> to have a taste of greatness.
        </p>
        <button className="bg-[#FFBF10] text-[#212121] text-[1.125rem] font-semibold px-4 py-3 rounded-[24px] cursor-pointer mt-4">
          Order now
        </button>
      </div>
    </section>
  );
}
