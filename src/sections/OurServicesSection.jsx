"use client";

import React from "react";
import RoundedButton from "../widgets/RoundedButton";

const services = [
  {
    label: "Strategy",
    slug: "strategy",
    bgColor: "bg-black",
    textColor: "text-white",
    hoverColor: "hover:bg-gray-800",
  },
  {
    label: "Data & AI",
    slug: "data-ai",
    bgColor: "bg-gray-300",
    textColor: "text-black",
    hoverColor: "hover:bg-gray-400",
  },
  {
    label: "B2B Marketing",
    slug: "b2b-marketing",
    bgColor: "bg-[#496bef]",
    textColor: "text-white",
    hoverColor: "hover:bg-blue-700",
  },
  {
    label: "Go-to-Market Strategy",
    slug: "go-to-market",
    bgColor: "bg-gray-300",
    textColor: "text-black",
    hoverColor: "hover:bg-gray-400",
  },
  {
    label: "CMO & Marketing",
    slug: "cmo-marketing",
    bgColor: "bg-[#496bef]",
    textColor: "text-white",
    hoverColor: "hover:bg-blue-700",
  },
  {
    label: "Growth Marketing",
    slug: "growth-marketing",
    bgColor: "bg-black",
    textColor: "text-white",
    hoverColor: "hover:bg-gray-800",
  },
  {
    label: "High Intent Lead",
    slug: "high-intent-lead",
    bgColor: "bg-black",
    textColor: "text-white",
    hoverColor: "hover:bg-gray-800",
  },
  {
    label: "Generation",
    slug: "lead-generation",
    bgColor: "bg-gray-300",
    textColor: "text-black",
    hoverColor: "hover:bg-gray-400",
  },
  {
    label: "Market Expansion",
    slug: "market-expansion",
    bgColor: "bg-[#496bef]",
    textColor: "text-white",
    hoverColor: "hover:bg-blue-700",
  },
];

const OurServicesSection = () => {
  return (
    <section className="w-full py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start font-poppins gap-10">
      {/* ✅ Left Side: Title & SEO-Optimized Description */}
      <div className="lg:w-1/3 text-center lg:text-left">
        <h2 className="text-4xl font-semibold text-black mb-6">Our Services</h2>
        <p className="text-gray-700 text-md max-w-lg text-sm leading-relaxed space-x-1">
          Our team of highly specialized B2B marketing experts — performance
          marketing, search engine optimization, lead generation, conversion
          rate optimization, brand and content ensures that you get the results
          you want - more revenue. 
        </p>
      </div>

      {/* ✅ Right Side: Service Buttons Wrapped in `<nav>` for SEO */}
      <nav
        aria-label="Our Services"
        className="lg:w-2/3 flex flex-col items-center gap-6 mt-5"
      >
        {/* ✅ First Row (Normal Size) */}
        <div className="grid grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <a key={index} href={`/services/${service.slug}`} className="group">
              <RoundedButton
                bgColor={`${service.bgColor} ${service.hoverColor}`}
                textColor={service.textColor}
                textSize="text-sm md:text-base"
                width="w-[150px] md:w-[190px]"
                height="h-[41px]"
              >
                {service.label}
              </RoundedButton>
            </a>
          ))}
        </div>

        {/* ✅ Second Row (Wider Size) */}
        <div className="grid grid-cols-3 gap-6 mt-3">
          {services.slice(3, 6).map((service, index) => (
            <a
              key={index + 3}
              href={`/services/${service.slug}`}
              className="group"
            >
              <RoundedButton
                bgColor={`${service.bgColor} ${service.hoverColor}`}
                textColor={service.textColor}
                textSize="text-sm md:text-base"
                width="w-[180px] md:w-[240px]" // ✅ Wider buttons here
                height="h-[41px]"
              >
                {service.label}
              </RoundedButton>
            </a>
          ))}
        </div>

        {/* ✅ Third Row (Normal Size) */}
        <div className="grid grid-cols-3 gap-6 mt-3">
          {services.slice(6, 9).map((service, index) => (
            <a
              key={index + 6}
              href={`/services/${service.slug}`}
              className="group"
            >
              <RoundedButton
                bgColor={`${service.bgColor} ${service.hoverColor}`}
                textColor={service.textColor}
                textSize="text-sm md:text-base"
                width="w-[150px] md:w-[190px]"
                height="h-[41px]"
              >
                {service.label}
              </RoundedButton>
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default OurServicesSection;
