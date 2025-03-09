import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative flex flex-col items-center py-30 text-white font-poppins overflow-hidden">
      {/* ✅ Grayscale Background with Improved Alt Text */}
      <div className="absolute inset-0">
        <Image
          src="/assets/whale.avif"
          alt="Grayscale background of a whale representing scalability and growth"
          fill
          className="object-cover w-full h-full filter grayscale"
          loading="lazy"
        />
      </div>

      {/* ✅ Title with Proper `<h2>` Tag */}
      <h2 className="relative text-5xl font-semibold text-center mb-15 z-10">
        Why Scaling Businesses Choose MxD
      </h2>

      {/* ✅ Content Section */}
      <div className="relative max-w-6xl w-full flex mt-16 z-10">
        {/* ✅ Left Text Section with SEO Optimization */}
        <div className="w-1/2 space-y-16 mr-20">
          {[
            {
              title: "Teams of Experts Under One Roof",
              description:
                "We offer comprehensive marketing support from strategy to execution. Make decisions with a clear picture of your growth—where it is today and where it needs to go.",
            },
            {
              title: "Expertise and Dedicated Support",
              description:
                "Get marketing expertise that is focused on helping you reach your goals. Get a dedicated MxD marketing team with expertise across industries, size, and stage.",
            },
            {
              title: "A Partner That Grows With You",
              description:
                "We match our engagement and level of support to your business needs. Whether you’re just starting out or scaling quickly, we’re here to partner with you at every stage of your journey.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start relative">
              <div>
                <h3 className="text-3xl font-semibold mb-8">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Vertical Timeline (Decorative, Not for Screen Readers) */}
        <div className="w-1/4 flex justify-start relative">
          <div className="relative flex flex-col items-center h-full">
            {/* Connecting Line */}
            <div
              className="absolute w-[1px] bg-blue-500 top-2 h-[420px]"
              aria-hidden="true"
            />

            {/* Dots aligned with headings */}
            {[0, 220, 420].map((top, index) => (
              <div
                key={index}
                className="absolute w-4 h-4 bg-blue-500 rounded-full"
                style={{ top: `${top}px` }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Right Side Spacing */}
        <div className="w-1/4" />
      </div>
    </section>
  );
}
