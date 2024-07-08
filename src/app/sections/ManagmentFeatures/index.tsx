import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import cards from "../../../assets/cards.svg";
import reportanaLogo from "../../../assets/reportana.svg";
import shopifyLogo from "../../../assets/shopify.svg";
import transfeeraLogo from "../../../assets/transfeera.svg";
import zemoLogo from "../../../assets/zemo.svg";

export function ManagmentFeatures() {
  return (
    <SectionContainer
      additionalSectionClass="h-auto pt-7 lg:pt-14"
      additionalContainerClass="gap-7 lg:gap-14 px-[1.375rem] lg:px-0"
    >
      <div className="flex flex-col lg:flex-row justify-between w-full gap-2">
        <div className="flex flex-col gap-5 lg:gap-14 max-w-[50rem]">
          <div className="flex flex-col gap-5 lg:gap-6">
            <h3 className="font-jakarta font-bold text-3xl lg:text-5xl text-gray-black">
              Obtenha todas funcionalidades de gestão financeira.
            </h3>
            <p className="font-jakarta font-regular text-lg lg:text-xl text-gray-black max-w-[23.25rem]">
              Lorem ipsum dolor sit amet consectetur. Blandit vitae sociis odio
              nunc ullamcorper mauris commodo.
            </p>
          </div>

          <h5 className="font-jakarta font-bold text-lg lg:text-2xl text-blue-text max-w-36">
            <span className="text-green-primary">Integrações</span> e Parcerias
          </h5>
        </div>

        <div className="flex items-end justify-end">
          <Image
            src={cards}
            alt="Balões com valores em dinheiro"
            sizes="100vw"
            className="w-[30rem] h-auto"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 place-items-center lg:flex lg:items-center lg:justify-between w-full lg:gap-36">
        <Image
          src={reportanaLogo}
          alt="Logo da Reportana"
          sizes="100vw"
          className="w-[12.5rem] h-auto max-h-14"
          priority
        />
        <Image
          src={shopifyLogo}
          alt="Logo do Shopify"
          sizes="100vw"
          className="w-[12.5rem] h-auto max-h-14"
          priority
        />
        <Image
          src={zemoLogo}
          alt="Logo da Zemo"
          sizes="100vw"
          className="w-[12.5rem] h-auto max-h-14"
          priority
        />
        <Image
          src={transfeeraLogo}
          alt="Logo da Transfeera"
          sizes="100vw"
          className="w-[12.5rem] h-auto max-h-14"
          priority
        />
      </div>
    </SectionContainer>
  );
}
