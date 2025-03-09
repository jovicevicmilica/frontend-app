"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Import icons
import ServiceListWidget from "../widgets/ServiceListWidget";
import RoundedButton from "../widgets/RoundedButton";

export default function CreativeAgencySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="box-border flex items-start pt-8 justify-between px-6 md:px-12 lg:px-10 h-[135px] bg-white shadow-md">
        {/* Left Side (Logo) */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/logo.avif"
              alt="Creative Agency"
              width={156}
              height={50}
              priority
              className="w-full h-auto object-cover"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 pt-2">
          <ServiceListWidget />
          <RoundedButton className="px-6 md:px-8 min-w-[160px]">
            Work With Us
          </RoundedButton>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-[140px] right-6 bg-white shadow-lg rounded-lg p-4 w-48 flex flex-col space-y-4 animate-fadeIn">
            <ServiceListWidget />
            <RoundedButton>Work With Us</RoundedButton>
          </div>
        )}
      </header>
    </div>
  );
}
