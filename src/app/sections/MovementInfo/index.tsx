import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import cash from "../../../assets/cash.svg";
import sale from "../../../assets/sale.svg";
import { InfoCard } from "./components/InfoCard";

export function MovementInfo() {
  return (
    <SectionContainer
      additionalContainerClass="items-center gap-12 lg:gap-16 py-[4.375rem] px-[1.375rem] lg:px-0 relative"
      additionalSectionClass="bg-gray-black h-auto lg:max-h-[24.6875rem]"
    >
      <Image
        src={cash}
        alt="Imagem de bolo de dinherio 3D"
        sizes="100vw"
        className="w-[6.25rem] lg:w-[10.75rem] h-auto absolute bottom-[-5rem] lg:bottom-[-7.0625rem]  left-0 lg:left-[-5.3rem]"
        priority
      />

      <h4 className="font-jakarta font-bold text-3xl lg:text-5xl text-center lg:text-left text-gray-white">
        Escale seu negócio com a BsPay.
      </h4>

      <div className="flex flex-col lg:flex-row items-center lg:justify-center w-full lg:w-auto gap-5 lg:gap-10 px-6 lg:px-0">
        <InfoCard title="+ R$ 2 bilhões" subtitle="movimentados anualmente" />
        <InfoCard title="+ 900 milhões" subtitle="movimentados anualmente" />
      </div>

      <Image
        src={sale}
        alt="Imagem de selo de liquidação"
        sizes="100vw"
        className="w-[6.25rem] lg:w-[10.75rem] h-auto absolute top-[-6.25rem] lg:top-[-8.625rem] right-0 lg:right-[-5.3rem]"
        priority
      />
    </SectionContainer>
  );
}
