import React from "react";
import Services from "./_components/Services";
import ExaminationServices from "./_components/ExaminationServices";
import MedicalPartners from "./_components/MedicalPartners";

function page() {
  return (
    <div className="bg-white">
      <Services />
      <ExaminationServices />
      <MedicalPartners />
    </div>
  );
}

export default page;
