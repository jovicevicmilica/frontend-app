import ApproachSection from "@/sections/ApproachSection";
import CarouselSection from "@/sections/CarouselSection";
import ContactSection from "@/sections/ContactSection";
import CreativeAgencySection from "@/sections/CreativeAgencySection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import OurServicesSection from "@/sections/OurServicesSection";
import OurVerticlesSection from "@/sections/OurVerticlesSection";
import WhatWeDoSection from "@/sections/WhatWeDoSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import "@/styles/globals.css";

export default function Home() {
  return (
    <div className="bg-white">
      <CreativeAgencySection />
      <HeroSection />
      <WhatWeDoSection />
      <ApproachSection />
      <ContactSection />
      <WhyChooseUs />
      <CarouselSection />
      <OurServicesSection />
      <OurVerticlesSection />
      <ContactSection
        bgColor="bg-[#181818]"
        textColor="text-white"
        showIcons={true}
      />
      <FooterSection />
    </div>
  );
}
