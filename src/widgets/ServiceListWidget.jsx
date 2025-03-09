"use client"; // Ensures it works in Next.js App Router

import { memo } from "react";
import { ChevronDown } from "lucide-react"; // Import arrow icons

const ServiceListWidget = () => {
  const menuItems = ["Services", "Verticals", "Marketing Solutions"];

  return (
    <nav className="box-border flex flex-row gap-3 md:gap-[40px] items-center justify-end">
      {menuItems.map((item, index) => (
        <p
          key={index}
          role="button"
          aria-label={`Open ${item} menu`}
          className="flex items-center gap-2 font-poppins font-normal text-lg text-black cursor-pointer"
        >
          {item} <ChevronDown className="w-5 h-5 relative top-[1px]" />
        </p>
      ))}
    </nav>
  );
};

export default memo(ServiceListWidget); // Optimized with React.memo
