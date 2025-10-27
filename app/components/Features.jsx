"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoDemo from "./LogoDemo";

// Feature cards data
const featureCards = [
  {
    id: 1,
    title: "Instant payments",
    description: "Send money to friends or family in real-time, for free.",
    bgColor: "#F3F7FF",
    icon: (
      <>
        {/* Phone Icon */}
        <svg
          width="30"
          height="43"
          viewBox="0 0 34 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path
            d="M30.0025 11.875V6.875C30.0025 5.1525 28.3975 3.75 26.4275 3.75H7.325C5.355 3.75 3.75 5.1525 3.75 6.875V41.875C3.75 43.5975 5.355 45 7.325 45H26.4275C28.3975 45 30.0025 43.5975 30.0025 41.875V31.875C30.0025 30.84 30.8425 30 31.8775 30C32.9125 30 33.7525 30.84 33.7525 31.875V41.875C33.7525 45.6675 30.4675 48.75 26.4275 48.75H7.325C3.2875 48.75 0 45.6675 0 41.875V6.875C0 3.0825 3.285 0 7.325 0H26.4275C30.465 0 33.7525 3.0825 33.7525 6.875V11.875C33.7525 12.91 32.9125 13.75 31.8775 13.75C30.8425 13.75 30.0025 12.91 30.0025 11.875Z"
            fill="#01081B"
          />
        </svg>

        {/* Card Icon Overlay */}
        <svg
          width="28"
          height="21"
          viewBox="0 0 32 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-3 right-[-7px] z-20"
        >
          <path
            d="M24.375 0H6.875C3.0825 0 0 3.0825 0 6.875V16.875C0 20.6675 3.0825 23.75 6.875 23.75H24.375C28.1675 23.75 31.25 20.6675 31.25 16.875V6.875C31.25 3.0825 28.1675 0 24.375 0ZM6.875 3.75H24.375C26.0975 3.75 27.5 5.1525 27.5 6.875V7.5H3.75V6.875C3.75 5.1525 5.1525 3.75 6.875 3.75ZM24.375 20H6.875C5.1525 20 3.75 18.5975 3.75 16.875V11.25H27.5V16.875C27.5 18.5975 26.0975 20 24.375 20Z"
            fill="#2E68FD"
          />
        </svg>
      </>
    ),
  },
  {
    id: 2,
    title: "No hidden fees",
    description: "Clear and simple pricing. Always be aware of your costs.",
    bgColor: "#FBF6EF",
    icon: (
      <>
        {/* Document Icon */}
        <svg
          width="34"
          height="41"
          viewBox="0 0 39 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path
            d="M38.75 6.875V24.375C38.75 25.41 37.91 26.25 36.875 26.25C35.84 26.25 35 25.41 35 24.375V6.875C35 5.1525 33.5975 3.75 31.875 3.75H6.875C5.1525 3.75 3.75 5.1525 3.75 6.875V39.375C3.75 41.0975 5.1525 42.5 6.875 42.5H21.875C22.91 42.5 23.75 43.34 23.75 44.375C23.75 45.41 22.91 46.25 21.875 46.25H6.875C3.0825 46.25 0 43.1675 0 39.375V6.875C0 3.0825 3.0825 0 6.875 0H31.875C35.6675 0 38.75 3.0825 38.75 6.875ZM29.375 7.5H9.375C8.34 7.5 7.5 8.34 7.5 9.375C7.5 10.41 8.34 11.25 9.375 11.25H29.375C30.41 11.25 31.25 10.41 31.25 9.375C31.25 8.34 30.41 7.5 29.375 7.5ZM21.25 16.875C21.25 15.84 20.41 15 19.375 15H9.375C8.34 15 7.5 15.84 7.5 16.875C7.5 17.91 8.34 18.75 9.375 18.75H19.375C20.41 18.75 21.25 17.91 21.25 16.875ZM9.375 22.5C8.34 22.5 7.5 23.34 7.5 24.375C7.5 25.41 8.34 26.25 9.375 26.25H11.875C12.91 26.25 13.75 25.41 13.75 24.375C13.75 23.34 12.91 22.5 11.875 22.5H9.375Z"
            fill="#01081B"
          />
        </svg>

        {/* Cancel Icon Overlay */}
        <svg
          width="25"
          height="25"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-[-7px] z-20"
        >
          <g clipPath="url(#clip0_1_235)">
            <path
              d="M10.9589 18.9589L14.9177 15M18.8766 11.0411L14.9177 15M14.9177 15L10.9589 11.0411M14.9177 15L18.8766 18.9589"
              stroke="#2E68FD"
              strokeWidth="3.47504"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.4998 26.5833C21.1733 26.5833 26.5832 21.1734 26.5832 14.5C26.5832 7.82652 21.1733 2.41663 14.4998 2.41663C7.8264 2.41663 2.4165 7.82652 2.4165 14.5C2.4165 21.1734 7.8264 26.5833 14.4998 26.5833Z"
              stroke="#2E68FD"
              strokeWidth="3.86667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_235">
              <rect width="29" height="29" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </>
    ),
  },
  {
    id: 3,
    title: "Digital wallet",
    description: "Store money securely and make fast transfers or purchases.",
    bgColor: "#EEF9FE",
    icon: (
      <>
        {/* Wallet Icon */}
        <svg
          width="43"
          height="34"
          viewBox="0 0 49 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path
            d="M41.875 38.75H9.375C4.205 38.75 0 34.545 0 29.375V9.375C0 4.205 4.205 0 9.375 0H41.875C45.6675 0 48.75 3.0825 48.75 6.875V31.875C48.75 35.6675 45.6675 38.75 41.875 38.75ZM9.375 3.75C6.2725 3.75 3.75 6.2725 3.75 9.375V29.375C3.75 32.4775 6.2725 35 9.375 35H41.875C43.5975 35 45 33.5975 45 31.875V6.875C45 5.1525 43.5975 3.75 41.875 3.75H9.375Z"
            fill="#01081B"
          />
        </svg>

        {/* Wallet Overlay */}
        <svg
          width="19"
          height="16"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-2 right-[-3px] z-20"
        >
          <path
            d="M19.175 0H9.375C6.91 0 4.495 1.0025 2.75 2.75C0.977501 4.5225 0 6.875 0 9.375C0 14.545 4.205 18.75 9.375 18.75H19.175C20.21 18.75 21.05 17.91 21.05 16.875V1.875C21.05 0.84 20.21 0 19.175 0ZM17.3 15H9.375C6.2725 15 3.75 12.4775 3.75 9.375C3.75 7.875 4.335 6.465 5.4 5.4C6.4475 4.3525 7.8975 3.75 9.375 3.75H17.3V15ZM10.5 8.05C10.85 8.4 11.05 8.875 11.05 9.375C11.05 9.625 11 9.85 10.9 10.1C10.825 10.325 10.675 10.525 10.5 10.7C10.15 11.05 9.675 11.25 9.175 11.25C8.675 11.25 8.2 11.05 7.85 10.7C7.5 10.35 7.3 9.875 7.3 9.375C7.3 8.875 7.5 8.4 7.85 8.05C8.55 7.35 9.8 7.35 10.5 8.05Z"
            fill="#2E68FD"
          />
        </svg>
      </>
    ),
  },
  {
    id: 4,
    title: "Secure transactions",
    description: "End-to-end encryption for all transactions.",
    bgColor: "#F4EDFC",
    icon: (
      <>
        {/* Card Icon */}
        <svg
          width="41"
          height="30"
          viewBox="0 0 47 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path
            d="M39.375 0H6.875C3.0825 0 0 3.0825 0 6.875V26.875C0 30.6675 3.0825 33.75 6.875 33.75H25.45C26.485 33.75 27.325 32.91 27.325 31.875C27.325 30.84 26.485 30 25.45 30H6.875C5.1525 30 3.75 28.5975 3.75 26.875V13.75H42.5V21.45C42.5 22.485 43.34 23.325 44.375 23.325C45.41 23.325 46.25 22.485 46.25 21.45V6.875C46.25 3.0825 43.1675 0 39.375 0ZM3.75 10V6.875C3.75 5.1525 5.1525 3.75 6.875 3.75H39.375C41.0975 3.75 42.5 5.1525 42.5 6.875V10H3.75ZM19.375 22.5C20.41 22.5 21.25 23.34 21.25 24.375C21.25 25.41 20.41 26.25 19.375 26.25H16.875C15.84 26.25 15 25.41 15 24.375C15 23.34 15.84 22.5 16.875 22.5H19.375ZM11.875 22.5C12.91 22.5 13.75 23.34 13.75 24.375C13.75 25.41 12.91 26.25 11.875 26.25H9.375C8.34 26.25 7.5 25.41 7.5 24.375C7.5 23.34 8.34 22.5 9.375 22.5H11.875Z"
            fill="#01081B"
          />
        </svg>

        {/* Shield Icon Overlay */}
        <svg
          width="27"
          height="29"
          viewBox="0 0 27 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-[-8px] right-[-3px] z-20"
        >
          <path
            d="M23.74 5.33594L15.305 0.578438C13.935 -0.194062 12.3075 -0.191562 10.9475 0.578438L2.51 5.33594C0.962499 6.21094 0 7.92094 0 9.80594V10.6259C0 19.1609 5.1875 26.5859 12.615 28.6809C12.7825 28.7284 12.955 28.7509 13.125 28.7509C13.295 28.7509 13.4675 28.7259 13.635 28.6809C21.0625 26.5859 26.25 19.1609 26.25 10.6259V9.80594C26.25 7.92094 25.2875 6.21094 23.74 5.33594ZM22.5 10.6259C22.5 17.2884 18.6725 23.0784 13.125 24.9159C7.5775 23.0809 3.75 17.2884 3.75 10.6259V9.80594C3.75 9.28844 3.9925 8.80594 4.35 8.60344L12.79 3.84594C12.9 3.78344 13.0125 3.75344 13.125 3.75344C13.2375 3.75344 13.3525 3.78344 13.4625 3.84594L21.9 8.60344C22.26 8.80594 22.5 9.28844 22.5 9.80594V10.6259ZM18.2 10.5509C18.9325 11.2834 18.9325 12.4709 18.2 13.2034L13.2 18.2034C12.835 18.5684 12.355 18.7534 11.875 18.7534C11.395 18.7534 10.915 18.5709 10.55 18.2034L8.05 15.7034C7.3175 14.9709 7.3175 13.7834 8.05 13.0509C8.7825 12.3184 9.97 12.3184 10.7025 13.0509L11.8775 14.2259L15.5525 10.5509C16.285 9.81844 17.4725 9.81844 18.205 10.5509H18.2Z"
            fill="#2E68FD"
          />
        </svg>
      </>
    ),
  },
];

export default function FeaturesSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 800, once: false, easing: "ease-out-cubic" });
    }
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 font-urbanist">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <p className="text-[#932EFA] text-sm font-semibold mb-3 uppercase tracking-wide">FEATURES</p>
          <h2 className="font-bold text-3xl md:text-4xl text-[#01081B]">
            Why choose Easy Pay for<br />effortless payments?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card) => (
            <div key={card.id} className="rounded-2xl p-8 relative flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 group" style={{ backgroundColor: card.bgColor }} data-aos="fade-up">
              <div className="relative w-fit mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:rotate-10">
                {card.icon}
              </div>
              <h3 className="font-bold text-xl text-[#01081B] mb-2" data-aos="zoom-in" data-aos-delay="100">{card.title}</h3>
              <p className="text-[#4D525F] text-sm leading-relaxed opacity-70" data-aos="zoom-in" data-aos-delay="200">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <LogoDemo />
    </section>
  );
}
