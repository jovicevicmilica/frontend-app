import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative flex flex-col items-center py-30 text-white font-poppins overflow-hidden">
      {/* Grayscale Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/whale.avif"
          alt="Background"
          fill
          className="object-cover filter grayscale"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="relative text-5xl font-semibold text-center mb-15 z-10">
        Why Scaling Businesses Choose MxD
      </h1>

      {/* Content */}
      <div className="relative max-w-6xl w-full flex mt-16 z-10">
        {/* Left Text Section */}
        <div className="w-1/2 space-y-16 mr-20">
          {[
            {
              title: "Teams of experts under one roof",
              description:
                "We offer comprehensive marketing support from strategy to execution. Make decisions with a clear picture of your growth—where it is today and where it needs to go.",
            },
            {
              title: "Expertise and dedicated support",
              description:
                "Get marketing expertise that is focused on helping you reach your goals. Get a dedicated MxD marketing team with expertise across industries, size, and stage.",
            },
            {
              title: "A partner that grows with you",
              description:
                "We match our engagement and level of support to your business needs. Whether you're just starting out or scaling quickly, we are here to partner with you at every stage of your journey.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start relative">
              <div>
                <h2 className="text-4xl font-semibold mb-8">{item.title}</h2>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="w-1/4 flex justify-baseline relative">
          <div className="relative flex flex-col items-center h-full">
            {/* Connecting Line */}
            <div className="absolute w-[1px] bg-blue-500 top-2 h-[510px]" />

            {/* Dots aligned with headings */}
            {[7, 260, 513].map((top, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-blue-500 rounded-full"
                style={{ top: `${top}px` }}
              />
            ))}
          </div>
        </div>
        <div className="w-1/4" />
      </div>
    </section>
  );
}
