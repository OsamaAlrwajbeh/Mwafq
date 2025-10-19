import Image from "next/image";
import React from "react";

interface OurServiceProps {
  imageUrl: string;
  services: Array<{
    name: string;
    description: string;
  }>;
}

export default function OurService({ imageUrl, services }: OurServiceProps) {
  const rightColumnServices = services.slice(0, 3);
  const bottomGridServices = services.slice(3);

  return (
    <div className="container_main">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left: Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white h-[450px] lg:col-span-8">
          <Image
            src={imageUrl}
            alt="Service illustration"
            className="w-full h-full object-cover"
            layout="fill"
          />
        </div>

        <div className="space-y-4 lg:col-span-4">
          {rightColumnServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid: Remaining Services */}
      {bottomGridServices.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomGridServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
