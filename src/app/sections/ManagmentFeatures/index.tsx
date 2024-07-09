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
      additionalSectionClass="h-auto pt-7 pb-9 lg:pt-16 lg:pb-40"
      additionalContainerClass="gap-7 lg:gap-14 px-[1.375rem] lg:px-0"
    >
      <div className="flex flex-col w-full gap-7 lg:gap-2">
        <h3 className="font-jakarta font-bold text-3xl lg:text-5xl text-gray-black max-w-[59.125rem]">
          Receba pagamentos via pix de sua operação e saque via cripto em
          minutos, apenas com o endereço da sua carteira.
        </h3>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 lg:gap-0">
          <h5 className="font-jakarta font-bold text-lg lg:text-2xl text-blue-text max-w-36">
            <span className="text-green-primary">Integrações</span> e Parcerias
          </h5>

          <div className="flex items-center justify-end w-full lg:w-[30rem] h-auto">
            <Image
              src={cards}
              alt="Balões com valores em dinheiro"
              sizes="100vw"
              className="w-[30rem] h-auto"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 place-items-center lg:flex lg:items-center lg:justify-between w-full">
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
