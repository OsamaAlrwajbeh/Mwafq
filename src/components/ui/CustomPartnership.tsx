"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "@/components/ui/Button";

interface CustomPartnershipSectionProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const CustomPartnership: React.FC<CustomPartnershipSectionProps> = ({
  title,
  description,
  image,
  subtitle,
  buttonText = "Learn More",
  onButtonClick,
}) => {
  return (
    <section className="container_main">
      <div className="grid md:grid-cols-2 gap-12 items-center rounded-3xl">
        {/* Image Section */}
        <div className="relative">
          <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt="partnership section image"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Text Section */}
        <div>
          {subtitle && (
            <p className="text-custom-lightBlue text-base mb-4">{subtitle}</p>
          )}
          <h2 className="text-4xl md:text-5xl text-custom-darkBlue font-bold mb-6">
            {title}
          </h2>
          <p className="text-gray-600 mb-6">{description}</p>
          {buttonText && (
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="font-semibold hover:underline"
                onClick={onButtonClick}
              >
                {buttonText} →
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomPartnership;
