/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

interface BenefitItem {
  text: string;
}

interface CustomBenefitsSectionProps {
  benefits: BenefitItem[];
  buttonText?: string;
  onButtonClick?: () => void;
  image: any | string;
}

const CustomBenefits: React.FC<CustomBenefitsSectionProps> = ({
  benefits,
  buttonText,
  onButtonClick,
  image,
}) => {
  return (
    <section className="container_main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}

          {buttonText && (
            <div className="pt-4">
              <button
                onClick={onButtonClick}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300"
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className={` rounded-3xl p-12 text-white`}>
            <div className="aspect-square flex items-center justify-center relative overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt="benefits image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBenefits;
