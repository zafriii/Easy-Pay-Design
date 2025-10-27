"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Security = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const securityFeatures = [
    {
      title: "Two-factor authentication",
      description:
        "Two-factor authentication ensures added protection by using verification steps.",
      lightBg: "bg-[#ECF0FB]",
      circleBg: "bg-[#2E68FD]",
    },
    {
      title: "Fraud detection and alerts",
      description:
        "Fraud detection safeguards your money, sending instant alerts for any activity.",
      lightBg: "bg-[#FEEDED]",
      circleBg: "bg-[#FC4343]",
    },
    {
      title: "Transaction notifications",
      description:
        "Instant notifications for transaction keep you informed to manage your finances.",
      lightBg: "bg-[#E5FCF2]",
      circleBg: "bg-[#08A965]",
    },
    {
      title: "Biometric access",
      description:
        "Secure your account with biometric features, and facial recognition.",
      lightBg: "bg-[#E1F1F9]",
      circleBg: "bg-[#3B7793]",
    },
    {
      title: "End-to-end encryption",
      description:
        "By encrypting, protecting your data from unauthorized access.",
      lightBg: "bg-[#FAEEE2]",
      circleBg: "bg-[#D77E1B]",
    },
    {
      title: "24/7 Protection support",
      description:
        "Our protection team is available around the clock to help you.",
      lightBg: "bg-[#F4EDFC]",
      circleBg: "bg-[#932EFA]",
    },
  ];

  return (
    <section className="relative py-16 px-8 md:py-24 md:px-24 overflow-hidden font-urbanist">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 md:mb-16 gap-6"
          data-aos="fade-down"
        >
          <div className="flex-1">
            <p className="text-sm md:text-base font-semibold text-[#932EFA] mb-0 uppercase tracking-wide font-urbanist">
              SECURITY
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#01081B] leading-tight font-urbanist">
              We protect your money at every step with Easy Pay
            </h2>
          </div>
          <div className="flex-1 lg:max-w-md flex items-center">
            <p className="text-base md:text-lg text-[#4D525F] leading-relaxed mb-0 mt-8 font-urbanist">
              Easy Pay ensures your money is protected at every step with
              advanced encryption, real-time monitoring, and multi-factor
              authentication.
            </p>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/security.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:p-8 lg:p-10 bg-white/70 rounded-3xl">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start pr-4 p-6 rounded-2xl group hover:shadow-lg transition-all duration-500 ease-out cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Circle with echo animation on card hover */}
                <div className="relative w-8 h-8 mb-4">
                  {/* Echo ring */}
                  <span
                    className={`absolute inline-flex w-full h-full rounded-full opacity-50 ${feature.lightBg}
                      animate-none group-hover:animate-ping`}
                  ></span>
                  {/* Main circle */}
                  <div
                    className={`relative w-8 h-8 ${feature.lightBg} rounded-full flex items-center justify-center 
                      transition-transform duration-700 ease-out group-hover:rotate-12`}
                  >
                    <div
                      className={`w-2.5 h-2.5 ${feature.circleBg} rounded-full transition-transform duration-700 ease-out group-hover:scale-125`}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-[#01081B] mb-2 font-urbanist">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#4D525F] leading-relaxed mb-4 font-urbanist">
                  {feature.description}
                </p>

                {/* Divider Lines */}
                {(index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-2 bottom-2 right-0 w-px bg-[linear-gradient(to_bottom,#F5F5F5_0%,#CBCBCB_50%,#F5F5F5_100%)]"></div>
                )}
                {index < securityFeatures.length - 1 && (
                  <div className="lg:hidden absolute left-2 right-2 bottom-0 h-px bg-[linear-gradient(to_right,#F5F5F5_0%,#CBCBCB_50%,#F5F5F5_100%)]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
