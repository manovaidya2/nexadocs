import React from "react";
import LedgerHeroSection from "../home/LedgerHeroSection";
import AboutSection from "../home/AboutSection";
import WhatWeDoSection from "../home/WhatWeDoSection";
import ProcessSection from "../home/ProcessSection";
import WhyChooseSection from "../home/WhyChooseSection";
import IndustriesSection from "../home/IndustriesSection";
import CTASection from "../home/CTASection";

function Homepage() {
  return (
    <div>
  
      <LedgerHeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <ProcessSection />
      <WhyChooseSection />
      <IndustriesSection />
      <CTASection />
    </div>
  );
}

export default Homepage;