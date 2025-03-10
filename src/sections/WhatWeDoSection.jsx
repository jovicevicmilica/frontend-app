import RoundedButton from "../widgets/RoundedButton";
import ImageWithBackground from "../widgets/ImageWithBackground";

export default function WhatWeDoSection() {
  return (
    <section className="px-7 sm:px-12 md:px-12 lg:px-24 2xl:px-30 py-5 md:py-20 2xl:py-30 overflow-x-hidden mb-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-3 mb-20 items-center">
        {/* Left: Text */}
        <div className="max-w-lg sm:max-w-[90%] mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-base mt-5 md:text-lg lg:text-xl 2xl:text-2xl font-semibold text-gray-700 mb-3">
            What we do
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-black leading-tight mb-4">
            Data-Driven B2B Marketing from Strategy to Execution
          </h2>
          <p className="text-black text-sm md:text-base xl:text-md 2xl:text-lg mt-4">
            Get a world-class marketing strategy, and a scale-to-market team to
            help you execute that strategy to get you to your revenue targets
            faster.
          </p>
          <a href="/how-we-work">
            <RoundedButton
              mt="mt-6 md:mt-8"
              textSize="text-sm md:text-base xl:text-lg"
              width="w-[200px] sm:w-[250px] md:w-[230px]"
            >
              How We Work
            </RoundedButton>
          </a>
        </div>

        {/* Right: Responsive Image */}
        <div className="flex justify-center md:justify-end mt-5 mr-3 ml-3 sm:mr-5 sm:ml-5 md:mr-8 md:ml-8 lg:mr-5 lg:ml-5 2xl:m-0">
          <ImageWithBackground
            bgSrc="/assets/bg-photo.avif"
            imgSrc="/assets/marketing-person.avif"
            alt="Data-driven marketing expert planning B2B strategy"
            position="bottom-7 left-1/2 transform -translate-x-1/3 2xl:bottom-8 2xl:right-1/2 2xl:transform 2xl:-translate-x-1/6"
            imgPosition="right-1/7 top-1/7"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-30 items-center mt-10 md:mt-20 mr-3 ml-3 sm:mr-5 sm:ml-5 md:mr-8 md:ml-8 lg:mr-5 lg:ml-5 2xl:m-0">
        {/* Left: Responsive Image */}
        <div className="flex justify-center md:justify-start sm:mt-10">
          <ImageWithBackground
            bgSrc="/assets/bg-photo.avif"
            imgSrc="/assets/teamwork.avif"
            alt="Business Meeting"
            position="bottom-5 right-1/2 transform translate-x-1/3 2xl:bottom-8 2xl:right-1/2 2xl:transform 2xl:translate-x-1/6"
            imgPosition="left-1/7 top-1/7"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left mx-auto md:mx-0 sm:mt-3 lg:mt-5">
          <h1 className="text-base mt-5 md:text-lg lg:text-xl 2xl:text-2xl font-semibold text-gray-700 mb-3 lg:mt-20 2xl:mt-30">
            Who we are
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-black leading-tight mb-4">
            Scale Quicker
          </h2>
          <p className="text-black text-sm md:text-base xl:text-md 2xl:text-lg mt-4 max-w-md">
            We’re a full-service agency that supports your business to grow,
            drive high-quality leads, and support your sales team to convert
            those leads to exceed your revenue targets.
          </p>
          <RoundedButton
            mt="mt-6 md:mt-8"
            textSize="text-sm md:text-base xl:text-lg"
            width="w-[200px] sm:w-[250px] md:w-[220px]"
          >
            More About Us
          </RoundedButton>
        </div>
      </div>
    </section>
  );
}
