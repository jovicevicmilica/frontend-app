"use client";

import Image from "next/image";
import RoundedButton from "../widgets/RoundedButton";

const logos = [
  "/assets/terra15.avif",
  "/assets/hillco.avif",
  "/assets/an-retreats.avif",
  "/assets/bottoms-up.avif",
  "/assets/cleartrip.avif",
  "/assets/flydub.avif",
];

const CarouselSection = () => {
  return (
    <div className="w-screen bg-white py-12 overflow-hidden">
      <div className="mx-auto text-center w-full">
        <p className="text-xl font-semibold text-gray-800 mb-10 font-[Poppins]">
          We help businesses like yours grow revenue profitability
        </p>

        {/* Full-Width Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-max"
            style={{
              display: "flex",
              animation: "loop-scroll 20s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex flex-shrink-0 px-12">
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="max-h-16 w-auto"
                  width={210}
                  height={30}
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-15">
          <RoundedButton
            bgColor="bg-black"
            hoverColor="hover:bg-gray-800"
            width="w-[200px]"
            textSize="text-md"
          >
            How We Work
          </RoundedButton>
        </div>
      </div>

      {/* Optimized Keyframes */}
      <style jsx>{`
        @keyframes loop-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselSection;
