"use client";

import {
  FacebookLogo,
  GoogleLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 py-10 px-6 md:px-12 mt-20">
        <section className="flex flex-col md:flex-row gap-8 justify-between text-[#4B5563] py-4">
          <div className="w-full md:w-1/3">
            <div className="text-[2rem] font-bold italic">Elora</div>

            <p className="mb-6">
              Your trusted partner in buying, selling, and investing in
              property.
            </p>
            {/* <p className="mb-6 font-bold text-black text-lg">
              Join Our Email List
            </p> */}
          </div>

          <div className="w-2/3 flex flex-col md:flex-row items-start justify-end gap-8 md:gap-20">
            <div>
              <h3 className="font-bold text-lg mb-2">About Us</h3>
              <ul>
                <li className="mb-2">Policy Priorities</li>
                <li className="mb-2">Payment Plan</li>
                <li className="mb-2">Projects</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Support Us</h3>
              <ul>
                <li className="mb-2">Store</li>
                <li className="mb-2">Property Listings</li>
                <li className="mb-2">Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Get In Touch</h3>
              <p className="text-[#BF6028] font-bold mb-2 text-1xl">
                +(84) - 1800 - 4635
              </p>
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
