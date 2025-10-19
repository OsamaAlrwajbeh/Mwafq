import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ui/Card";
import health1 from "@images/Services/health1.png";
import health2 from "@images/Services/health2.png";
import health3 from "@images/Services/health3.png";

export default function MedicalPartners() {
  const partners = [
    {
      image: health1,
      name: "Family Smile Medical Complex",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
    },
    {
      image: health2,
      name: "Al-Shablan Medical Complex",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
    },
    {
      image: health3,
      name: "Al Salam Medical Complex - Unaizah",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
    {
      image: health1,
      name: "Takhasousat Medical Complex - Unaizah",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
    },
    {
      image: health2,
      name: "United Medical Complex",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
    },
    {
      image: health3,
      name: "Samir Medical Complex",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
    {
      image: health1,
      name: "Elaj al Riyadh Complex",
      description:
        "Streamlined and hassle-free Iqama medical examinations for your employees",
    },
    {
      image: health2,
      name: "Umm Al Hamam Medical Complex",
      description:
        "Quick, reliable, and fully compliant Baladiya examinations for your employees",
    },
    {
      image: health3,
      name: "NYM Medical Complex",
      description:
        "Fast and accurate pre-employment medical tests to ensure your candidates are ready for work",
    },
  ];

  return (
    <section className="container_main">
      {/* Header */}
      <div className="mb-12">
        <p className="text-custom-lightBlue text-base mb-4">Our Services</p>
        <h1 className="text-4xl font-bold text-custom-darkBlue">
          Medical Partners
        </h1>
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <ServiceCard
            key={index}
            title={partner.name}
            description={partner.description}
            image={partner.image}
          />
        ))}
      </div>
    </section>
  );
}
