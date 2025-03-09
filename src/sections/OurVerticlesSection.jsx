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
    <section className="w-screen py-16 px-6 lg:px-20 font-poppins relative overflow-hidden">
      {/* ✅ Heading Section */}
      <div className="mb-4 flex flex-col justify-between items-left">
        <header className="max-w-2xl">
          <h2 className="text-4xl font-semibold text-black mb-6">
            Our Verticles
          </h2>
        </header>
        <div className="flex flex-row items-center mb-8 w-full justify-between">
          <p className="text-gray-700 text-sm max-w-5xl">
            Our team of highly specialized B2B marketing experts — performance
            marketing, search engine optimization, lead generation, conversion
            rate optimization, brand and content ensures that you get the
            results you want - more revenue. 
          </p>
          {/* ✅ Accessible Navigation Buttons */}
          <div className="flex gap-4">
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
          { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ]}
        className="w-screen"
      >
        {verticals.map((item, index) => (
          <div key={index} className="pr-0">
            <div className="rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={`${item.title} - ${item.description}`}
                width={500}
                height={215}
                className="w-full h-[215px] object-cover"
                loading="lazy"
              />
              <div
                className={`w-full h-[170px] ${item.bgColor} ${item.textColor} p-7 flex flex-col justify-between`}
              >
                {/* ✅ Improved H3 Structure for SEO */}
                <h3 className="text-xl font-medium max-w-[200px]">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OurVerticlesSection;
