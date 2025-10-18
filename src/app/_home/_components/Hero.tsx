import Image from "next/image";
import Button from "@/components/ui/Button";
import hero from "@images/Home/hero-image-placeholder.png";

const Hero = () => {
  return (
    <section className="container_main grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold text-custom-darkBlue mb-1 leading-tight">
          Mwafq Platform
        </h1>
        <p className="text-custom-lightBlue text-base mb-4">
          Smart Medical Management Platform
        </p>
        <p className="text-[#333333] text-lg font-semibold mb-6">
          A smart, integrated solution for managing your employees&apos; medical
          examinations.
        </p>
        <p className="text-[#333333] font-semibold text-lg mb-8">
          Control your costs, expedite your procedures with ease and guaranteed
          quality.
        </p>
        <p className="text-[#5E5C5C] text-base mb-8">
          No matter the size of your company or the number of branches you have,
          Mwafq brings all your examinations together in one place.
        </p>
        <div className="flex gap-4">
          <Button variant="primary" size="md" className="w-1/2">
            Get Started
          </Button>
          <Button variant="outline" size="md" className="w-1/2">
            Learn More
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-square flex items-center justify-center p-8">
            <Image src={hero} alt="Hero Image" fill className=" rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
