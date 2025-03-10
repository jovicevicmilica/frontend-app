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
    <section className="w-full py-4 md:py-16 px-7 sm:px-12 md:px-16 lg:px-24 xl:px-32 flex flex-col lg:flex-row items-center lg:items-start font-poppins gap-10">
      {/* ✅ Left Side: Title & Description */}
      <div className="lg:w-1/3 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl sm:mt-10 md:mt-0a font-semibold text-black mb-6">
          Our Services
        </h1>
        <p className="text-gray-700 text-sm md:text-base xl:text-md 2xl:text-lg leading-relaxed">
          Our team of highly specialized B2B marketing experts — performance
          marketing, SEO, lead generation, and more — ensures that you get the
          results you want: more revenue.
        </p>
      </div>

      {/* ✅ Right Side: Service Buttons */}
      <nav
        aria-label="Our Services"
        className="lg:w-2/3 flex flex-col items-center mt-5 w-full"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <a
              key={index}
              href={`/services/${service.slug}`}
              aria-label={`Learn more about ${service.label}`}
              className="group flex justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <RoundedButton
                bgColor={`${service.bgColor} ${service.hoverColor}`}
                textColor={service.textColor}
                textSize="text-[12px] sm:text-[13px] md:text-[15px] lg:text-base"
                width={
                  index >= 3 && index <= 5
                    ? "w-[180px] md:w-[260px]" // ✅ Wider buttons in second row (lg)
                    : "w-[150px] md:w-[180px]"
                }
                paddingx="px-4"
                height="h-[48px]"
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
