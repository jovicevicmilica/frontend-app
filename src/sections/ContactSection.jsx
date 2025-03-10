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
      className={`flex flex-col md:flex-row justify-between items-center gap-12 px-7 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-16 md:py-24 ${bgColor} font-poppins`}
    >
      {/* ✅ Left Side - Text & Social Media (Mobile: Full Width, Desktop: Left Column) */}
      <div className="flex flex-col w-full md:w-1/2 items-center md:items-start text-center md:text-left">
        {/* ✅ Title (1st) */}
        <h2
          className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold mb-6 ${
            isDark ? "text-white" : textColor
          }`}
        >
          Get in touch with us
        </h2>

        {/* ✅ Paragraph (2nd) */}
        <p
          className={`text-sm sm:text-base md:text-lg ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Need help with your branding, marketing, or design? Reach out to us,
          and we’ll get back within 24 hours.
        </p>

        {/* ✅ Social Media (Last on Mobile, Under Paragraph on Desktop) */}
        {showIcons && (
          <div className="mt-8 md:mt-10">
            {isDark && (
              <p className="text-white font-semibold text-sm md:text-lg mb-4">
                Follow Us on Social Media
              </p>
            )}
            <div className="flex justify-center md:justify-start gap-6">
              {[
                { name: "Twitter", icon: "twitter" },
                { name: "Instagram", icon: "instagram" },
                { name: "LinkedIn", icon: "linkedin" },
              ].map((platform) => (
                <a
                  key={platform.icon}
                  href={`https://www.${platform.icon}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${platform.name}`}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                >
                  <Image
                    src={`/assets/${platform.icon}.avif`}
                    alt={`${platform.name} logo`}
                    width={48}
                    height={48}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ✅ Right Side - Form (Mobile: Comes Before Social Media, Desktop: Right Column) */}
      <form
        className="w-full md:w-1/2 max-w-md flex flex-col gap-4 items-center self-center"
        aria-label="Contact Form"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          required
          className={`w-[85%] sm:w-[80%] md:w-[100%] mx-auto px-4 py-2 sm:px-5 sm:py-3 border rounded-full text-sm sm:text-base md:text-lg focus:outline-none transition-all ${
            isDark
              ? "bg-white text-black placeholder-gray-400"
              : "border-black bg-white text-black placeholder-gray-600"
          }`}
        />

        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          className={`w-[85%] sm:w-[80%] md:w-[100%] mx-auto px-4 py-2 sm:px-5 sm:py-3 border rounded-full text-sm sm:text-base md:text-lg focus:outline-none transition-all ${
            isDark
              ? "bg-white text-black placeholder-gray-400"
              : "border-black bg-white text-black placeholder-gray-600"
          }`}
        />

        <RoundedButton
          mt="mt-6 md:mt-8"
          textSize="text-sm md:text-base xl:text-lg"
          width="w-[200px] sm:w-[250px] md:w-[230px]"
        >
          Let's Chat
        </RoundedButton>
      </form>
    </section>
  );
}
