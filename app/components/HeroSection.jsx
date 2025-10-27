"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        once: false,
        easing: "ease-out-cubic",
      });
    }
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-start font-urbanist overflow-visible">
      {/* Background Section */}
      <div
        className="relative w-full max-w-7xl mx-auto mt-3 px-6 pt-12 md:pt-16 pb-0 rounded-3xl overflow-visible 
                   bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat"
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-12 overflow-visible pb-0">
          {/* LEFT CONTENT */}
          <div className="space-y-8 pl-4 md:pl-16 lg:pl-24">
            {/* Headings & Description */}
            <div className="space-y-6">
              {/* Subheading */}
              <p
                className="text-[#4D525F] font-semibold text-[16px] leading-[150%] tracking-wide uppercase"
                data-aos="fade-right"
              >
                EASY PAYMENT
              </p>

              {/* Main Heading */}
              <h1
                className="font-bold text-[44px] md:text-[56px] leading-[120%] text-[#01081B] text-left"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Pay{" "}
                <span className="relative inline-block">
                  Fast & Smarter
                  {/* SVG underline */}
                  <span className="absolute left-0 top-full mt-2">
                    <svg
                      width="490"
                      height="12"
                      viewBox="0 0 490 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[220px] md:w-[300px]"
                    >
                      <path
                        d="M330.072 2.85301C330.256 3.14457 330.105 3.39126 329.585 3.44359C328.283 3.57442 326.967 3.69404 325.645 3.7202C322.771 3.77253 319.89 3.76133 317.246 3.77628C316.542 4.07158 316.621 4.26222 317.272 4.33324C317.923 4.40426 318.594 4.41921 319.259 4.41921C343.944 4.4678 368.637 4.49771 393.322 4.56873C395.98 4.57621 398.637 4.76686 401.281 4.95002C404.386 5.16308 407.471 5.27896 410.582 4.95376C411.885 4.81919 413.246 4.67339 414.548 4.74441C426.303 5.38734 438.083 5.25279 449.857 5.27148C451.166 5.27522 452.475 5.42472 453.777 5.53312C453.876 5.5406 454.001 5.73874 453.994 5.8434C453.988 5.95181 453.883 6.12 453.738 6.1499C452.929 6.32558 452.087 6.62465 451.278 6.59849C448.838 6.51999 446.43 6.38538 444.029 6.84142C443.227 6.99468 442.266 6.88257 441.378 6.87884C434.709 6.87136 428.039 6.85265 421.369 6.85639C411.582 6.86012 401.801 6.8788 392.014 6.88627C388.679 6.89001 385.357 6.94238 382.035 7.20404C379.621 7.39468 377.161 7.41335 374.721 7.42457C357.376 7.50307 340.024 7.5442 322.679 7.62643C317.351 7.6526 312.03 7.68249 306.695 7.98153C301.407 8.28057 296.046 8.20581 290.718 8.22076C265.361 8.27683 240.005 8.28804 214.655 8.35158C203.979 8.37775 193.304 8.52728 182.628 8.54597C171.506 8.56092 160.389 8.46373 149.267 8.45252C133.698 8.43757 118.128 8.44128 102.559 8.47492C99.6781 8.4824 96.797 8.65809 93.9095 8.76275C91.6928 8.84125 89.4762 8.97583 87.2596 9.00573C82.1488 9.07676 77.0313 9.08797 71.914 9.14778C69.4671 9.17768 66.994 9.13657 64.5866 9.33842C58.8443 9.82436 53.0626 9.84679 47.2874 9.95146C44.6235 10.0001 41.9726 10.172 39.3087 10.2916C32.4417 10.6056 25.647 11.2934 18.7537 11.4803C16.9843 11.5289 15.2282 11.7719 13.4588 11.8242C10.1371 11.9251 6.80214 12.0036 3.47387 11.9999C1.55978 11.9999 0.277157 11.1439 0.191648 10.0038C0.106139 8.87492 0.0534921 7.74228 0.000871201 6.61341C-0.0254392 6.04523 0.546852 5.61911 1.3559 5.40604C2.55302 5.09579 3.81589 4.80425 5.10511 4.68838C6.85475 4.53138 8.6505 4.565 10.4265 4.47903C13.5245 4.33324 16.6225 4.16876 19.7205 3.99681C20.8256 3.937 21.9241 3.80991 23.0291 3.76506C31.455 3.4249 39.8547 2.92777 48.2411 2.38576C51.326 2.18764 54.4569 2.225 57.5682 2.17267C63.3433 2.07922 69.1316 2.13531 74.8673 1.58956C76.6104 1.42509 78.4127 1.46993 80.1952 1.43629C87.5227 1.3092 94.8501 1.29426 102.178 0.890559C108.361 0.550401 114.622 0.595242 120.845 0.595242C143.978 0.591504 167.105 0.651332 190.239 0.662546C218.259 0.677498 246.286 0.681202 274.307 0.673726C283.424 0.669988 292.547 0.632646 301.663 0.572838C304.327 0.554148 306.985 0.404612 309.649 0.322376C310.754 0.288734 311.865 0.225172 312.97 0.258814C315.851 0.34105 318.732 0.550392 321.607 0.55413C324.251 0.557868 326.895 0.35226 329.539 0.255072C329.697 0.247596 330.033 0.415831 330.006 0.468163C329.921 0.673753 329.809 0.991494 329.566 1.04009C328.743 1.20456 327.862 1.34286 326.994 1.36155C324.33 1.4251 321.659 1.41385 318.989 1.46992C318.121 1.48861 317.233 1.58208 316.404 1.72787C316.16 1.76898 316.035 2.10539 315.963 2.32219C315.937 2.39695 316.206 2.57263 316.377 2.59506C317.233 2.69972 318.167 2.92026 318.963 2.82307C322.705 2.37451 326.395 2.59135 330.072 2.85301Z"
                        fill="#2E68FD"
                      />
                    </svg>
                  </span>
                </span>
                <br />
                <span className="mt-3 inline-block">from anywhere</span>
              </h1>

              {/* Description */}
              <p
                className="text-[#4D525F] text-[18px] leading-[150%] font-normal max-w-md"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                Experience the future of payments: fast, secure, and tailored
                for the next generation's convenience and trust.
              </p>
            </div>

            {/* Store Buttons */}
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* Apple Store */}
              <StoreButton
                labelTop="Download on the"
                labelBottom="App Store"
                iconPath="apple"
              />
              {/* Google Play */}
              <StoreButton
                labelTop="GET IT ON"
                labelBottom="Google Play"
                iconPath="google"
              />
            </div>
          </div>

          {/* RIGHT CONTENT*/}
          <RightContent />
        </div>
      </div>
    </section>
  );
}

