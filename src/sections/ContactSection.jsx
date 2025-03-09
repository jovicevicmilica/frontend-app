import Image from "next/image";
import RoundedButton from "../widgets/RoundedButton";

export default function ContactSection({
  bgColor = "bg-white",
  textColor = "text-black",
  showIcons = false,
}) {
  const isDark = bgColor === "bg-[#181818]";

  return (
    <section
      className={`flex flex-col md:flex-row justify-between items-center px-6 md:px-36 py-24 ${bgColor} font-poppins`}
    >
      {/* Left Side - Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <h2
          className={`text-4xl md:text-5xl font-semibold mb-6 ${
            isDark ? "text-white" : textColor
          }`}
        >
          Get in touch with us
        </h2>
        <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          Marem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>

        {/* Social Media Section */}
        {showIcons && (
          <div className="mt-8">
            {isDark && (
              <p className="text-white font-semibold text-xl mb-4">
                Follow Us on Social Media
              </p>
            )}
            <div className="flex justify-center md:justify-start gap-4">
              {["twitter", "instagram", "linkedin"].map((platform) => (
                <a key={platform} href="#" className="w-8 h-8">
                  <Image
                    src={`/assets/${platform}.avif`}
                    alt={platform}
                    width={32}
                    height={32}
                    className="w-full h-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Side - Form Section */}
      <form className="mt-10 md:mt-0 flex flex-col gap-5 w-full max-w-md mr-20 items-center">
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          className={`w-full px-5 py-3 border rounded-full focus:outline-none ${
            isDark
              ? "bg-white text-black placeholder-gray-400"
              : "border-black bg-white text-black placeholder-gray-600"
          }`}
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          className={`w-full px-5 py-3 border rounded-full focus:outline-none ${
            isDark
              ? "bg-white text-black placeholder-gray-400"
              : "border-black bg-white text-black placeholder-gray-600"
          }`}
        />
        <RoundedButton
          bgColor="bg-[#496bef]" // Always blue
          hoverColor="hover:bg-blue-700"
          mt="mt-3"
          width="w-[200px] md:w-[250px]"
        >
          Let’s Chat
        </RoundedButton>
      </form>
    </section>
  );
}
