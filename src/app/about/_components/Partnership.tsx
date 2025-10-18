import PartnershipSection from "@/components/ui/CustomPartnership";
import React from "react";
import partnershipImage from "@images/About/partnership.png";

function Partnership() {
  return (
    <PartnershipSection
      title="Your Trusted Partner for Pre-Employment Medical Examinations"
      description="Our Saudi cloud platform connects your organization with trusted medical providers across all cities, offering automated, accessible, and high-quality medical screening services."
      image={partnershipImage}
      buttonText="Learn More"
      subtitle="Who We Are
"
    />
  );
}

export default Partnership;
