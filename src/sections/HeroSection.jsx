"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center h-[645px] p-6 text-center">
      {/* ✅ Background Image / Video */}
      <div className="absolute inset-0 w-full h-full">
        {!isVideoOpen ? (
          <Image
            src="/assets/warehouse-bg.avif"
            alt="Warehouse with high-tech logistics automation"
            fill
            className="object-cover w-full h-full"
            loading="lazy"
          />
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Company introduction video"
            loading="lazy"
            aria-hidden={!isVideoOpen}
            focusable="false"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            rel="noopener noreferrer"
          ></iframe>
        )}
      </div>

      {/* ✅ Content */}
      {!isVideoOpen && (
        <div className="relative z-10 flex flex-col items-center text-white">
          {/* ✅ SEO-Optimized Headings */}
          <h1 className="text-3xl md:text-6xl font-normal mb-4">
            Powering 4 million businesses globally.
          </h1>
          <p className="text-3xl md:text-6xl mb-8 md:mb-16 font-normal">
            Ready for yours.
          </p>

          {/* ✅ Call to Action (CTA) Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <a
              href="/get-started"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="px-6 py-3 font-sans bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
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
          className="absolute bottom-6 flex items-center gap-2 text-white hover:text-gray-300 transition"
          aria-label="Play company introduction video"
        >
          <PlayCircleIcon className="w-8 h-8 text-white" />
          <span className="font-semibold">Play Video</span>
        </button>
      )}
    </section>
  );
}
