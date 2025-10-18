import React from "react";
import Services from "./components/Services";
import ExaminationServices from "./components/ExaminationServices";

function page() {
  return (
    <div className="bg-white">
      <Services />
      <ExaminationServices />
    </div>
  );
}

export default page;
