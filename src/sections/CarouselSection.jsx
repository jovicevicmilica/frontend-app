"use client";

import Image from "next/image";
import RoundedButton from "../widgets/RoundedButton";

const logos = [
  { src: "/assets/terra15.avif", name: "Terra 15" },
  { src: "/assets/hillco.avif", name: "Hillco" },
  { src: "/assets/an-retreats.avif", name: "AN Retreats" },
  { src: "/assets/bottoms-up.avif", name: "Bottoms Up" },
  { src: "/assets/cleartrip.avif", name: "Cleartrip" },
  { src: "/assets/flydub.avif", name: "FlyDubai" },
];

const CarouselSection = () => {
  return (
    <section className="w-screen bg-white py-12 overflow-hidden">
      <div className="mx-auto text-center w-full">
        {/* ✅ Add Semantic H2 for SEO */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-10 px-4 font-poppins">
          We help businesses like yours grow revenue profitability
        </h2>

        {/* ✅ Add Accessible Carousel Container */}
        <div
          role="region"
          aria-label="Trusted Brands"
          className="relative w-full overflow-hidden"
        >
          <div className="carousel-track">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="carousel-item">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-10 sm:max-h-12 md:max-h-16 w-auto"
                  width={180}
                  height={30}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <RoundedButton
            mt="mt-6 md:mt-8"
            textSize="text-sm md:text-base xl:text-lg"
            width="w-[200px] sm:w-[250px] md:w-[230px]"
            bgColor="bg-black"
            hoverColor="hover:bg-gray-400"
          >
            How We Work
          </RoundedButton>
        </div>
      </div>

      {/* ✅ Optimized Keyframes for Smooth, Responsive Scrolling */}
      <style jsx>{`
        .carousel-track {
          display: flex;
          width: max-content;
          animation: loop-scroll 20s linear infinite;
          white-space: nowrap;
        }

        .carousel-item {
          flex-shrink: 0;
          padding: 0 24px;
        }

        @keyframes loop-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .carousel-item {
            padding: 0 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default CarouselSection;
