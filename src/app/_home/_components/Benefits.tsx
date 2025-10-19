import React from "react";
import benefits from "@images/Home/benefits.png";
import CustomBenefits from "@/components/ui/CustomBenefits";

const Benefits = () => {
  const benefitsList = [
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
    <CustomBenefits
      benefits={benefitsList}
      image={benefits}
      buttonText="More About Us"
      // onButtonClick={() => console.log("More About Us clicked")}
    />
  );
};

export default Benefits;
