import SectionText from "../widgets/SectionText";
import RoundedButton from "../widgets/RoundedButton";
import ImageWithBackground from "../widgets/ImageWithBackground";

export default function WhatWeDoSection() {
  return (
    <section className="px-6 md:px-25 py-25 overflow-x-hidden">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 mb-50">
        {/* Left: Text */}
        <div className="max-w-lg mt-20">
          <h2 className="text-4xl font-bold text-black leading-tight mb-4">
            Data-Driven B2B Marketing from Strategy to Execution
          </h2>
          <SectionText maxWidth="lg">
            Get a world-class marketing strategy, and a scale-to-market team to
            help you execute that strategy to get you to your revenue targets
            faster.
          </SectionText>
          <a href="/how-we-work">
            <RoundedButton mt="mt-10" textSize="text-md">
              How We Work
            </RoundedButton>
          </a>
        </div>
        {/* Right: Image with Background */}
        <ImageWithBackground
          bgSrc="/assets/bg-photo.avif"
          imgSrc="/assets/marketing-person.avif"
          alt="Data-driven marketing expert planning B2B strategy"
          position="bottom-20 left-50"
          imgPosition="top-10 right-15"
        />
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 justify-between mt-20 ml-5">
        {/* Left: Image with Background */}
        <ImageWithBackground
          bgSrc="/assets/bg-photo.avif"
          imgSrc="/assets/teamwork.avif"
          alt="Business team collaborating on lead generation strategies"
          position="bottom-30 right-55"
          imgPosition="left-30"
          justifyContent="center"
        />
        {/* Right: Text */}
        <div className="mt-20 ml-30">
          <h3 className="text-lg font-semibold text-gray-700 mb-5">
            Who we are
          </h3>
          <h2 className="text-4xl font-bold text-black leading-tight">
            Scale Quicker
          </h2>
          <p className="text-black text-sm mt-5 max-w-md">
            We’re a full-service agency that supports your business to grow,
            drive high-quality leads, and support your sales team to convert
            those leads to exceed your revenue targets.
          </p>
          <RoundedButton mt="mt-10" textSize="text-md">
            More About Us
          </RoundedButton>
        </div>
      </div>
    </section>
  );
}
