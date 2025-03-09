"use client"; // Ensures it works in Next.js App Router

import { memo } from "react";
import { ChevronDown } from "lucide-react"; // Import arrow icons

const ServiceListWidget = () => {
  const menuItems = ["Services", "Verticals", "Marketing Solutions"];

  return (
    <div className="box-border flex flex-row gap-3 md:gap-[40px] items-center justify-end">
      {menuItems.map((item, index) => (
        <p
          key={index}
          className="flex items-center gap-2 font-poppins font-normal text-lg text-black cursor-pointer"
        >
          {item} <ChevronDown className="w-5 h-5 relative top-[1px]" />
        </p>
      ))}
    </div>
  );
};

export default memo(ServiceListWidget); // Optimized with React.memo
