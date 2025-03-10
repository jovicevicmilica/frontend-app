"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const vimeoId = "771577378"; // Your Vimeo Video ID

  return (
    <section className="relative flex flex-col items-center justify-center h-[600px] md:h-[600px] lg:h-[645px] cl:h-[730px] 2xl:h-[840px] p-4 sm:p-6 text-center">
      {/* ✅ Background Images (Separate for Mobile & Desktop) */}
      <div className="absolute inset-0">
        {!isVideoOpen ? (
          <>
            {/* 🌟 Mobile Background Image */}
            <Image
              src="/assets/warehouse-bg.avif"
              alt="Warehouse (Mobile)"
              fill
              quality={30}
              priority
              className="object-cover h-[600px] w-[350px] max-md:block md:hidden" // Only on mobile
            />

            {/* 🖥️ Desktop Background Image */}
            <Image
              src="/assets/warehouse-bg.avif"
              alt="Warehouse (Desktop)"
              fill
              quality={50}
              priority
              className="object-cover w-full h-full hidden md:block" // Only on desktop
            />
          </>
        ) : (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&dnt=1`}
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        )}
      </div>

      {/* ✅ Content */}
      {!isVideoOpen && (
        <div className="relative z-10 flex flex-col items-center text-white px-4 sm:px-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-2 sm:mb-4">
            Powering 4 million businesses globally.
          </h1>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6 sm:mb-10 font-normal">
            Ready for yours.
          </p>

          {/* ✅ CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
            <a
              href="/get-started"
              className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-blue-600 rounded-lg font-medium text-sm sm:text-base md:text-lg hover:bg-gray-200 transition"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg font-medium text-sm sm:text-base md:text-lg hover:bg-blue-700 transition"
            >
              Contact Sales
            </a>
          </div>
        </div>
      )}

      {/* ✅ Play Video Button */}
      {!isVideoOpen && (
        <button
          onClick={() => setIsVideoOpen(true)}
          className="absolute bottom-6 sm:bottom-10 flex items-center gap-2 text-white hover:text-gray-300 transition"
          aria-label="Play company introduction video"
        >
          <PlayCircleIcon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
          <span className="text-sm sm:text-base xl:text-md 2xl:text-lg font-semibold">
            Play Video
          </span>
        </button>
      )}
    </section>
  );
}
