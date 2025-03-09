export default function RoundedButton({
  children,
  mt = "mt-0", // Default Tailwind class
  textSize = "text-lg",
  textColor = "text-white",
  bgColor = "bg-[#496bef]",
  hoverColor = "hover:bg-blue-700",
  width = "min-w-[180px]",
  height = "h-[41px]",
}) {
  return (
    <button
      className={`px-6 py-2 rounded-full font-poppins font-normal transition cursor-pointer ${mt} ${bgColor} ${hoverColor} ${textSize} ${textColor} ${width} ${height} inline-block whitespace-nowrap`}
    >
      {children}
    </button>
  );
}
