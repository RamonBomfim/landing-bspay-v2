import { SectionContainer } from "@/components/SectionContainer";
import { AdvantageCardProps } from "@/types/AdvantageCard";
import celphone from "../../../assets/celphone.svg";
import goldChain from "../../../assets/gold-chain.svg";
import placa from "../../../assets/placa-ouro.svg";
import { AdvantageCard } from "./components/AdvantageCard";

interface AdvantagesSection extends AdvantageCardProps {
  id: number;
}

const advantagesLeft: AdvantagesSection[] = [
  {
    id: 1,
    title: "App BSPAY",
    description: "Simplifique seus Pagamentos Com o App BSPAY",
    image: celphone,
    hasButton: true,
    advantages: [
      {
        id: 1,
        advantage:
          "Tenha liberdade na palma da sua mão, a hora que quiser com nosso app;",
      },
      {
        id: 2,
        advantage:
          "Notificações Instantâneas: Mantendo você informado com notificações em tempo real de entradas e saídas.",
      },
      {
        id: 3,
        advantage:
          "Transparência Total: Controle absoluto e transparência em todas as operações.",
      },
    ],
  },
  {
    id: 2,
    title: "Pagamentos Flexíveis",
    description:
      "Com a BSPAY, você pode receber pagamentos via Pix, criptomoedas ou cartão de crédito com total segurança.",
    image: placa,
    hasButton: false,
    advantages: [
      {
        id: 1,
        advantage: "Flexibilidade que seu negócio precisa.",
      },
      {
        id: 2,
        advantage: "Aumente Suas Opções de Pagamento.",
      },
      {
        id: 3,
        advantage: "Facilite Seus Pagamentos com BSPAY.",
      },
      {
        id: 4,
        advantage: "Transações rápidas e seguras.",
      },
    ],
  },
  {
    id: 3,
    title: "Integração total",
    description:
      "Solução completa com integração total. Gerencie todas as formas de pagamento e transações em um único lugar.",
    image: goldChain,
    hasButton: false,
    advantages: [
      {
        id: 1,
        advantage:
          " Experimente a praticidade de uma plataforma 100% integrada.",
      },
      {
        id: 2,
        advantage:
          "Tenha tudo que precisa para gerenciar todos os processos financeiros do seu negócio.",
      },
      {
        id: 3,
        advantage: "Integração total para atender todas as suas necessidades.",
      },
      {
        id: 4,
        advantage: "Controle completo desde o checkout até as transações;",
      },
    ],
  },
];

export function Advantages() {
  return (
    <SectionContainer
      additionalSectionClass="pb-14 h-auto lg:pb-0 bg-coins-bg bg-contain lg:bg-contain bg-left"
      additionalContainerClass="pt-14 px-[1.375rem] lg:px-0"
    >
      <div className="flex flex-col gap-14 w-full h-auto">
        {advantagesLeft.map((advantage) => (
          <div
            key={advantage.id}
            className={`flex w-full ${
              advantage.id === 2 ? "justify-end" : "justify-start"
            }`}
          >
            <AdvantageCard {...advantage} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
