"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center h-[645px] p-6 text-center">
      {/* Background Image / Video */}
      <div className="absolute inset-0 w-full h-full">
        {!isVideoOpen ? (
          <Image
            src="/assets/warehouse-bg.avif"
            alt="Warehouse background"
            fill
            className="object-cover w-full h-auto"
            priority // Ensures the image loads ASAP
          />
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Content */}
      {!isVideoOpen && (
        <div className="relative z-10 flex flex-col items-center text-white">
          {/* Headings */}
          <h1 className="text-2xl md:text-6xl mb-2 md:mb-4">
            Powering 4 million businesses globally.
          </h1>
          <h2 className="text-xl md:text-6xl mb-8 md:mb-16">
            Ready for yours.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-200 transition">
              Get started
            </button>
            <button className="px-6 py-3 font-sans bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Contact sales
            </button>
          </div>
        </div>
      )}

      {/* Play Video Button */}
      {!isVideoOpen && (
        <button
          onClick={() => setIsVideoOpen(true)}
          className="absolute bottom-6 flex items-center gap-2 text-white hover:text-gray-300 transition"
        >
          <PlayCircleIcon className="w-8 h-8 text-white" />
          <span className="font-semibold">Play video</span>
        </button>
      )}
    </div>
  );
}
