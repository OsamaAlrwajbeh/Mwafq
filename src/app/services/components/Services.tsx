import React from "react";
import service from "@images/Services/service.png";
import CustomIntro from "@/components/ui/CustomIntro";
function Services() {
  return (
    <CustomIntro
      title="Services"
      subtitle="Smart Healthcare Solutions, All in One Platform"
      description1="Supporting line: Discover our range of services designed to simplify employee medical examinations and ensure reliable results"
      image={service}
    />
  );
}

export default Services;
