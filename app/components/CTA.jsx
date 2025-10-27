"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section
      className="w-full px-4 py-16 sm:py-20 md:py-24 lg:py-32 font-urbanist"
      data-aos="fade-down"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative h-[26rem] sm:h-[28rem] md:h-[30rem] lg:h-[32rem] rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/cta-bg.png"
              alt="Background"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-12">
            <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 max-w-xs sm:max-w-xl md:max-w-2xl leading-snug">
              Ready to experience seamless
              <br className="hidden sm:block" />
              secure payments globally?
            </h2>

            <p className="text-white/90 text-xs sm:text-sm md:text-lg mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-xl leading-relaxed">
              Ready for hassle-free, secure payments anywhere in the world?
              Start using <span className="font-semibold">Easy Pay</span> today!
              It’s fast, free, and focused on keeping your transactions secure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto">
              <button className="bg-[#2E68FD] hover:bg-blue-700 text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-200 w-full sm:w-auto">
                Download the App
              </button>

              <button className="bg-transparent hover:bg-white/10 text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-white transition-colors duration-200 w-full sm:w-auto">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
