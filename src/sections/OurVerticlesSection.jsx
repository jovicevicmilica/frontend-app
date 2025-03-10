"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowButton from "../widgets/ArrowButton";
import Image from "next/image";

const verticals = [
  {
    title: "Direct to Consumer",
    description:
      "Helping brands connect with customers through performance-driven marketing.",
    image: "/assets/image1.avif",
    bgColor: "bg-gray-200",
    textColor: "text-black",
  },
  {
    title: "B2B Marketing",
    description:
      "Optimizing lead generation and AI-driven automation for enterprise sales.",
    image: "/assets/image2.avif",
    bgColor: "bg-[#496bef]",
    textColor: "text-white",
  },
  {
    title: "Consumer Services",
    description:
      "Expanding digital reach through conversion-optimized campaigns.",
    image: "/assets/image3.avif",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Retail Growth",
    description:
      "Increasing retail sales with personalized customer targeting strategies.",
    image: "/assets/image4.avif",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "E-commerce Scaling",
    description: "Scaling online stores with data-driven paid media and SEO.",
    image: "/assets/image5.avif",
    bgColor: "bg-[#D9D9D9]",
    textColor: "text-black",
  },
  {
    title: "Tech Startups",
    description:
      "Accelerating growth for SaaS and tech companies with strategic marketing.",
    image: "/assets/image6.avif",
    bgColor: "bg-[#496BEF]",
    textColor: "text-white",
  },
];

const OurVerticlesSection = () => {
  const sliderRef = useRef(null);
  return (
    <section className="w-full md:w-screen py-8 md:py-16 lg:py-24 px-7 sm:px-12 md:px-16 lg:px-24 xl:px-32 font-poppins relative overflow-hidden">
      {/* ✅ Heading Section */}
      {/* ✅ Heading, Paragraph, and Arrows in a Row on Large Screens */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between mb-8">
        {/* ✅ Heading & Paragraph */}
        <div className="lg:w-3/4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl sm:mt-10 md:mt-0 font-semibold text-black mb-4 lg:mb-8">
            Our Verticles
          </h2>
          <p className="text-gray-700 text-sm md:text-base xl:text-md 2xl:text-lg mb-4 text-center md:text-left lg:mb-8">
            Our team of highly specialized B2B marketing experts — performance
            marketing, search engine optimization, lead generation, conversion
            rate optimization, brand and content ensures that you get the
            results you want - more revenue.
          </p>
        </div>

        {/* ✅ Arrows (Positioned on the Right for Large Screens) */}
        <div className="hidden lg:flex gap-0 items-end lg:mt-8">
          <ArrowButton
            direction="left"
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Slide left"
            tabIndex="0"
          />
          <ArrowButton
            direction="right"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Slide right"
            tabIndex="0"
          />
        </div>
      </div>

      {/* ✅ SEO & Accessibility Optimized Slider */}
      <Slider
        ref={sliderRef}
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={6}
        slidesToScroll={1}
        centerMode={false}
        responsive={[
          {
            breakpoint: 1440,
            settings: { slidesToShow: 5, slidesToScroll: 1 },
          },
          {
            breakpoint: 1280,
            settings: { slidesToShow: 4, slidesToScroll: 1 },
          },
          {
            breakpoint: 1024,
            settings: { slidesToShow: 3, slidesToScroll: 1 },
          },
          { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ]}
        className="w-full md:w-screen"
      >
        {verticals.map((item, index) => (
          <div key={index} className="pr-0">
            <div className="rounded-md overflow-hidden lg:mb-10">
              <Image
                src={item.image}
                alt={`${item.title} - ${item.description}`}
                width={500}
                height={215}
                className="w-full h-[150px] md:h-[215px] object-cover"
                loading="lazy"
              />
              <div
                className={`w-full h-[120px] md:h-[170px] ${item.bgColor} ${item.textColor} p-5 md:p-7 flex flex-col justify-between`}
              >
                <h3 className="text-sm sm:text-xl md:text-xl font-medium max-w-[200px]">
                  {item.title}
                </h3>
                <p className="text-[10px] sm:text-sm md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* ✅ Arrows for Small Screens (Below the Slider) */}
      <div className="flex lg:hidden justify-center gap-4 mt-6">
        <ArrowButton
          direction="left"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Slide left"
          tabIndex="0"
        />
        <ArrowButton
          direction="right"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Slide right"
          tabIndex="0"
        />
      </div>
    </section>
  );
};

export default OurVerticlesSection;
