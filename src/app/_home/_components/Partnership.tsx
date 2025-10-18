import Image from "next/image";
import React from "react";
import partnership from "@images/Home/partnership.png";
import Button from "@/components/ui/Button";

function Partnership() {
  return (
    <section className="container_main ">
      <div className="grid md:grid-cols-2 gap-12 items-center rounded-3xl ">
        <div className="relative">
          <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
            <Image
              src={partnership}
              alt="partnership"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl text-custom-darkBlue font-bold mb-6">
            Your Trusted Partner for
            <br />
            Pre-Employment
            <br />
            Medical Examinations
          </h2>
          <p className="text-gray-600 mb-6">
            Our Saudi cloud platform connects your organization with trusted
            medical providers across all cities, offering automated, accessible,
            and high-quality medical screening services.
          </p>
          <div className="flex justify-end">
            <Button
              variant="outline"
              className=" font-semibold hover:underline"
            >
              Read More →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
