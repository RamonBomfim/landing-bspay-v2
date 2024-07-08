import { SectionContainer } from "@/components/SectionContainer";
import {
  Headset,
  Link,
  LockKey,
  PaintBrush,
  TipJar,
  Users,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import notebookBg from "../../../assets/notebook-bg.svg";
import { WhyCard } from "./WhyCard";

export function WhyChoose() {
  return (
    <SectionContainer
      additionalSectionClass="w-full"
      additionalContainerClass="items-center py-7 lg:pt-14 gap-5 lg:gap-10 px-[1.375rem] lg:px-0"
    >
      <h3 className="font-jakarta font-bold text-3xl lg:text-5xl text-blue-text text-center max-w-[29.375rem]">
        Por Que Escolher a BSPAY?
      </h3>

      <Image
        src={notebookBg}
        alt="Notebook com imagem de fundo"
        sizes="100vw"
        className="w-full h-auto lg:hidden"
        priority
      />

      <div className="flex flex-col lg:flex-row lg:justify-between gap-3 lg:gap-0 w-full pt-0 lg:pt-16 bg-why-choose-bg lg:bg-notebook-bg bg-contain bg-no-repeat bg-center">
        <div className="flex flex-col gap-3 w-full lg:max-w-60">
          <WhyCard
            icon={Users}
            title="Experiência Comprovada"
            description="Confie em uma empresa com histórico de sucesso comprovado em soluções de pagamento."
          />
          <WhyCard
            icon={PaintBrush}
            title="Experiência Comprovada"
            description="Confie em uma empresa com histórico de sucesso comprovado em soluções de pagamento."
            className="items-end"
          />
          <WhyCard
            icon={Headset}
            title="Experiência Comprovada"
            description="Confie em uma empresa com histórico de sucesso comprovado em soluções de pagamento."
          />
        </div>

        <div className="flex flex-col gap-3 w-full lg:max-w-60">
          <WhyCard
            icon={LockKey}
            title="Experiência Comprovada"
            description="Confie em uma empresa com histórico de sucesso comprovado em soluções de pagamento."
            className="items-end"
          />
          <WhyCard
            icon={Link}
            title="Experiência Comprovada"
            description="Confie em uma empresa com histórico de sucesso comprovado em soluções de pagamento."
          />
          <WhyCard
            icon={TipJar}
            title="Experiência Comprovada"
            description="Confie em uma empresa com histórico de sucesso comprovado em soluções de pagamento."
            className="items-end"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
