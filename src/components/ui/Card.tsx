import React from "react";
import Image, { type StaticImageData } from "next/image";
import { FileText } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string | StaticImageData;
  icon?: React.ReactNode;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  icon,
  link = "#",
}) => {
  return (
    <Link href={link}>
      <div className="bg-white rounded-2xl cursor-pointer p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-[250px] flex flex-col">
        {/* Icon + Title */}
        <div className="mb-6 flex gap-3 items-center">
          {icon ? (
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          ) : image ? (
            <Image src={image} alt={title} width={50} height={50} />
          ) : (
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
          )}
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        {/* See More Link */}
        <div className="text-custom-lightBlue font-medium text-sm flex items-center justify-end gap-2 hover:gap-3 transition-all group">
          See More
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
