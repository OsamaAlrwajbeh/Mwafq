import Image from "next/image";
import React from "react";
import benefits from "@images/Home/benefits.png";

const Benefits = () => {
  const features = [
    {
      text: "You can easily connect your branches, and manage examinations regardless of the number of employees",
    },
    {
      text: "Full integration - a unified electronic system that tracks every step: booking, testing, follow-up, and reporting",
    },
    {
      text: "Real-time indicators and reports - track branch compliance, health and safety indicators, and achievement rates",
    },
    {
      text: "High quality and unified pricing - Mwafq guarantees you partnerships with the best-accredited medical centers, offering high quality and a single price in every city",
    },
  ];

  return (
    <section className="container_main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              </div>

              <p className="text-gray-800 text-base leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}

          <div className="pt-4">
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300">
              More About Us
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl p-12 text-white">
            <div className="aspect-square flex items-center justify-center">
              <Image
                src={benefits}
                alt="partnership"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
