"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function DeliveryService() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const buttons = buttonsRef.current;

    if (!section || !content || !heading || !paragraph || !buttons) return;

    // Set initial state
    gsap.set(content, { opacity: 0, scale: 0.95 });
    gsap.set(heading, { y: 30, opacity: 0 });
    gsap.set(paragraph, { y: 20, opacity: 0 });
    gsap.set(buttons.children, { y: 20, opacity: 0, scale: 0.9 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
      },
    });

    // Animate in sequence
    tl
      // Content container fades in
      .to(content, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      })
      // Heading slides up
      .to(
        heading,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3",
      )
      // Paragraph follows
      .to(
        paragraph,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
      // Buttons pop in with stagger
      .to(
        buttons.children,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.5,
          ease: "back.out(1.5)",
        },
        "-=0.3",
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[420px] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/pizzaDelivery.png"
          fill
          alt="pizza delivery background"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <h3
          ref={headingRef}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl font-bold mb-4 sm:mb-6 max-w-4xl leading-tight"
        >
          Your Order Will Be Confirmed In Real Time
        </h3>

        <p
          ref={paragraphRef}
          className="text-white/90 text-base sm:text-lg md:text-xl lg:text-[1.125rem] mb-6 sm:mb-8 max-w-2xl"
        >
          We offer pick up and food delivery services.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full max-w-md sm:max-w-none"
        >
          <button className="w-full sm:w-auto bg-[#b70e10] hover:bg-[#9a0c0e] text-[#f3f3f3] rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Table reservation
          </button>
          <button className="w-full sm:w-auto bg-[#ffbf10] hover:bg-[#e6ac0f] text-[#212121] rounded-full px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            See our menu & order
          </button>
        </div>
      </div>
    </section>
  );
}
