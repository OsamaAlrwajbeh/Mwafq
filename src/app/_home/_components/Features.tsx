import React from "react";
import features_image from "@images/Home/features.png";
import features1 from "@images/Home/features1.png";
import features2 from "@images/Home/features2.png";
import features3 from "@images/Home/features3.png";
import features4 from "@images/Home/features4.png";
import CustomFeatures from "@/components/ui/CustomFeatures";

const Features = () => {
  const features = [
    {
      icon: features1,
      title: "All-in-One Dashboard",
      description:
        "A platform that consolidates all employee data and medical examinations into a single smart dashboard.",
    },
    {
      icon: features2,
      title: "Strong Healthcare Network",
      description:
        "Unified contracts with the best healthcare centers across the Kingdom of Saudi Arabia.",
    },
    {
      icon: features3,
      title: "Fair & Transparent Pricing",
      description:
        "Uniform prices and guaranteed healthcare quality across all services.",
    },
    {
      icon: features4,
      title: "Accurate Tracking",
      description:
        "Reliable reports and indicators to monitor the status of every medical examination.",
    },
  ];

  return (
    <CustomFeatures
      image={features_image}
      subtitle="Why Choose Us"
      title="Your Trusted Partner for Pre-Employment Medical Examinations"
      features={features}
    />
  );
};

export default Features;
