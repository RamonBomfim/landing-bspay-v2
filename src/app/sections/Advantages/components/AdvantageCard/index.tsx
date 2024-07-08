import { AdvantageCardProps, Advantages } from "@/types/AdvantageCard";
import Image from "next/image";
import dot from "../../../../../assets/dot.svg";

export function AdvantageCard({
  title,
  description,
  image,
  advantages,
}: AdvantageCardProps) {
  return (
    <div className="flex flex-col gap-7 lg:gap-8 w-full lg:w-[31.25rem] h-auto sm:h-[36.5rem] lg:h-[38.75rem] py-7 px-5 lg:p-10 rounded-[2.5rem] bg-gray-black">
      <div className="flex justify-between w-full max-h-36">
        <div className="flex flex-col gap-2 lg:gap-3 max-w-[15.125rem] lg:max-w-[20rem]">
          <h4 className="font-jakarta font-bold text-3xl lg:text-4xl text-white">
            {title}
          </h4>

          <p className="font-jakarta font-regular text-sm lg:text-base text-white w-full">
            {description}
          </p>
        </div>

        <div className="flex justify-center lg:w-[5.625rem] h-full">
          <Image
            src={image}
            alt="Imagem de moedas"
            sizes="100vw"
            className="w-[5.625rem] h-auto"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col gap-7 w-full">
        {advantages.map(({ id, advantage }: Advantages) => (
          <div key={id} className="flex gap-2">
            <Image
              src={dot}
              alt="Circulo verde"
              sizes="100vw"
              className="w-6 h-6"
              priority
            />

            <p className="font-jakarta font-regular text-base lg:text-lg text-white w-full lg:max-w-[22.125rem]">
              {advantage}
            </p>
          </div>
        ))}

        <button className="flex items-center justify-center w-36 h-10 rounded-[1.25rem] border-2 border-green-secondary bg-green-primary font-jakarta font-semibold text-base text-white">
          Veja mais
        </button>
      </div>
    </div>
  );
}
