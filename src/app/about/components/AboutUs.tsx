import React from "react";
import about from "@images/About/about.png";
import CustomIntro from "@/components/ui/CustomIntro";
function AboutUs() {
  return (
    <CustomIntro
      title="About Us"
      subtitle="Transforming employee medical examinations across Saudi Arabia"
      description1="At Mwafq, we simplify complex healthcare processes, reduce costs, and ensure quality through one smart platform."
      image={about}
    />
  );
}

export default AboutUs;
