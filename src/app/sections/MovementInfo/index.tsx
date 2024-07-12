import { SectionContainer } from "@/components/SectionContainer";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import cash from "../../../assets/cash.svg";
import graph from "../../../assets/graph.png";
import sale from "../../../assets/sale.svg";

export function MovementInfo() {
  return (
    <SectionContainer
      additionalContainerClass="items-center gap-12 lg:gap-16 py-[4.375rem] px-[1.375rem] lg:px-0 relative"
      additionalSectionClass="bg-gray-black h-auto"
    >
      <Image
        src={cash}
        alt="Imagem de bolo de dinherio 3D"
        sizes="100vw"
        className="w-[11.5rem] lg:w-[13.5rem] h-auto absolute bottom-[-6rem] lg:bottom-[-7.0625rem] left-0 lg:left-[-1.3rem]"
        priority
      />

      <h4 className="font-jakarta font-bold text-3xl lg:text-5xl text-center lg:text-left text-gray-white">
        Escale seu negócio com a BsPay.
      </h4>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-center w-full gap-12 lg:gap-16 px-6 lg:px-0">
        <div className="flex flex-col w-full lg:max-w-[32.875rem] h-auto gap-10">
          <div className="flex justify-center gap-3 w-full">
            <CheckCircle className="w-6 h-6 text-green-primary" weight="fill" />
            <p className="font-jakarta font-medium text-lg text-gray-white max-w-[30.625rem]">
              Internacionalize a sua operação com a bspay: Expanda seus lucros
              além do brasil, receba pagamento de toda américa latina, Europa e
              em todo resto do mundo. Com as melhores taxas e a melhor convenção
              do mercado.
            </p>
          </div>
          <div className="flex justify-center gap-3 w-full">
            <CheckCircle className="w-6 h-6 text-green-primary" weight="fill" />
            <p className="font-jakarta font-medium text-lg text-gray-white max-w-[30.625rem]">
              Escalabilidade Incomparável: Capacidade de processar mais de 10
              milhões de pagamentos por segundo.
            </p>
          </div>
          <div className="flex justify-center gap-3 w-full">
            <CheckCircle className="w-6 h-6 text-green-primary" weight="fill" />
            <p className="font-jakarta font-medium text-lg text-gray-white max-w-[30.625rem]">
              Tecnologia Webhook para confirmação de pagamento e saque via API
              em tempo real.
            </p>
          </div>
          <div className="flex justify-center gap-3 w-full">
            <CheckCircle className="w-6 h-6 text-green-primary" weight="fill" />
            <p className="font-jakarta font-medium text-lg text-gray-white max-w-[30.625rem]">
              Documentação facilitada com modelos prontos e integração em menos
              de 1 hora.
            </p>
          </div>
        </div>

        <Image
          src={graph}
          alt="Imagem de um gráfico"
          sizes="100vw"
          className="w-[24.125rem] lg:w-[30.375rem] h-auto"
          priority
        />
      </div>

      <Image
        src={sale}
        alt="Imagem de selo de liquidação"
        sizes="100vw"
        className="w-[8.75rem] lg:w-[10.75rem] h-auto absolute top-[-4.25rem] lg:top-[-5.625rem] right-0"
        priority
      />
    </SectionContainer>
  );
}
