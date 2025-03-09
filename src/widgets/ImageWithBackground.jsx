import Image from "next/image";

export default function ImageWithBackground({
  bgSrc,
  imgSrc,
  alt,
  position, // Controls the background image positioning
  imgPosition = "", // Controls the second image positioning (optional)
  justifyContent = "center",
}) {
  return (
    <div className={`relative flex justify-${justifyContent}`}>
      {/* Background Image */}
      <div
        className={`absolute ${position} rounded-2xl z-0 w-[450px] h-[330px]`}
      >
        <Image
          src={bgSrc}
          alt="Background"
          fill // Makes the image fill the parent div
          className="object-cover rounded-2xl"
          priority // Ensures it loads faster
        />
      </div>

      {/* Foreground Image (with optional positioning) */}
      <div
        className={`relative rounded-2xl shadow-lg z-10 w-[450px] h-[350px] ${imgPosition}`}
      >
        <Image
          src={imgSrc}
          alt={alt}
          fill // Makes it responsive inside the parent div
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
