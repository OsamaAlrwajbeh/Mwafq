import React from "react";
import { FileText, ClipboardCheck, Briefcase } from "lucide-react";

const ExaminationServices = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-cyan-500" />,
      title: "Iqama Examination",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-cyan-500" />,
      title: "Baladiya Examination",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-cyan-500" />,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-500" />,
      title: "Iqama Examination",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-cyan-500" />,
      title: "Baladiya Examination",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-cyan-500" />,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-500" />,
      title: "Iqama Examination",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-cyan-500" />,
      title: "Baladiya Examination",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-cyan-500" />,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
  ];

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-cyan-500 text-sm font-semibold mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Examination Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* See More Link */}
              <a
                href="#"
                className="text-cyan-500 font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all group"
              >
                See More
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExaminationServices;
