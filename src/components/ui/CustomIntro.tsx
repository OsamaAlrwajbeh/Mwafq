/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Button from "@/components/ui/Button";

interface CustomIntroProps {
  title: string;
  subtitle?: string;
  description1?: string;
  description2?: string;
  note?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  image: string | any;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const CustomIntro = ({
  title,
  subtitle,
  description1,
  description2,
  note,
  primaryBtnText,
  secondaryBtnText,
  image,
  onPrimaryClick,
  onSecondaryClick,
}: CustomIntroProps) => {
  return (
    <section className="container_main grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold text-custom-darkBlue mb-1 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-custom-lightBlue text-base mb-4">{subtitle}</p>
        )}
        {description1 && (
          <p className="text-[#333333] text-lg font-semibold mb-6">
            {description1}
          </p>
        )}
        {description2 && (
          <p className="text-[#333333] font-semibold text-lg mb-8">
            {description2}
          </p>
        )}
        {note && <p className="text-[#5E5C5C] text-base mb-8">{note}</p>}

        <div className="flex gap-4">
          {primaryBtnText && (
            <Button
              variant="primary"
              size="md"
              className="w-1/2"
              onClick={onPrimaryClick}
            >
              {primaryBtnText}
            </Button>
          )}
          {secondaryBtnText && (
            <Button
              variant="outline"
              size="md"
              className="w-1/2"
              onClick={onSecondaryClick}
            >
              {secondaryBtnText}
            </Button>
          )}
        </div>
      </div>

      <div className="relative">
        <div className=" rounded-3xl overflow-hidden ">
          <div className="aspect-square flex items-center justify-center p-8">
            <Image
              src={image}
              alt={title || "Hero Image"}
              fill
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomIntro;
