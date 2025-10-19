import React from "react";
import { FileText, ClipboardCheck, Briefcase } from "lucide-react";
import ServiceCard from "@/components/ui/Card";
import health1 from "@images/Services/health1.png";
import health2 from "@images/Services/health2.png";
import health3 from "@images/Services/health3.png";

const ExaminationServices = () => {
  const services = [
    {
      image: health1,
      title: "Iqama Examination",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
      link: "/services/service-details/1",
    },
    {
      image: health2,
      title: "Baladiya Examination",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
      link: "/services/service-details/2",
    },
    {
      image: health3,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
      link: "/services/service-details/3",
    },
    {
      image: health1,
      title: "Iqama Examination",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
      link: "/services/service-details/4",
    },
    {
      image: health2,
      title: "Baladiya Examination",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
      link: "/services/service-details/5",
    },
    {
      image: health3,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
    {
      image: health1,
      title: "Iqama Examination",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
    },
    {
      image: health2,
      title: "Baladiya Examination",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
    },
    {
      image: health3,
      title: "Pre-Employment Test",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
  ];

  return (
    <section className="container_main">
      <div className="mb-12">
        <p className="text-custom-lightBlue text-base mb-4">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-bold text-custom-darkBlue">
          Examination Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ExaminationServices;
