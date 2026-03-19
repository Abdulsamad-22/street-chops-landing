"use client";

import {
  FacebookLogo,
  GoogleLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="potato-section relative overflow-hidden bg-gray-100 py-10 px-6 md:px-12 mt-20">
        <div className="potato-container absolute inset-0 pointer-events-none"></div>
        <Image
          src="/fallingShadows.png"
          alt="background image"
          width={180}
          height={100}
          className="pizza-image object-cover absolute bottom-0 -right-20 rotate-[90deg]"
        />

        <Image
          src="/fallingShadows.png"
          alt="background image"
          width={120}
          height={100}
          className="pizza-image object-cover absolute -top-5 right-6"
        />

        <Image
          src="/fallingShadows.png"
          alt="background image"
          width={130}
          height={120}
          className="pizza-image object-cover absolute bottom-10 right-0 md:left-0"
        />

        <section className="flex flex-col md:flex-row gap-8 justify-between text-[#4B5563] py-4">
          <div className="w-full md:w-1/3">
            <div className="mb-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className=""
              />
            </div>

            <p className="mb-6">
              Your trusted partner in buying, selling, and investing in
              property.
            </p>
          </div>

          <div className="w-2/3 flex flex-col md:flex-row items-start justify-end gap-8 md:gap-20">
            <div>
              <h3 className="font-bold text-[#b70e10] text-lg mb-2">
                About Us
              </h3>
              <ul>
                <li className="mb-2">Opening Hours</li>
                <li className="mb-2">Delivery Plan</li>
                <li className="mb-2">Projects</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#b70e10] text-lg mb-2">
                Our Menu
              </h3>
              <ul>
                <li className="mb-2">Burger</li>
                <li className="mb-2">Shawarma</li>
                <li className="mb-2">Fries & Chickin Wings</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#b70e10] text-lg mb-2">
                Get In Touch
              </h3>
              <p className="font-bold mb-2 text-1xl">+(84) - 1800 - 4635</p>
              <p className="mb-5">abdulsamadhussaini001@gmail.com</p>
              <div className="flex flex-row gap-5">
                <a href="#">
                  <FacebookLogo size={24} />
                </a>
                <a href="#">
                  <XLogo size={24} />
                </a>
                <a href="mailto:abdulsamadhussaini001@gmail.com">
                  <GoogleLogo size={24} />
                </a>
                <a href="#">
                  <InstagramLogo size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <hr className="opacity-15 my-6" />
        <section className="text-gray-600">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <p>Copyright © 2026 Elora. All Rights Reserved</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-5">
              <a href="#">Privacy </a>
              <a href="#">Policy</a>
              <a href="#">About Us</a>
              <a href="#">Support</a>
              <a href="#">FAQ</a>
              <a href="#">Blog</a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
