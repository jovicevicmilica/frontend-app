import Image from "next/image";
import RoundedButton from "@/widgets/RoundedButton";

export default function ApproachSection() {
  return (
    <section className="relative min-h-screen bg-[#181818] text-white px-4 sm:px-12 md:px-10 py-12 sm:py-20 lg:py-24 lg:px-24 flex flex-col font-poppins">
      {/* White stripe on the right (Hidden on Small Screens) */}
      <div className="absolute top-0 right-0 w-[20px] md:w-[30px] lg:w-[40px] xl:w-[40px] 2xl:w-[60px] h-full bg-white hidden sm:block"></div>

      {/* Background Text - Our Approach (Scales Down for Phones) */}
      <span
        className="text-[13vw] lg:text-[14vw] xl:text-[12vw] font-semibold text-white opacity-30 absolute leading-10 md:leading-27 lg:leading-32 2xl:top-20 2xl:leading-50 lg:px-24 top-10 left-10 sm:top-15 lg:top-0 lg:left-0 lg:mt-20 right-0 text-start"
        aria-hidden="true"
      >
        Our Approach
      </span>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row relative mt-20">
        {/* Left Content */}
        <div className="w-full text-center md:text-left px-4">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold leading-tight xl:mt-10">
            Data-Driven Decision-
            <br />
            making for B2B marketing.
          </h1>
          <div className="mt-6 sm:mt-10">
            <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-[10px] md:text-base xl:text-md 2xl:text-lg">
              Our data-first approach allows us to take small and growing
              businesses and help them compete with significantly larger
              competitors. Our marketing strategy, data hub, and execution teams
              provide clear, actionable strategies to increase revenue with
              execution support.
            </p>
            <RoundedButton
              mt="mt-6 md:mt-8"
              textSize="text-sm md:text-base xl:text-lg"
              width="w-[200px] sm:w-[250px] md:w-[230px]"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              How We Work
            </RoundedButton>
          </div>
        </div>

        {/* Right: Responsive Image */}
        <div className="relative w-full flex justify-center md:justify-end mt-10 md:mt-10 lg:mt-20">
          <div className="w-full sm:w-[80%] md:w-[90%] lg:w-[100%]">
            <Image
              src="/assets/iceberg-refl.avif"
              alt="B2B marketing strategy iceberg showcasing deep data-driven insights"
              width={700}
              height={500}
              className="object-cover mix-blend-lighten w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center flex items-center flex-col mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold relative mb-10">
          Powered by Data
        </h2>
        <p className="mt-4 text-white font-semibold max-w-md sm:max-w-[300px] md:max-w-[500px] mx-auto text-sm md:text-base xl:text-md 2xl:text-lg">
          We create your company's digital marketing 'Big Brain' to ingest{" "}
          <em>all</em> data for predictable revenue growth.
        </p>
        {/* Wrapper for Image and Floating Container */}
        <div className="relative w-full flex justify-center mt-12 sm:mt-10 pr-4 sm:pr-12 lg:pr-30 mb-30">
          {/* Data Stream Image (Scales Responsively) */}
          <div className="relative w-full max-w-[700px] sm:max-w-[850px] md:max-w-[1000px] lg:max-w-[1200px] aspect-[2.5]">
            <Image
              src="/assets/data-stream.avif"
              alt="Data Stream B2B Mar"
              width={1000}
              height={450}
              className="w-[90%] sm:w-[80%] xl:w-[70%] h-full object-cover filter grayscale rounded-xl"
              loading="lazy"
            />

            {/* Blue Overlapping Container */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/3 lg:-translate-x-1/15 -translate-y-1/60 bg-[#496bef] text-white rounded-xl shadow-lg flex flex-col p-6 sm:p-8 md:p-8 
lg:p-12 w-[80%] lg:w-[65%] 2xl:w-[65%] h-auto z-10 justify-between lg:gap-10"
            >
              <p className="font-normal text-[10px] sm:text-base md:text-base lg:text-base xl:text-lg text-left lg:leading-relaxed">
                Marketing in today's world is a science. We create your
                personalized data center that allows you to understand how your
                marketing efforts translate into revenue.
              </p>
              <RoundedButton
                mt="mt-4"
                textSize="text-[10px] sm:text-[13px] md:text-base lg:text-lg xl:text-xl"
                bgColor="bg-black"
                hoverColor="hover:bg-gray-800"
                width="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
              >
                Data Driving B2B Marketing
              </RoundedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
