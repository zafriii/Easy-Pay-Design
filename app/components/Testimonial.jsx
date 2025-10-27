"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free.",
      name: "Ethan Williams",
      role: "Digital Marketing Specialist",
      image: "/images/test1.png",
    },
    {
      id: 2,
      rating: 5,
      text: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity with every transaction.",
      name: "Daniil Thompson",
      role: "Product Designer",
      image: "/images/testimonial2.png",
    },
    {
      id: 3,
      rating: 5,
      text: "No hidden fees, no complications — just smooth, clear payments every time. The interface is intuitive and makes managing transactions simple.",
      name: "Emanual Johnson",
      role: "Business Owner",
      image: "/images/test1.png",
    },
    {
      id: 4,
      rating: 5,
      text: "An app that truly values transparency. The payment process feels natural and easy, giving users a stress-free experience.",
      name: "Sarah Ahmed",
      role: "Entrepreneur",
      image: "/images/testimonial2.png",
    },
  ];

  const slides = [...testimonials, ...testimonials]; // duplicate for seamless infinite

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 800, once: false });
  }, []);

  // Auto slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); // faster sliding
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  if (!mounted) return null;

  return (
    <section className="bg-[#F6F6F6] py-20 px-6 md:py-24 md:px-20 font-urbanist">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left Content */}
          <div className="lg:w-2/5 flex flex-col justify-between">
            <div>
              <p className="text-xs md:text-sm font-semibold text-[#932EFA] mb-3 uppercase tracking-wide">
                TESTIMONIAL
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#01081B] leading-tight mb-5">
                We've built trust with reviews from real users
              </h2>
              <p className="text-base md:text-lg text-[#4D525F] leading-relaxed mb-10">
                Boost your credibility by featuring genuine testimonials from
                real users, showcasing their positive experiences and
                satisfaction with Manka Pay services.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#CFD0D1] bg-transparent flex items-center justify-center hover:bg-gray-100 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-[#4D525F] group-hover:text-gray-900 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#01081B] flex items-center justify-center hover:bg-gray-900 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Infinite Scroll */}
          <div className="lg:w-3/5 overflow-hidden relative">
            <div
              ref={containerRef}
              className="flex gap-6 md:gap-8 transition-transform duration-700 ease-linear"
              style={{
                transform: `translateX(-${
                  (currentSlide * 100) / 2
                }%)`, // divide by 2 because array is duplicated
              }}
            >
              {slides.map((t, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-500"
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm md:text-base text-[#4D525F] leading-relaxed mb-6 md:mb-8">
                    {t.text}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-[#01081B]">
                        {t.name}
                      </h4>
                      <p className="text-xs md:text-sm text-[#4D525F]">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
