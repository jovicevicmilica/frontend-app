import Image from "next/image";
import RoundedButton from "./RoundedButton";

export default function ImageWithOverlay({
  bgSrc,
  bgWidth = "w-[450px]",
  bgHeight = "h-[330px]",
  boxWidth = "w-[450px]",
  boxHeight = "h-[350px]",
  text = "",
  buttonText = "",
}) {
  return (
    <div className="relative flex justify-center items-center">
      {/* Background Image with Grayscale Filter */}
      <div
        className={`absolute right-30 rounded-2xl z-0 ${bgWidth} ${bgHeight}`}
      >
        <Image
          src={bgSrc}
          alt="" // Decorative image (aria-hidden)
          width={700}
          height={350}
          className="w-full h-full object-cover rounded-2xl filter grayscale"
          aria-hidden="true"
        />
      </div>

      {/* Blue Rectangle with Text and Button */}
      <div
        className={`relative top-30 left-40 bg-[#496bef] text-white rounded-2xl shadow-lg flex flex-col p-10 justify-between ${boxWidth} ${boxHeight}`}
      >
        <p className="font-normal text-sm text-left">{text}</p>
        <RoundedButton
          mt="mt-4"
          textSize="text-sm"
          bgColor="bg-black"
          hoverColor="hover:bg-gray-800"
          width="w-[300px]"
        >
          {buttonText}
        </RoundedButton>
      </div>
    </div>
  );
}
