"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Cards Data
const howItWorksCards = [
  {
    id: 1,
    number: "01",
    title: "Download Easy Pay",
    description:
      "Get the Easy Pay app today from the App Store or Google Play Store.",
    numberColor: "#F3F3F3",
    icons: (
      <>
        {/* Download Icon */}
        <svg
          width="11"
          height="21"
          viewBox="0 0 11 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[78%] left-1/3 transform -translate-x-1/2 -translate-y-1/2"
        >
          <path
            d="M10.5555 14.372C9.96551 13.788 9.01351 13.798 8.43351 14.388L7.00151 15.842V1.5C7.00151 0.672 6.32951 0 5.50151 0C4.67351 0 4.00151 0.672 4.00151 1.5V15.898L2.55751 14.466C1.97151 13.882 1.01951 13.884 0.435511 14.474C-0.148489 15.062 -0.144488 16.012 0.443512 16.596L4.44351 20.566C4.72551 20.846 5.10551 21.002 5.49951 21.002H5.50751C5.90751 21.002 6.28951 20.838 6.56751 20.554L10.5675 16.494C11.1495 15.904 11.1415 14.954 10.5515 14.372H10.5555Z"
            fill="#2E68FD"
          />
        </svg>

        {/* Shopping Bag Icon */}
        <svg
          width="39"
          height="31"
          viewBox="0 0 39 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[-8px] left-1/3 transform -translate-x-1/2"
        >
          <path
            d="M38.636 14.014L35.774 3.978C35.1 1.636 32.926 0 30.488 0H27.498C26.67 0 25.998 0.672 25.998 1.5C25.998 2.328 26.67 3 27.498 3H30.488C31.596 3 32.584 3.744 32.89 4.804L34.942 12H29.5C27.57 12 26 13.57 26 15.5C26 16.878 24.878 18 23.5 18H15.5C14.122 18 13 16.878 13 15.5C13 13.57 11.43 12 9.5 12H4.058L6.108 4.808C6.414 3.742 7.402 3 8.51 3H11.5C12.328 3 13 2.328 13 1.5C13 0.672 12.328 0 11.5 0H8.51C6.072 0 3.898 1.636 3.224 3.982L0.364 14.014C0.122 14.862 0 15.738 0 16.618V25.5C0 28.534 2.466 31 5.5 31H33.5C36.534 31 39 28.534 39 25.5V16.618C39 15.738 38.878 14.862 38.636 14.014ZM36 25.5C36 26.878 34.878 28 33.5 28H5.5C4.122 28 3 26.878 3 25.5V16.618C3 16.116 3.072 15.618 3.186 15.13C3.272 15.056 3.378 15 3.5 15H9.5C9.776 15 10 15.224 10 15.5C10 18.534 12.466 21 15.5 21H23.5C26.534 21 29 18.534 29 15.5C29 15.224 29.224 15 29.5 15H35.5C35.622 15 35.726 15.056 35.814 15.13C35.928 15.618 36 16.116 36 16.618V25.5Z"
            fill="#01081B"
          />
        </svg>
      </>
    ),
    divider: true,
  },
  {
    id: 2,
    number: "02",
    title: "Link your bank or card",
    description:
      "Easily connect your account or card with advanced security for peace of mind.",
    numberColor: "#F3F3F3",
    icons: (
      <>
        <svg
          width="39"
          height="31"
          viewBox="0 0 39 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[87%] left-1/3 transform -translate-x-1/2 -translate-y-1/2"
        >
          <path
            d="M33.5 0H5.5C2.466 0 0 2.466 0 5.5V25.5C0 28.534 2.466 31 5.5 31H33.5C36.534 31 39 28.534 39 25.5V5.5C39 2.466 36.534 0 33.5 0ZM5.5 3H33.5C34.878 3 36 4.122 36 5.5V10H3V5.5C3 4.122 4.122 3 5.5 3ZM33.5 28H5.5C4.122 28 3 26.878 3 25.5V13H36V25.5C36 26.878 34.878 28 33.5 28Z"
            fill="#01081B"
          />
        </svg>
        <svg
          width="17"
          height="3"
          viewBox="0 0 17 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[0px] left-1/3 transform -translate-x-1/2"
        >
          <path
            d="M7 1.5C7 2.328 6.328 3 5.5 3H1.5C0.672 3 0 2.328 0 1.5C0 0.672 0.672 0 1.5 0H5.5C6.328 0 7 0.672 7 1.5ZM15.5 0H11.5C10.672 0 10 0.672 10 1.5C10 2.328 10.672 3 11.5 3H15.5C16.328 3 17 2.328 17 1.5C17 0.672 16.328 0 15.5 0Z"
            fill="#2E68FD"
          />
        </svg>
      </>
    ),
    divider: true,
  },
  {
    id: 3,
    number: "03",
    title: "Start paying",
    description:
      "Easily add funds, send money to friends, and make smooth, stress-free transactions.",
    numberColor: "#F3F3F3",
    icons: (
      <>
        <svg
          width="39"
          height="27"
          viewBox="0 0 39 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[80%] left-1/3 transform -translate-x-1/2 -translate-y-1/2"
        >
          <path
            d="M33.5 0H5.5C2.466 0 0 2.466 0 5.5V21.5C0 24.534 2.466 27 5.5 27H33.5C36.534 27 39 24.534 39 21.5V5.5C39 2.466 36.534 0 33.5 0ZM36 21.5C36 22.878 34.878 24 33.5 24H5.5C4.122 24 3 22.878 3 21.5V5.5C3 4.122 4.122 3 5.5 3H33.5C34.878 3 36 4.122 36 5.5V21.5ZM11 7.5C11 8.328 10.328 9 9.5 9H7.5C6.672 9 6 8.328 6 7.5C6 6.672 6.672 6 7.5 6H9.5C10.328 6 11 6.672 11 7.5ZM33 19.5C33 20.328 32.328 21 31.5 21H29.5C28.672 21 28 20.328 28 19.5C28 18.672 28.672 18 29.5 18H31.5C32.328 18 33 18.672 33 19.5ZM19.5 6C15.364 6 12 9.364 12 13.5C12 17.636 15.364 21 19.5 21C23.636 21 27 17.636 27 13.5C27 9.364 23.636 6 19.5 6ZM19.5 18C17.018 18 15 15.982 15 13.5C15 11.018 17.018 9 19.5 9C21.982 9 24 11.018 24 13.5C24 15.982 21.982 18 19.5 18Z"
            fill="#01081B"
          />
        </svg>
        <svg
          width="35"
          height="9"
          viewBox="0 0 35 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[-10px] left-1/3 transform -translate-x-1/2"
        >
          <path
            d="M34.886 0.925999C34.654 0.365999 34.106 0 33.5 0H1.5C0.672 0 0 0.672 0 1.5C0 2.328 0.672 3 1.5 3H29.878L26.438 6.44C25.852 7.026 25.852 7.976 26.438 8.562C26.73 8.854 27.114 9.002 27.498 9.002C27.882 9.002 28.266 8.856 28.558 8.562L34.558 2.562C34.986 2.132 35.116 1.488 34.884 0.928001L34.886 0.925999Z"
            fill="#2E68FD"
          />
        </svg>
      </>
    ),
  },
];

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: false });
  }, []);

  return (
    <section className="py-16 px-8 md:px-24 bg-[#F6F6F6] font-urbanist">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div data-aos="fade-up">
            <p className="text-[#932EFA] text-sm font-semibold mb-3 uppercase tracking-wide">
              HOW IT WORKS
            </p>
            <h2 className="font-bold text-3xl md:text-4xl text-[#01081B]">
              Make payments, transfers, and <br />
              more in 3 simple steps
            </h2>
          </div>
          <button
            className="bg-[#2E68FD] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
            data-aos="fade-up"
          >
            Get Started Now
          </button>
        </div>

        {/* Cards Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {howItWorksCards.map((card, index) => (
              <div
                key={card.id}
                data-aos="fade-up"
                className={`relative flex flex-col items-start text-left transform transition-all duration-500 ease-in-out  hover:scale-105  hover:shadow-purple-300/30 cursor-pointer ${
                  index === 0 ? "md:pr-8" : index === 1 ? "md:px-8" : "md:pl-8"
                }`}
              >
                <div className="relative mb-6 animate-float">
                  <span
                    className="text-[80px] font-bold leading-none"
                    style={{ color: card.numberColor }}
                  >
                    {card.number}
                  </span>
                  {card.icons}
                </div>
                <h3 className="font-bold text-xl text-[#01081B] mb-2 mt-6">
                  {card.title}
                </h3>
                <p className="text-[#4D525F] text-sm leading-relaxed opacity-70">
                  {card.description}
                </p>
                {card.divider && (
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#F5F5F5] via-[#CBCBCB] to-[#F5F5F5]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-12" data-aos="fade-up">
          <div className="w-full h-[600px] rounded-2xl overflow-hidden relative">
            <Image
              src="/images/how-it-works.jpg"
              alt="How it works"
              height={800}
              width={1700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
