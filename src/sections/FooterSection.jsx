"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FooterSection() {
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    "B2B Marketing",
    "Go-to-Market Strategy",
    "Market Expansion",
    "Growth Marketing",
    "CMO & Marketing Strategy",
    "Data & AI",
    "High Intent Lead Generation",
    "CAC & LTV Optimization",
    "Paid & Performance Marketing",
    "Conversion Rate Optimization (CRO)",
    "Sales Team Enablement",
    "Content & SEO",
    "Branding",
  ];

  const industries = ["B2B", "Direct to Consumer", "Consumer Services"];

  const solutions = [
    "Paid Media",
    "Performance Marketing",
    "Paid Media, Paid Social",
    "Earned Media: Public Relations",
    "Influencer & Affiliate Marketing",
    "Owned Media: SEO, Social Media",
    "Branding, Email & SMS",
    "Content Marketing, CRO",
  ];

  return (
    <footer
      role="contentinfo"
      className="bg-[#181818] text-white px-7 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-10 lg:py-16 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* ✅ Left Side - Logo */}
        <div className="flex-shrink-0 md:mr-20 mt-5 md:mt-10 mb-10">
          <Image
            src="/assets/logow.svg"
            alt="MxD Marketing Logo - Data-Driven B2B Growth Experts"
            width={240}
            height={60}
            className="w-60 h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* ✅ Right Side - Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl whitespace-nowrap mt-8 md:mt-0">
          {/* ✅ Services Section */}
          <nav aria-label="B2B Marketing Services" className="max-w-[300px]">
            <h3 className="text-lg lg:text-2xl font-semibold mb-3 text-wrap break-text">
              Services
            </h3>
            <ul className="text-gray-400 text-md space-y-2 leading-relaxed">
              {(isLargeScreen || showServices
                ? services
                : services.slice(0, 3)
              ).map((service) => (
                <li key={service}>
                  <a
                    href={`/services/${service
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            {!isLargeScreen && (
              <button
                className="text-gray-400 text-sm hover:text-white mt-2 block"
                onClick={() => setShowServices(!showServices)}
              >
                {showServices ? "See Less <" : "See All >"}
              </button>
            )}
          </nav>

          {/* ✅ Industries Section */}
          <nav aria-label="Industries We Serve" className="max-w-[300px]">
            <h3 className="text-lg lg:text-2xl font-semibold mb-3">
              Verticles
            </h3>
            <ul className="text-gray-400 text-md space-y-2 leading-relaxed">
              {(isLargeScreen || showIndustries
                ? industries
                : industries.slice(0, 2)
              ).map((vertical) => (
                <li key={vertical}>
                  <a
                    href={`/industries/${vertical
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {vertical}
                  </a>
                </li>
              ))}
            </ul>
            {!isLargeScreen && (
              <button
                className="text-gray-400 text-sm hover:text-white mt-2 block"
                onClick={() => setShowIndustries(!showIndustries)}
              >
                {showIndustries ? "See Less <" : "See All >"}
              </button>
            )}
          </nav>

          {/* ✅ Marketing Solutions Section */}
          <nav aria-label="Marketing Solutions" className="max-w-[300px]">
            <h3 className="text-lg lg:text-2xl font-semibold mb-3 text-wrap break-text">
              Marketing Solutions
            </h3>
            <ul className="text-gray-400 text-md leading-relaxed space-y-2">
              {(isLargeScreen || showSolutions
                ? solutions
                : solutions.slice(0, 3)
              ).map((solution) => (
                <li key={solution}>
                  <a
                    href={`/marketing-solutions/${solution
                      .toLowerCase()
                      .replace(/[^a-zA-Z]+/g, "-")}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
            {!isLargeScreen && (
              <button
                className="text-gray-400 text-sm hover:text-white mt-2 block"
                onClick={() => setShowSolutions(!showSolutions)}
              >
                {showSolutions ? "See Less <" : "See All >"}
              </button>
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
