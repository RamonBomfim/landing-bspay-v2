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
import adCash from "../../../assets/advantages-icons/ad-cash.svg";
import adCoins from "../../../assets/advantages-icons/ad-coins.svg";
import adCostBenefit from "../../../assets/advantages-icons/ad-cost-and-benefit.svg";
import adRocket from "../../../assets/advantages-icons/ad-rocket.svg";
import adSafeBox from "../../../assets/advantages-icons/ad-safe-box.svg";
import adWallet from "../../../assets/advantages-icons/ad-wallet-with-cash.svg";
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

      <div className="flex flex-col lg:relative lg:justify-center lg:items-center gap-3 lg:gap-0 w-full pt-0 lg:pt-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-3 w-full">
          <div className="flex items-center justify-between w-full lg:max-w-[22.5rem]">
            <WhyCard
              icon={ArrowsLeftRight}
              title="Eficiência nas Transações"
              description="Realize pagamentos rápidos e sem complicações."
            />

            <Image
              src={adRocket}
              alt="Foguete 3D"
              className="w-40 h-auto md:hidden -mr-8"
              priority
            />
          </div>
          <div className="flex items-center justify-between w-full lg:max-w-[22.5rem]">
            <Image
              src={adWallet}
              alt="Carteira cheia de dinheiro"
              className="w-40 h-auto md:hidden -ml-8"
              priority
            />

            <WhyCard
              icon={SlidersHorizontal}
              title="Transparência e Controle"
              description="Tenha total transparência e controle sobre todas as operações financeiras."
              className="items-end"
              textOrientation="right"
            />
          </div>
          <div className="flex items-center justify-between w-full lg:max-w-[22.5rem]">
            <WhyCard
              icon={PixLogo}
              title="Pix e Cripto"
              description="Confie em uma empresa com histórico de sucesso comprovado em soluções de pagamento."
            />

            <Image
              src={adSafeBox}
              alt="Cofre fechado"
              className="w-40 h-auto md:hidden -mr-8"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-3 w-full">
          <div className="flex items-center justify-between w-full lg:max-w-[22.5rem]">
            <Image
              src={adCash}
              alt="Maço de dinheiro"
              className="w-40 h-auto md:hidden -ml-8"
              priority
            />
            <WhyCard
              icon={Headset}
              title="Suporte personalizado 24hr"
              description="Com grupo de WhatsApp exclusivo para cada cliente, disponível 24 horas por dia, 7 dias por semana."
              className="items-end"
              textOrientation="right"
            />
          </div>
          <div className="flex items-center justify-between w-full lg:max-w-[22.5rem]">
            <WhyCard
              icon={LockKey}
              title="Segurança Reforçada"
              description="PIN de transação e autenticação de dois fatores para proteger suas operações."
            />
            <Image
              src={adCoins}
              alt="Moedas juntas"
              className="w-40 h-auto md:hidden -mr-12"
              priority
            />
          </div>
          <div className="flex items-center justify-between w-full lg:max-w-[22.5rem]">
            <Image
              src={adCostBenefit}
              alt="Setas em direções opostas e moedas jogadas por cima"
              className="w-40 h-auto md:hidden -ml-14"
              priority
            />
            <WhyCard
              icon={CodeSimple}
              title="Facilidade de Integração"
              description="Integre a BSPAY em qualquer tipo de plataforma em menos de 1 hora."
              className="items-end"
              textOrientation="right"
            />
          </div>
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
