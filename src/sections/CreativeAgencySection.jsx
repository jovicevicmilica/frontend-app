"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Briefcase, Layers, Megaphone } from "lucide-react";
import ServiceListWidget from "../widgets/ServiceListWidget";
import RoundedButton from "../widgets/RoundedButton";

export default function CreativeAgencySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* ✅ Header Section */}
      <header
        role="banner"
        className="box-border flex items-center justify-between px-4 md:px-5 lg:px-12 h-[80px] md:h-[100px] lg:h-[135px] 2xl:h-[160px] bg-white shadow-md"
      >
        {/* ✅ Logo */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Go to MxD Home">
            <Image
              src="/assets/logo.avif"
              alt="MxD Creative Agency - Branding & Marketing Experts"
              width={150}
              height={60}
              priority
              className="w-[100px] md:w-[120px] lg:w-[150px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* ✅ Desktop Navigation */}
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-3 md:gap-5 lg:gap-8"
        >
          <ServiceListWidget />
          <RoundedButton
            textSize="text-sm md:text-sm lg:text-base"
            width="min-w-[120px] md:min-w-[140px] lg:min-w-[180px]"
            bgColor="bg-[#496bef]"
            hoverColor="hover:bg-blue-700"
          >
            Work With Us
          </RoundedButton>
        </nav>

        {/* ✅ Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-labelledby="mobile-menu-title"
        aria-hidden={!isOpen}
        tabIndex="-1"
        className={`fixed top-0 right-0 h-full w-3/4 md:w-1/2 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 p-5 md:p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Menu Items */}
        <div className="flex flex-col items-start gap-5 mt-14 text-base md:text-lg xl:text-xl font-medium">
          <Link
            href="/services"
            className="flex items-center gap-2 hover:text-gray-700"
          >
            <Briefcase size={18} className="text-gray-600" />
            Services
          </Link>
          <Link
            href="/verticals"
            className="flex items-center gap-2 hover:text-gray-700"
          >
            <Layers size={18} className="text-gray-600" />
            Verticles
          </Link>
          <Link
            href="/marketing"
            className="flex items-center gap-2 hover:text-gray-700"
          >
            <Megaphone size={18} className="text-gray-600" />
            Marketing Solutions
          </Link>
        </div>

        {/* "Work With Us" Button */}
        <RoundedButton
          mt="mt-8"
          textSize="text-sm md:text-base xl:text-md"
          width="w-[140px] md:w-[200px]"
          bgColor="bg-[#496bef]"
          hoverColor="hover:bg-blue-700"
        >
          Work With Us
        </RoundedButton>
      </div>
    </div>
  );
}
