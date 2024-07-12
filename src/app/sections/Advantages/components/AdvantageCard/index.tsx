import { AdvantageCardProps, Advantages } from "@/types/AdvantageCard";
import Image from "next/image";
import dot from "../../../../../assets/dot.svg";

export function AdvantageCard({
  title,
  description,
  image,
  advantages,
  hasButton = false,
}: AdvantageCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-7 md:gap-8 w-full lg:max-w-[58.25rem] h-auto sm:h-[36.5rem] md:h-[27.625rem] py-7 px-5 lg:p-10 rounded-[2.5rem] bg-gray-black">
      <div className="flex md:flex-col-reverse justify-between md:justify-center w-full md:w-1/2 max-h-36 md:max-h-[24.125rem] lg:max-h-[22.625rem] md:gap-5">
        <div className="flex flex-col gap-2 lg:gap-3 max-w-[15.125rem] md:max-w-full">
          <h4 className="font-jakarta font-bold text-3xl lg:text-4xl text-white">
            {title}
          </h4>

          <p className="font-jakarta font-regular text-sm lg:text-base text-white w-full">
            {description}
          </p>
        </div>

        <div className="flex md:w-full h-full">
          <Image
            src={image}
            alt="Imagem de moedas"
            sizes="100vw"
            className="w-[5.625rem] md:w-40 lg:w-48 h-auto"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col md:justify-center gap-7 w-full md:w-1/2">
        {advantages.map(({ id, advantage }: Advantages) => (
          <div key={id} className="flex gap-2">
            <Image
              src={dot}
              alt="Circulo verde"
              sizes="100vw"
              className="w-7 h-7"
              priority
            />

            <p className="font-jakarta font-regular text-base lg:text-lg text-white w-full">
              {advantage}
            </p>
          </div>
        ))}

        {hasButton && (
          <button className="flex items-center justify-center w-36 h-10 rounded-[1.25rem] border-2 border-green-secondary bg-green-primary font-jakarta font-semibold text-base text-white">
            Baixar app
          </button>
        )}
      </div>
    </div>
  );
}
