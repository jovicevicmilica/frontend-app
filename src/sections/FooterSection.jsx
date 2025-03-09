"use client";

import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-[#181818] text-white px-8 md:px-20 py-10 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Side - Logo */}
        <div className="flex-shrink-0 md:mr-20 mt-5 md:mt-10">
          <Image
            src="/assets/logow.svg"
            alt="MxD Logo"
            width={240}
            height={60}
            className="w-60 h-auto"
          />
        </div>

        {/* Right Side - Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 max-w-4xl whitespace-nowrap mt-8 md:mt-0">
          {/* Services Section */}
          <div className="max-w-[300px]">
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="text-gray-400 space-y-2 leading-relaxed">
              <li>B2B Marketing</li>
              <li>Go-to-Market Strategy</li>
              <li>Market Expansion</li>
              <li>Growth Marketing</li>
              <li>CMO & Marketing Strategy</li>
              <li>Data & AI</li>
              <li>High Intent Lead Generation</li>
              <li>CAC & LTV Optimisation</li>
              <li>Paid & Performance Marketing</li>
              <li>Conversion Rate Optimisation (CRO)</li>
              <li>Sales Team Enablement</li>
              <li>Content & SEO</li>
              <li>Branding</li>
            </ul>
          </div>

          {/* Verticles Section */}
          <div className="max-w-[300px]">
            <h3 className="text-lg font-semibold mb-3">Verticles</h3>
            <ul className="text-gray-400 space-y-2 leading-relaxed">
              <li>B2B</li>
              <li>Direct to Consumer</li>
              <li>Consumer Services</li>
            </ul>
          </div>

          {/* Marketing Solutions Section */}
          <div className="max-w-[300px] whitespace-pre-line">
            <h3 className="text-lg font-semibold mb-3">Marketing Solutions</h3>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>Paid Media</li>
              <li>Performance Marketing, Paid Media, Paid Social</li>
              <li>Earned Media:</li>
              <li>Public relations, Influencer, Affiliate</li>
              <li>Owned Media:</li>
              <li>
                SEO, Social Media, Branding, Email & SMS, Content Marketing, CRO
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
