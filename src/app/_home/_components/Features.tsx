import React from "react";
import features_image from "@images/Home/features.png";
import features1 from "@images/Home/features1.png";
import features2 from "@images/Home/features2.png";
import features3 from "@images/Home/features3.png";
import features4 from "@images/Home/features4.png";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: features1,
      title: "All-in-One Dashboard",
      description:
        "A platform that consolidates all employee data and medical examinations into a single smart dashboard.",
    },
    {
      icon: features2,
      title: "Strong Healthcare Network",
      description:
        "Unified contracts with the best healthcare centers across the Kingdom of Saudi Arabia.",
    },
    {
      icon: features3,
      title: "Fair & Transparent Pricing",
      description:
        "Uniform prices and guaranteed healthcare quality across all services.",
    },
    {
      icon: features4,
      title: "Accurate Tracking",
      description:
        "Reliable reports and indicators to monitor the status of every medical examination.",
    },
  ];

  return (
    <section className="container_main">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-full">
          <div className="aspect-video  rounded-xl flex items-center justify-center ">
            <Image src={features_image} alt="partnership" layout="fill" />
          </div>
        </div>

        <div className=" w-full">
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-cyan-500 text-sm font-semibold mb-3 uppercase tracking-wide">
                Why Choose Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner for Pre-Employment Medical Examinations
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-all duration-300 p-2">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
