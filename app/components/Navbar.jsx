"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/security", label: "Security" },
    { href: "/benefits", label: "Benefits" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="relative mx-auto flex h-[70px] w-full max-w-[1170px] items-center justify-between px-4 md:px-6">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo-image.png"
          alt="Easy Pay Logo"
          width={80}
          height={80}
          className="mt-2 block object-contain"
          priority
        />
        <span className="font-urbanist text-[28px] font-bold leading-[150%] -ml-4">
          Easy Pay
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 font-urbanist text-[16px] font-semibold text-[#4D525F]">
        {navigationLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="relative group">
            <span className="transition-colors duration-300 group-hover:text-[#2E68FD]">
              {label}
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#2E68FD] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Desktop Contact Button */}
      {mounted && (
        <button className="hidden md:flex h-12 w-32 items-center justify-center gap-2 rounded-full bg-[#2E68FD] font-urbanist text-white transition-colors duration-300 hover:bg-black">
          Contact Us
        </button>
      )}

      {/* Mobile Menu Button (Hamburger only) */}
      <div className="md:hidden z-50">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="rounded-md p-3 text-[#4D525F] transition-all duration-300 hover:bg-gray-200 focus:outline-none"
        >
          {!menuOpen && <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-image.png"
              alt="Easy Pay Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
            <span className="font-urbanist text-xl font-bold">Easy Pay</span>
          </div>
          <button onClick={toggleMenu} className="p-2">
            <HiX size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col mt-6 gap-6 px-6">
          {navigationLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-urbanist font-semibold text-[#4D525F] text-lg transition-colors duration-300 hover:text-[#2E68FD]"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-[#2E68FD] font-urbanist text-white text-lg transition-colors duration-300 hover:bg-black"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Transparent Dark Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
        />
      )}
    </nav>
  );
}