// Store Button Component
function StoreButton({ labelTop, labelBottom, iconPath }) {
  const isApple = iconPath === "apple";

  return (
    <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 mb-4 hover:bg-gray-800 transition-colors duration-300">
      {isApple ? (
        <svg
          fill="#ffffff"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          className="w-7 h-7"
        >
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"></path>
        </svg>
      ) : (
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7663 13.7543L0.108032 26.4074C0.109127 26.4096 0.109127 26.413 0.110222 26.4152C0.468281 27.7892 1.69466 28.8003 3.15098 28.8003C3.73351 28.8003 4.27991 28.6391 4.74856 28.3569L4.78579 28.334L17.908 20.5915L11.7663 13.7543Z"
            fill="#EA4335"
          />
          <path
            d="M23.5598 11.5994L23.5488 11.5916L17.8834 8.23348L11.5007 14.0416L17.9064 20.5898L23.5411 17.2653C24.5288 16.7189 25.2 15.654 25.2 14.4268C25.2 13.2063 24.5387 12.147 23.5598 11.5994Z"
            fill="#FBBC04"
          />
          <path
            d="M0.107308 2.39209C0.0372293 2.65635 0 2.93405 0 3.2207V25.5797C0 25.8664 0.0372293 26.1441 0.108403 26.4072L12.1663 14.0777L0.107308 2.39209Z"
            fill="#4285F4"
          />
          <path
            d="M11.8523 14.3999L17.8857 8.23124L4.77873 0.46022C4.30241 0.167967 3.74616 6.34967e-06 3.15159 6.34967e-06C1.69527 6.34967e-06 0.466697 1.01337 0.108638 2.38842C0.108638 2.38954 0.107544 2.39066 0.107544 2.39178L11.8523 14.3999Z"
            fill="#34A853"
          />
        </svg>
      )}
      <div className="text-left">
        <div className="text-[12px] leading-[120%]">{labelTop}</div>
        <div className="text-[14px] font-semibold leading-[120%]">
          {labelBottom}
        </div>
      </div>
    </button>
  );
}

// Right Content Component
function RightContent() {
  return (
    <div className="relative flex justify-start items-center mt-8 md:mt-0 overflow-visible">
      {/* Hero Image */}
      <div className="relative w-[180%] md:w-[170%] lg:w-[165%] h-[450px] md:h-[500px] lg:h-[600px] -ml-24 md:-ml-28 lg:-ml-36">
        <Image
          src="/images/hero-image.png"
          alt="Happy person using phone"
          height={800}
          width={800}
          className="object-cover w-full h-full scale-x-[-1]"
          priority
          data-aos="fade-left"
        />

        {/* Active Users */}
        <ActiveUsersCard />

        {/* Payment Received */}
        <PaymentReceivedCard />
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-3xl blur-3xl -z-10 transform scale-110" />
    </div>
  );
}

// Active Users Component
function ActiveUsersCard() {
  return (
    <div
      className="absolute top-24 md:top-28 lg:top-60 right-20 md:right-16 lg:right-2 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 border border-gray-100  hover: transition-transform duration-300 animate-floatUp animation-delay-800 hover:shadow-2xl cursor-pointer"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="flex -space-x-2">
        {["user1.png", "user2.jpg", "user3.jpg"].map((img, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-2 border-white overflow-hidden hover:scale-125 hover:z-10 transition-transform duration-300"
          >
            <Image
              src={`/images/${img}`}
              alt={`User ${i + 1}`}
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div>
        <div className="text-sm font-bold text-gray-900">120K+</div>
        <div className="text-xs font-semibold text-[#4D525F]">Active users</div>
      </div>
    </div>
  );
}

// Payment Received Component
function PaymentReceivedCard() {
  return (
    <div
      className="absolute bottom-16 left-24 md:left-28 lg:left-36 bg-white rounded-2xl px-6 py-4 shadow-xl border border-gray-100 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      data-aos="fade-down"
      data-aos-delay="400"
    >
      <div className="text-sm mb-1 font-semibold text-[#01081B]">
        Payment Received
      </div>
      <div className="text-2xl font-bold mb-1 text-[#2E68FD]">+35,890.00</div>
      <div className="flex items-center gap-2 text-xs font-semibold text-[#4D525F]">
        <span>11th Jan, 2024</span>
        <span className="flex items-center gap-1 text-[#37C390]">
          3.09%
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 
              4.293a1 1 0 01-1.414 0L8 10.414l-4.293 
              4.293a1 1 0 01-1.414-1.414l5-5a1 
              1 0 011.414 0L11 10.586 14.586 7H12z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
