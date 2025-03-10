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
    <section className="w-screen bg-white py-12 overflow-hidden font-poppins">
      <div className="mx-auto text-center w-full">
        {/* ✅ Add Semantic H2 for SEO */}

        <h1 className="text-xl text-gray-700 mb-10 font-semibold font-poppins px-8 md:px-0">
          We help businesses like yours grow revenue profitability
        </h1>

        {/* ✅ Add Accessible Carousel Container */}
        <div
          role="region"
          aria-label="Trusted Brands"
          className="relative w-full overflow-hidden"
        >
          <div
            className="flex w-max"
            style={{
              display: "flex",
              animation: "loop-scroll 20s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex flex-shrink-0 px-5 md:px-12">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-12 md:max-h-16 w-auto"
                  width={210}
                  height={30}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <RoundedButton
            mt="mt-6 md:mt-8"
            textSize="text-sm md:text-base xl:text-lg"
            width="w-[200px] sm:w-[250px] md:w-[230px]"
            aria-label="Hear how we work"
            bgColor="bg-black"
            hoverColor="hover:bg-gray-500"
          >
            How We Work
          </RoundedButton>
        </div>
      </div>

      {/* ✅ Optimized Keyframes for SEO & Performance */}
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
    </section>
  );
};

export default CarouselSection;
