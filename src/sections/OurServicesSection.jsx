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
      {/* ✅ Left Side: Title & Description */}
      <div className="lg:w-1/3 text-center lg:text-left">
        <h2 className="text-4xl font-semibold text-black mb-6">Our Services</h2>
        <p className="text-gray-700 text-md max-w-lg text-sm leading-relaxed">
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-6 w-full">
          {services.map((service, index) => (
            <a
              key={index}
              href={`/services/${service.slug}`}
              className="group flex justify-center"
            >
              <RoundedButton
                bgColor={`${service.bgColor} ${service.hoverColor}`}
                textColor={service.textColor}
                textSize="text-[12px] sm:text-[13px] md:text-[15px] lg:text-base"
                width={
                  index >= 3 && index <= 5
                    ? "w-[180px] md:w-[240px]" // ✅ Wider buttons in second row (lg)
                    : "w-[150px] md:w-[180px]"
                }
                height="h-[41px]"
                paddingx="px-0"
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
