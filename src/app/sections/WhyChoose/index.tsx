import { SectionContainer } from "@/components/SectionContainer";
import {
  ArrowsLeftRight,
  CodeSimple,
  Headset,
  LockKey,
  PixLogo,
  SlidersHorizontal,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import safeBox from "../../../assets/safe-box.svg";
import { WhyCard } from "./WhyCard";

export function WhyChoose() {
  return (
    <SectionContainer
      additionalSectionClass="w-full"
      additionalContainerClass="items-center py-10 lg:pt-20 lg:pb-40 gap-5 lg:gap-10 px-[1.375rem] lg:px-0"
    >
      <h3 className="font-jakarta font-bold text-3xl lg:text-5xl text-blue-text text-center max-w-[29.375rem]">
        Por Que Escolher a BSPAY?
      </h3>

      <div className="flex flex-col lg:relative lg:justify-center lg:items-center gap-3 lg:gap-0 w-full pt-0 lg:pt-16 bg-why-choose-bg lg:bg-none bg-contain bg-no-repeat bg-center">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-3 w-full">
          <WhyCard
            icon={ArrowsLeftRight}
            title="Eficiência nas Transações"
            description="Realize pagamentos rápidos e sem complicações."
          />
          <WhyCard
            icon={SlidersHorizontal}
            title="Transparência e Controle"
            description="Tenha total transparência e controle sobre todas as operações financeiras."
            className="items-end"
            textOrientation="right"
          />
          <WhyCard
            icon={PixLogo}
            title="Pix e Cripto"
            description="Confie em uma empresa com histórico de sucesso comprovado em soluções de pagamento."
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-3 w-full">
          <WhyCard
            icon={Headset}
            title="Suporte personalizado 24hr"
            description="Com grupo de WhatsApp exclusivo para cada cliente, disponível 24 horas por dia, 7 dias por semana."
            className="items-end"
            textOrientation="right"
          />
          <WhyCard
            icon={LockKey}
            title="Segurança Reforçada"
            description="PIN de transação e autenticação de dois fatores para proteger suas operações."
          />
          <WhyCard
            icon={CodeSimple}
            title="Facilidade de Integração"
            description="Integre a BSPAY em qualquer tipo de plataforma em menos de 1 hora."
            className="items-end"
            textOrientation="right"
          />
        </div>

        <Image
          src={safeBox}
          alt="Cofre seguro"
          sizes="100vw"
          className="hidden lg:block lg:w-40 lg:h-auto lg:absolute lg:left-[-1.375rem] lg:bottom-[-11.875rem]"
          priority
        />
      </div>
    </SectionContainer>
  );
}
