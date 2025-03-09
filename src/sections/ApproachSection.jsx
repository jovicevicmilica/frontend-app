import Image from "next/image";
import RoundedButton from "../widgets/RoundedButton";
import ImageWithOverlay from "../widgets/ImageWithOverlay";

export default function ApproachSection() {
  return (
    <section className="relative min-h-screen bg-[#181818] text-white px-6 md:px-20 py-30 flex flex-col font-poppins">
      {/* White stripe on the right */}
      <div className="absolute top-0 right-0 w-[50px] h-full bg-white"></div>

      {/* Background Text - Our Approach */}
      <h1
        className="text-[8rem] md:text-[12rem] font-semibold text-white opacity-10 absolute top-0 left-0 right-0 text-center"
        aria-hidden="true"
      >
        Our Approach
      </h1>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center relative mt-16">
        {/* Left Content */}
        <div className="md:w-1/2 relative z-10">
          <h2 className="relative text-3xl md:text-5xl font-semibold z-10 leading-tight">
            Data-Driven Decision-
            <br />
            making for B2B marketing.
          </h2>
          <div className="mt-10">
            <p className="text-gray-300 max-w-xl">
              Our data-first approach allows us to take small and growing
              businesses and help them compete with significantly larger
              competitors. Our marketing strategy, data hub, and execution teams
              provide clear, actionable strategies to increase revenue with
              execution support.
            </p>
            <RoundedButton mt="mt-8" textSize="text-md">
              How We Work
            </RoundedButton>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-[300px] h-[250px] md:w-[500px] md:h-[350px] ml-auto flex items-end mt-16 md:mt-0">
          <Image
            src="/assets/iceberg-refl.avif"
            alt="Iceberg representing deep marketing insights"
            width={500}
            height={350}
            className="object-cover mix-blend-lighten"
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl md:text-4xl font-semibold relative z-10">
          Powered by Data
        </h2>
        <p className="mt-4 text-white font-semibold max-w-xl mx-auto relative z-10">
          We create your company's digital marketing 'Big Brain' to ingest{" "}
          <em>all</em> data for predictable revenue growth.
        </p>

        {/* Image with Overlay */}
        <div className="flex justify-center mt-30 items-center mb-30">
          <ImageWithOverlay
            bgSrc="/assets/data-stream.avif"
            bgWidth="w-[700px]"
            bgHeight="h-[350px]"
            boxWidth="w-[650px]"
            boxHeight="h-[200px]"
            text="Marketing in today's world is a science. We create your personalized data center that allows you to understand how your marketing efforts translate into revenue."
            buttonText="Data Driving B2B Marketing"
          />
        </div>
      </div>
    </section>
  );
}
