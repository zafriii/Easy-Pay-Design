"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/month",
      description: "Free for personal payments.",
      features: [
        "Up to 100 transactions per month",
        "Basic fraud protection",
        "Email support",
      ],
      buttonText: "Get Free Plan",
      bg: "bg-white",
      textColor: "text-[#01081B]",
      border: "border border-gray-200",
      buttonStyle:
        "w-full py-3 px-6 border-2 border-[#01081B] text-[#01081B] font-semibold rounded-full hover:bg-[#01081B] hover:text-white transition-all duration-500 ease-out",
      circleBg: "bg-[#ECF0FB]",
      circleIcon: "text-[#2E68FD]",
      divider: "from-[#F5F5F5B2] via-[#CBCBCB] to-[#F5F5F5B2]",
    },
    {
      name: "Advanced",
      price: "$19",
      period: "/month",
      description: "Minimal fees for advanced transactions",
      features: [
        "Up to 1000 transactions per month",
        "Advanced fraud protection",
        "Detailed transaction reports",
        "Priority email & chat support",
      ],
      buttonText: "Get Advanced Plan",
      bg: "bg-[#01081B]",
      textColor: "text-white",
      border: "",
      buttonStyle:
        "w-full py-3 px-6 bg-[#2E68FD] text-white font-semibold rounded-full hover:bg-[#174DFF] transition-all duration-500 ease-out",
      circleBg: "bg-[#26272C]",
      circleIcon: "text-white",
      divider: "from-[#272727B2] via-[#505050] to-[#272727B2]",
    },
    {
      name: "Business",
      price: "$29",
      period: "/month",
      description: "Premium business transactions",
      features: [
        "Unlimited transactions per month",
        "Premium fraud protection",
        "Detailed transaction reports",
        "Priority email & chat support",
      ],
      buttonText: "Get Business Plan",
      bg: "bg-white",
      textColor: "text-[#01081B]",
      border: "border border-gray-200",
      buttonStyle:
        "w-full py-3 px-6 border-2 border-[#01081B] text-[#01081B] font-semibold rounded-full hover:bg-[#01081B] hover:text-white transition-all duration-500 ease-out",
      circleBg: "bg-[#ECF0FB]",
      circleIcon: "text-[#2E68FD]",
      divider: "from-[#F5F5F5B2] via-[#CBCBCB] to-[#F5F5F5B2]",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-24 font-urbanist">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
          <p className="text-[#932EFA] text-sm md:text-base font-semibold tracking-wide uppercase mb-2">
            PRICING
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#01081B] mb-1">
            Simple transparent pricing
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#01081B]">
            No hidden fees
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col rounded-2xl p-6 sm:p-8 relative group
                ${plan.border ? plan.border : ""}
                ${plan.bg}
                ${plan.bg === "bg-[#01081B]" ? "shadow-2xl" : "shadow-md"}
                hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
                transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${plan.textColor}`}>
                  {plan.name}
                </h3>
                <p
                  className={`text-sm sm:text-base ${
                    plan.bg === "bg-[#01081B]"
                      ? "text-[#B1B2B2]"
                      : "text-[#4D525F]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${plan.textColor}`}>
                    {plan.price}
                  </span>
                  <span
                    className={`ml-1 text-sm sm:text-base md:text-lg ${
                      plan.bg === "bg-[#01081B]"
                        ? "text-[#B1B2B2]"
                        : "text-[#4D525F]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <div
                  className={`w-full h-px bg-gradient-to-r ${plan.divider}`}
                ></div>
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start">
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${plan.circleBg} rounded-full flex items-center justify-center mr-3 flex-shrink-0 relative overflow-hidden`}
                    >
                      <span className="absolute inline-flex w-full h-full rounded-full bg-current opacity-0 group-hover:opacity-30 group-hover:animate-ping"></span>
                      <svg
                        className={`w-3 h-3 sm:w-4 sm:h-4 relative z-10 ${plan.circleIcon}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span
                      className={`text-sm sm:text-base ${
                        plan.textColor === "text-white"
                          ? "text-[#B1B2B2]"
                          : "text-[#4D525F]"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className={`${plan.buttonStyle} group-hover:shadow-lg mt-auto`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
