import { SectionContainer } from "@/components/SectionContainer";
import { AdvantageCardProps } from "@/types/AdvantageCard";
import coffer from "../../../assets/coffer.svg";
import graficoPizza from "../../../assets/grafico-pizza.svg";
import placaOuro from "../../../assets/placa-ouro.svg";
import shield from "../../../assets/shield.svg";
import { AdvantageCard } from "./components/AdvantageCard";

interface AdvantagesSection extends AdvantageCardProps {
  id: number;
}

const advantagesLeft: AdvantagesSection[] = [
  {
    id: 1,
    title: "Bspay Bank",
    description:
      "A única plataforma especializada para negócios digitais com Internet Banking integrado, tudo na palma da sua mão.",
    image: coffer,
    advantages: [
      {
        id: 1,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 2,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 3,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 4,
        advantage: "Controle completo desde o checkout até as transações;",
      },
    ],
  },
  {
    id: 2,
    title: "Bspay Bank",
    description:
      "A única plataforma especializada para negócios digitais com Internet Banking integrado, tudo na palma da sua mão.",
    image: shield,
    advantages: [
      {
        id: 5,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 6,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 7,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 8,
        advantage: "Controle completo desde o checkout até as transações;",
      },
    ],
  },
];

const advantagesRight: AdvantagesSection[] = [
  {
    id: 3,
    title: "Bspay Bank",
    description:
      "A única plataforma especializada para negócios digitais com Internet Banking integrado, tudo na palma da sua mão.",
    image: graficoPizza,
    advantages: [
      {
        id: 9,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 10,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 11,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 12,
        advantage: "Controle completo desde o checkout até as transações;",
      },
    ],
  },
  {
    id: 4,
    title: "Bspay Bank",
    description:
      "A única plataforma especializada para negócios digitais com Internet Banking integrado, tudo na palma da sua mão.",
    image: placaOuro,
    advantages: [
      {
        id: 13,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 14,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 15,
        advantage: "Controle completo desde o checkout até as transações;",
      },
      {
        id: 16,
        advantage: "Controle completo desde o checkout até as transações;",
      },
    ],
  },
];

export function Advantages() {
  return (
    <SectionContainer
      additionalSectionClass="pb-14 h-[156rem] lg:h-auto lg:pb-0"
      additionalContainerClass="bg-coins-bg bg-contain lg:bg-auto lg:bg-no-repeat bg-left pt-14 px-[1.375rem] lg:px-0"
    >
      <div className="flex flex-col lg:flex-row lg:justify-center gap-14 w-full h-[115rem]">
        <div className="flex flex-col items-center gap-14">
          {advantagesLeft.map((advantage) => (
            <AdvantageCard key={advantage.id} {...advantage} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-14 lg:pt-[19.125rem]">
          {advantagesRight.map((advantage) => (
            <AdvantageCard key={advantage.id} {...advantage} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
