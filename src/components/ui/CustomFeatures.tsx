import React from "react";
import Image, { StaticImageData } from "next/image";

type FeatureItem = {
  icon: StaticImageData;
  title: string;
  description: string;
};

type CustomFeaturesProps = {
  image: StaticImageData;
  subtitle: string;
  title: string;
  features: FeatureItem[];
};

const CustomFeatures: React.FC<CustomFeaturesProps> = ({
  image,
  subtitle,
  title,
  features,
}) => {
  return (
    <section className="container_main">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-full">
          <div className="aspect-video rounded-xl flex items-center justify-center">
            <Image src={image} alt="features image" fill />
          </div>
        </div>

        <div className="w-full">
          <div className="space-y-8">
            <div>
              <p className="text-cyan-500 text-sm font-semibold mb-3 uppercase tracking-wide">
                {subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-custom-darkBlue leading-tight">
                {title}
              </h2>
            </div>

            <div className="space-y-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-all duration-300 p-2">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>

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

export default CustomFeatures;
