import Image from "next/image";
import RoundedButton from "@/widgets/RoundedButton";

export default function ApproachSection() {
  return (
    <section className="relative min-h-screen bg-[#181818] text-white px-4 sm:px-12 md:px-10 py-12 sm:py-20 lg:py-24 lg:px-24 flex flex-col font-poppins">
      {/* White stripe on the right (Hidden on Small Screens) */}
      <div className="absolute top-0 right-0 w-[30px] md:w-[40px] lg:w-[50px] xl:w-[60px] 2xl:w-[70px] h-full bg-white hidden sm:block"></div>

      {/* Background Text - Our Approach (Scales Down for Phones) */}
      <span
        className="text-[2.7rem] sm:text-[5rem] md:text-[7rem] lg:text-[11rem] 2xl:text-[15rem] font-semibold text-white opacity-10 absolute leading-10 md:leading-27 lg:leading-32 2xl:top-20 2xl:leading-50 lg:px-24 top-8 left-12 sm:top-15 lg:top-0 lg:left-0 lg:mt-20 right-0 text-start"
        aria-hidden="true"
      >
        Our Approach
      </span>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row relative mt-11 sm:mt-3 md:mt-40 lg:mt-50 xl:mt-20 2xl:mt-40">
        {/* Left Content */}
        <div className="w-full text-center md:text-left px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold leading-tight">
            Data-Driven Decision-
            <br />
            making for B2B marketing.
          </h2>
          <div className="mt-6 sm:mt-10">
            <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm md:text-base lg:max-w-full xl:text-md 2xl:text-lg">
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
            >
              How We Work
            </RoundedButton>
          </div>
        </div>

        {/* Right: Responsive Image */}
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-lg mx-auto md:ml-auto mt-10 md:mt-10 lg:mt-20">
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

      {/* Middle Section */}
      <div className="text-center mt-12 sm:mt-16">
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold relative">
          Powered by Data
        </h2>
        <p className="mt-4 text-white font-semibold max-w-md sm:max-w-[300px] md:max-w-[500px] mx-auto text-sm md:text-base xl:text-md 2xl:text-lg">
          We create your company's digital marketing 'Big Brain' to ingest{" "}
          <em>all</em> data for predictable revenue growth.
        </p>
        {/* Wrapper for Image and Floating Container */}
        <div className="relative w-full flex justify-start mt-12 sm:mt-10 mb-40 px-3 sm:px-5">
          {/* Data Stream Image (Scales Responsively) */}
          <div className="relative w-full max-w-[700px] sm:max-w-[850px] md:max-w-[1000px] lg:max-w-[1200px] aspect-[2.5]">
            <Image
              src="/assets/data-stream.avif"
              alt="Data Stream B2B Marketing"
              width={1000}
              height={450}
              className="w-[90%] sm:w-[80%] xl:w-[70%] h-full object-cover filter grayscale rounded-xl"
              loading="lazy"
            />

            {/* Blue Overlapping Container */}
            <div
              className="absolute top-[45%] right-[0%] sm:right-[5%] bg-[#496bef] text-white rounded-xl shadow-lg flex flex-col p-4 sm:p-6 md:p-8 
        w-[65%] sm:w-[60%] md:w-[55%] lg:w-[70%] xl:h-[300px] h-auto z-10 justify-between"
            >
              <p className="font-normal text-[12px] sm:text-base md:text-lg text-left">
                Marketing in today's world is a science. We create your
                personalized data center that allows you to understand how your
                marketing efforts translate into revenue.
              </p>
              <RoundedButton
                mt="mt-4"
                textSize="text-[10px] sm:text-[13px] md:text-md"
                bgColor="bg-black"
                hoverColor="hover:bg-gray-800"
                width="w-full max-w-md md:max-w-sm lg:max-w-[280px]"
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
