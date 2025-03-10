import Head from "next/head";
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
      {/* Fix: Add viewport meta tag inside Head */}
      <Head>
        <title>Home | MxD</title>
        <meta
          name="description"
          content="We are a creative agency offering top-notch marketing, design, and branding services."
        />
      </Head>

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
