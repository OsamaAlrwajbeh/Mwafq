import React from "react";

function Stats() {
  return (
    <section className="container_main">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-custom-darkBlue text-white p-8 rounded-xl text-center">
          <div className="text-5xl font-bold mb-2">100+</div>
          <p className="text-indigo-200">Medical Centers</p>
        </div>
        <div className="bg-custom-darkBlue text-white p-8 rounded-xl text-center">
          <div className="text-5xl font-bold mb-2">21+</div>
          <p className="text-indigo-200">Cities</p>
        </div>
        <div className="bg-custom-darkBlue text-white p-8 rounded-xl text-center">
          <div className="text-5xl font-bold mb-2">8+</div>
          <p className="text-indigo-200">Mandatory medical examinations</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
