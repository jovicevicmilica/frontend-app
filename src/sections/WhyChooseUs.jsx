"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const headingsRef = useRef([]); // Stores references to h3 elements
  const [dotPositions, setDotPositions] = useState([]); // Stores Y-positions of dots

  // ✅ Function to update dot positions based on h3 positions
  const updateDotPositions = () => {
    if (headingsRef.current.length > 0) {
      const positions = headingsRef.current.map((h3) =>
        h3
          ? h3.getBoundingClientRect().top -
            headingsRef.current[0].getBoundingClientRect().top
          : 0
      );
      setDotPositions(positions);
    }
  };

  // ✅ Run effect on mount and resize
  useLayoutEffect(() => {
    updateDotPositions(); // Initial calculation
    window.addEventListener("resize", updateDotPositions);

    // ✅ Observe changes in element size
    const observer = new ResizeObserver(() => {
      updateDotPositions();
    });

    headingsRef.current.forEach((h3) => h3 && observer.observe(h3));

    return () => {
      window.removeEventListener("resize", updateDotPositions);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center py-20 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 text-white font-poppins overflow-hidden">
      {/* ✅ Fixed Grayscale Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/assets/whale.avif"
          alt="Grayscale background of a whale representing scalability and growth"
          fill
          className="object-cover w-full h-full filter grayscale"
          loading="lazy"
        />
      </div>

      {/* ✅ Title */}
      <h2 className="relative text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-center mb-3 z-10">
        Why Scaling Businesses Choose MxD
      </h2>

      {/* ✅ Responsive Content Section */}
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-start mt-12 z-10">
        {/* ✅ Left Text Section */}
        <div className="w-full md:w-1/2 space-y-6 sm:space-y-10 md:space-y-12 md:pr-10 relative">
          {[
            {
              title: "Teams of Experts Under One Roof",
              description:
                "We offer comprehensive marketing support from strategy to execution. Make decisions with a clear picture of your growth—where it is today and where it needs to go.",
            },
            {
              title: "Expertise and Dedicated Support",
              description:
                "Get marketing expertise that is focused on helping you reach your goals. Get a dedicated MxD marketing team with expertise across industries, size, and stage.",
            },
            {
              title: "A Partner That Grows With You",
              description:
                "We match our engagement and level of support to your business needs. Whether you’re just starting out or scaling quickly, we’re here to partner with you at every stage of your journey.",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col relative">
              {/* ✅ Horizontal Line Between Sections on Small Screens */}
              {index > 0 && (
                <div className="border-t-2 border-blue-500 w-full my-4 sm:my-6 md:hidden"></div>
              )}

              {/* ✅ Heading */}
              <h3
                ref={(el) => {
                  if (el) {
                    headingsRef.current[index] = el;
                  }
                }}
                className="text-xl sm:text-2xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold mb-3 sm:mb-4 leading-normal"
              >
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base xl:text-md 2xl:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Fixed Vertical Timeline (Blue Line & Dots) */}
        <div className="hidden md:flex flex-col items-center w-1/5 relative mt-2">
          {/* ✅ Vertical Line */}
          {dotPositions.length > 0 && (
            <div
              className="absolute w-[2px] bg-blue-500 top-0"
              style={{
                height: `${dotPositions[dotPositions.length - 1] + 10}px`, // Adjusted to +10px for better alignment
              }}
              aria-hidden="true"
            />
          )}

          {/* ✅ Dots Aligned with h3 Positions */}
          {dotPositions.map((pos, index) => (
            <div
              key={index}
              className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
              style={{ top: `${pos}px` }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* ✅ Right Side (Empty for Layout Balance on Large Screens) */}
        <div className="hidden md:block w-1/2" />
      </div>
    </section>
  );
}
