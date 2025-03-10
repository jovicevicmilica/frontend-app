import Image from "next/image";

export default function ImageWithBackground({
  bgSrc,
  imgSrc,
  alt,
  position, // Background positioning
  imgPosition = "", // Foreground positioning
  justifyContent = "center",
}) {
  return (
    <div className={`relative flex justify-${justifyContent} w-full`}>
      {/* Background Image */}
      <div
        className={`absolute ${position} rounded-2xl z-0 w-[80%] sm:w-[70%] md:w-[100%] lg:w-[80%] 2xl:w-[60%] h-[210px] sm:h-[300px] md:h-[300px] 2xl:h-[350px]`}
      >
        <Image
          src={bgSrc}
          alt="Background"
          fill
          className="object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      {/* Foreground Image */}
      <div
        className={`relative rounded-2xl shadow-lg z-10 w-[80%] sm:w-[70%] md:w-[100%] lg:w-[80%] 2xl:w-[60%] h-[210px] sm:h-[300px] md:h-[300px] 2xl:h-[350px] ${imgPosition}`}
      >
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover rounded-2xl"
          loading="lazy"
        />
      </div>
    </div>
  );
}
