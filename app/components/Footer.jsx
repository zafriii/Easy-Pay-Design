"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const shortLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Security", href: "#security" },
    { name: "Testimonial", href: "#testimonial" },
  ];

  const otherPages = [
    { name: "Privacy policy", href: "#privacy" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "404", href: "#404" },
  ];

  return (
    <footer className="relative bg-white font-urbanist overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-2">
              <Image
                src="/images/logo-image.png"
                alt="Logo"
                width={70}
                height={70}
                className="object-contain mt-2 sm:mt-4"
              />
              <span className="font-bold text-[26px] sm:text-[28px] leading-[150%] mt-3 sm:mt-5 sm:-ml-2">
                Easy Pay
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xs sm:max-w-sm mx-auto sm:ml-7 mt-3">
              Easy Pay offers secure, seamless, and fee-free payments for
              effortless global transactions.
            </p>
          </div>

          {/* Short Links */}
          <div className="text-center sm:text-left ml-4 sm:ml-10 md:ml-12 lg:ml-40">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
              Short links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {shortLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Pages */}
          <div className="text-center sm:text-left ml-4 sm:ml-10 md:ml-12 lg:ml-0">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">
              Other pages
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {otherPages.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm md:text-base text-gray-600 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-[#E7E7E8] relative text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © {year}{" "}
            <span className="font-medium text-gray-500">Easy Pay.</span> All
            rights reserved. Fintech landing page by{" "}
            <a
              href="https://nihilhill.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-600 transition-colors duration-200"
            >
              Muhib
            </a>
          </p>

          {/* Decorative Blur Circle (Visible on tablet and up) */}
          <div className="hidden sm:block absolute -top-20 left-1/3 w-[280px] h-[200px] bg-[#CD9BFF] rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
