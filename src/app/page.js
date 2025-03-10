"use client";
import Head from "next/head";
import dynamic from "next/dynamic";
import ApproachSection from "@/sections/ApproachSection";
import CarouselSection from "@/sections/CarouselSection";
import ContactSection from "@/sections/ContactSection";
import CreativeAgencySection from "@/sections/CreativeAgencySection";
import FooterSection from "@/sections/FooterSection";
import HeroSection from "@/sections/HeroSection";
import OurServicesSection from "@/sections/OurServicesSection";
import Script from "next/script";
const OurVerticlesSection = dynamic(
  () => import("@/sections/OurVerticlesSection"),
  { ssr: false }
);
import WhatWeDoSection from "@/sections/WhatWeDoSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import "@/styles/globals.css";

export default function Home() {
  return (
    <div className="bg-white">
      {/* ✅ Fix: Preload Hero Section Background Image */}
      <Head>
        <title>Home | MxD</title>
        <meta
          name="description"
          content="We are a creative agency offering top-notch marketing, design, and branding services."
        />
        {/* Preload the background image for HeroSection */}
        <link
          rel="preload"
          as="image"
          href="/assets/warehouse-bg.avif"
          type="image/avif"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
