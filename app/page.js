import React from "react";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import CTA from "./components/CTA";
import FeaturesSection from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Security from "./components/Security";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

function page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Security />
      <PricingSection />
      <Testimonial />
      <CTA />
      <Footer />
    </>
  );
}

export default page;
