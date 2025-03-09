"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#181818] text-white px-8 md:px-20 py-10 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* ✅ Left Side - Logo */}
        <div className="flex-shrink-0 md:mr-20 mt-5 md:mt-10">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 max-w-4xl whitespace-nowrap mt-8 md:mt-0">
          {/* ✅ Services Section with <nav> */}
          <nav aria-label="B2B Marketing Services" className="max-w-[300px]">
            <h3 className="text-lg font-semibold mb-3">
              Our B2B Marketing Services
            </h3>
            <ul className="text-gray-400 space-y-2 leading-relaxed">
              {[
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
              ].map((service) => (
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
          </nav>

          {/* ✅ Verticals Section with <nav> */}
          <nav aria-label="Industries We Serve" className="max-w-[300px]">
            <h3 className="text-lg font-semibold mb-3">Industries We Serve</h3>
            <ul className="text-gray-400 space-y-2 leading-relaxed">
              {["B2B", "Direct to Consumer", "Consumer Services"].map(
                (vertical) => (
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
                )
              )}
            </ul>
          </nav>

          {/* ✅ Marketing Solutions Section with <nav> */}
          <nav
            aria-label="Marketing Solutions"
            className="max-w-[300px] whitespace-pre-line"
          >
            <h3 className="text-lg font-semibold mb-3">
              Comprehensive Marketing Solutions
            </h3>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              {[
                "Paid Media",
                "Performance Marketing, Paid Media, Paid Social",
                "Earned Media: Public Relations, Influencer, Affiliate",
                "Owned Media: SEO, Social Media, Branding, Email & SMS, Content Marketing, CRO",
              ].map((solution) => (
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
          </nav>
        </div>
      </div>
    </footer>
  );
}
