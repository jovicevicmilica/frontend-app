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
            className="w-60 h-auto object-contain"
          />
        </div>

        {/* Right Side - Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 max-w-4xl whitespace-nowrap mt-8 md:mt-0">
          {/* Services Section */}
          <div className="max-w-[300px]">
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="text-gray-400 space-y-2 leading-relaxed" role="list">
              <li role="listitem">B2B Marketing</li>
              <li role="listitem">Go-to-Market Strategy</li>
              <li role="listitem">Market Expansion</li>
              <li role="listitem">Growth Marketing</li>
              <li role="listitem">CMO & Marketing Strategy</li>
              <li role="listitem">Data & AI</li>
              <li role="listitem">High Intent Lead Generation</li>
              <li role="listitem">CAC & LTV Optimisation</li>
              <li role="listitem">Paid & Performance Marketing</li>
              <li role="listitem">Conversion Rate Optimisation (CRO)</li>
              <li role="listitem">Sales Team Enablement</li>
              <li role="listitem">Content & SEO</li>
              <li role="listitem">Branding</li>
            </ul>
          </div>

          {/* Verticles Section */}
          <div className="max-w-[300px]">
            <h3 className="text-lg font-semibold mb-3">Verticles</h3>
            <ul className="text-gray-400 space-y-2 leading-relaxed" role="list">
              <li role="listitem">B2B</li>
              <li role="listitem">Direct to Consumer</li>
              <li role="listitem">Consumer Services</li>
            </ul>
          </div>

          {/* Marketing Solutions Section */}
          <div className="max-w-[300px] whitespace-pre-line">
            <h3 className="text-lg font-semibold mb-3">Marketing Solutions</h3>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li role="listitem">Paid Media</li>
              <li role="listitem">
                Performance Marketing, Paid Media, Paid Social
              </li>
              <li role="listitem">Earned Media:</li>
              <li role="listitem">Public relations, Influencer, Affiliate</li>
              <li role="listitem">Owned Media:</li>
              <li role="listitem">
                SEO, Social Media, Branding, Email & SMS, Content Marketing, CRO
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
