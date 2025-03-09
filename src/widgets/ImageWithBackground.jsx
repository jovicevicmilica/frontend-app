export default function ImageWithBackground({
  bgSrc,
  imgSrc,
  alt,
  position, // Controls the background image positioning
  imgPosition, // Controls the second image positioning (optional)
  justifyContent,
}) {
  return (
    <div
      className={`relative flex ${
        justifyContent ? `justify-${justifyContent}` : ""
      }`}
    >
      {/* Background Image */}
      <img
        src={bgSrc}
        alt="Background"
        className={`absolute ${position} rounded-2xl z-0 w-[450px] h-[330px] object-cover mr-0`}
      />

      {/* Foreground Image (with optional positioning) */}
      <img
        src={imgSrc}
        alt={alt}
        className={`relative rounded-2xl shadow-lg z-10 w-[450px] h-[350px] object-cover mt-
             ${imgPosition || ""} mr-0`}
      />
    </div>
  );
}
