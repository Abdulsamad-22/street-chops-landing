"use client";

import Image from "next/image";
import openingSchedule from "@/data/openingHours";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function OpeningHours() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const onionRef = useRef<HTMLDivElement>(null);
  const pepperRef = useRef<HTMLDivElement>(null);
  const scheduleItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const container = containerRef.current;
    const leftCard = leftCardRef.current;
    const centerCard = centerCardRef.current;
    const rightCard = rightCardRef.current;
    const onion = onionRef.current;
    const pepper = pepperRef.current;
    const scheduleItems = scheduleItemsRef.current.filter(Boolean);

    if (
      !section ||
      !heading ||
      !container ||
      !leftCard ||
      !centerCard ||
      !rightCard
    )
      return;

    // Set initial states
    gsap.set(heading, { opacity: 0, y: -30 });
    gsap.set(container, { opacity: 0, scale: 0.95 });
    gsap.set(leftCard, { x: -150, opacity: 0, rotationY: -45 });
    gsap.set(centerCard, { y: 100, opacity: 0, scale: 0.9 });
    gsap.set(rightCard, { x: 150, opacity: 0, rotationY: 45 });
    gsap.set(scheduleItems, { opacity: 0, x: -20 });

    if (onion) gsap.set(onion, { opacity: 0, rotation: 0, scale: 0 });
    if (pepper) gsap.set(pepper, { opacity: 0, rotation: -180, scale: 0 });

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "top 20%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
      },
    });

    // Animation sequence
    tl
      // 1. Heading fades in
      .to(heading, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      // 2. Container appears
      .to(
        container,
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2",
      )
      // 3. Left card slides in with 3D rotation
      .to(
        leftCard,
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      )
      // 4. Right card slides in with 3D rotation
      .to(
        rightCard,
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7", // Overlap with left card
      )
      // 5. Center card lifts up
      .to(
        centerCard,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.2)",
        },
        "-=0.5",
      )
      // 7. Onion spins in
      .to(
        onion,
        {
          opacity: 0.8,
          rotation: 360,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.6",
      )
      // 8. Pepper spins in (opposite direction)
      .to(
        pepper,
        {
          opacity: 0.8,
          rotation: 60,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.5)",
        },
        "-=0.7",
      );

    // Add continuous floating animation for decorative elements
    if (onion) {
      gsap.to(onion, {
        y: "+=15",
        rotation: "+=10",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });
    }

    if (pepper) {
      gsap.to(pepper, {
        y: "-=20",
        rotation: "-=15",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Add subtle hover effect for cards
    [leftCard, rightCard].forEach((card) => {
      card?.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card?.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section ref={sectionRef} className="w-full mb-20">
      <h2
        ref={headingRef}
        className="text-center text-[1.125rem] md:text-[1.5rem] font-bold mb-4"
      >
        Opening Hours
      </h2>

      <div className="">
        <div
          ref={containerRef}
          className="relative flex flex-col md:flex-row gap-12 bg-[#b70e10] w-full h-350 md:h-140 py-12 px-8 overflow-hidden"
          style={{
            perspective: "2000px",
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/alubosa.png"
            alt="background image"
            width={280}
            height={200}
            className="object-cover absolute -bottom-30 -right-30"
          />

          <div
            ref={pepperRef}
            className="absolute -top-5 sm:-top-10 md:top-0 left-10 sm:left-16 md:left-20 -translate-x-1/2 pointer-events-none z-0"
          >
            <Image
              src="/pepper.png"
              alt="decorative pepper"
              width={200}
              height={200}
              className="object-cover w-24 sm:w-36 md:w-[280px] h-24 sm:h-36 md:h-[200px]"
            />
          </div>

          {/* <Image
            src="/pepper.png"
            alt="background image"
            width={280}
            height={200}
            className="object-cover absolute top-0 left-20 -translate-x-1/2 rotate-[60deg]"
          /> */}
          <div
            ref={leftCardRef}
            className="relative w-full md:w-[30%] h-[30%] md:h-[100%] bg-[#fff] rounded-tl-[250px] rounded-br-[250px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div>
              <Image
                src={"/unsplash_O95r2WVvtr0.png"}
                alt=""
                fill
                className="rounded-tl-[250px] rounded-br-[250px]"
              />
            </div>
          </div>
          <div
            ref={centerCardRef}
            className="relative bg-[#fff] w-full md:w-[30%] h-[40%] md:h-[100%] mx-auto rounded-b-[200px] pt-10 pb-4 px-8"
          >
            {openingSchedule.map((activity, idx) => (
              <div key={idx} className="flex gap-8 justify-center space-y-3">
                <div className="w-full md:w-1/2 ">
                  <p className="text-[1rem] text-[#b70e10] font-semibold">
                    {activity?.service}
                  </p>
                  <p className="text-[1rem] font-medium">{activity.day}</p>
                </div>

                <p className="">{activity.time}</p>
              </div>
            ))}

            <div>
              <Image
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                src="/logo.png"
                alt="logo"
                width={70}
                height={70}
              />
            </div>
          </div>
          <div
            ref={rightCardRef}
            className="relative w-full md:w-[30%] h-[30%] md:h-[100%] bg-[#fff] rounded-tr-[250px] rounded-bl-[250px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src={"/unsplash_-fGRJrT2tEE.png"}
              alt=""
              fill
              className="rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
