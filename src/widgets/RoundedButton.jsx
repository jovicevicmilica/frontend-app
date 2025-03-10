"use client";

export default function RoundedButton({
  children,
  mt = "mt-0",
  textSize = "text-lg",
  textColor = "text-white",
  bgColor = "bg-[#496bef]",
  hoverColor = "hover:bg-blue-700",
  width = "w-full sm:w-auto",
  height = "h-[41px]",
  paddingx = "px-6",
  paddingy = "py-2",
}) {
  return (
    <button
      className={`rounded-full font-poppins font-normal transition cursor-pointer ${paddingx} ${paddingy} ${mt} ${bgColor} ${hoverColor} ${textSize} ${textColor} ${width} ${height} inline-block`}
    >
      {children}
    </button>
  );
}
