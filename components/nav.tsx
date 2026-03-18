"use client";
import Link from "next/link";
import { List } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  // useEffect(() => {
  //   const navTween = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "nav",
  //       start: "bottom top",
  //     },
  //   });

  //   navTween.fromTo(
  //     "nav",
  //     {
  //       backgroundColor: "#f3f3f3",
  //       color: "#212121",
  //     },
  //     {
  //       backgroundColor: "#21212150",
  //       color: "#f3f3f3",
  //       // backgroundFilter: "blur(10px)",
  //       opacity: "blur(10px)",
  //       duration: 1,
  //       ease: "power1.inOut",
  //     },
  //   );
  // }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Disable page scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav
      id="nav-element"
      className="w-full md:w-[90%] bg-[#f3f3f3] flex items-center justify-between fixed top-0 md:top-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-sm px-2 md:px-4 py-2 lg:py-3 md:rounded-[38px] z-5"
    >
      <div className="w-1/3 text-[2rem] font-bold">Elora</div>
      <div className="w-2/3 hidden lg:flex items-center justify-center space-x-8 p-2">
        {["Home", "About", "Our menu"].map((item) => {
          const href =
            item.toLowerCase() === "home" ? "/" : `#${item.toLowerCase()}`;

          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <Link key={item} href={href} className="group relative">
              <span
                className={`
                font-medium text-[1.125rem] transition-colors duration-300 ${
                  isActive ? "text-[#B70E10]" : "group-hover:text-[#B70E10]"
                }
                
              `}
              >
                {item}
              </span>

              <span
                className={`
                absolute -bottom-1 left-0 h-0.5 bg-[#B70E10] transition-all duration-300
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              `}
              />
            </Link>
          );
        })}
      </div>
      <div className="w-1/3 hidden lg:block relative">
        <div className="w-full flex justify-end">
          <button className="bg-[#B70E10] text-[#f3f3f3] px-4 py-3 rounded-[24px] cursor-pointer">
            See Our Menu
          </button>
        </div>
      </div>
      <List
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}
        className="block lg:hidden"
        size={32}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full bg-[#fff] absolute top-[95%] left-0 min-h-1/2 flex flex-col lg:hidden py-5 px-4 transform transition-transform duration-300 ease-in-out 
    lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-shadow ${
      isMenuOpen ? "shadow-[0_12px_32px_rgba(0,0,0,0.12)]" : "shadow-none"
    }
`}
      >
        <div className="flex flex-col lg:flex-row gap-4 p-2 mb-4">
          {["Home", "About", "Our Menu"].map((item) => {
            const href =
              item.toLowerCase() === "home" ? "/" : `#${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="group relative border-b-[1px] border-[#C0C0C0] py-[0.5rem] px-[0.25rem]"
              >
                <span
                  className="transition-colors duration-300 
                       font-medium text-[#626262] text-[1rem] "
                >
                  {item}
                </span>
              </Link>
            );
          })}
        </div>

        <div>
          <div className="w-full">
            <button className="bg-[#b70e10] text-[#f3f3f3] px-4 py-3 rounded-[8px] cursor-pointer">
              See Our Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
