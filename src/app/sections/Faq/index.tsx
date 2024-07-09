import { SectionContainer } from "@/components/SectionContainer";
import { AccordionCardProps } from "@/types/AccordionCard";
import Image from "next/image";
import targetArrow from "../../../assets/target-arrow.svg";
import { AccordionCard } from "./components/AccordionCard";

interface AccordionSection extends AccordionCardProps {
  id: number;
}

const FaqData: AccordionSection[] = [
  {
    id: 1,
    question: "Quais são as taxas de transação cobradas pela BSPay?",
    answer:
      "A BSPay oferece taxas de transação extremamente competitivas, adaptadas para atender às necessidades de grandes negócios. As taxas variam conforme o volume de transações, quanto maior a sua escala menor é sua taxa.",
  },
  {
    id: 2,
    question: "Existem taxas ocultas na BSPay?",
    answer:
      "Não. A BSPay preza pela transparência total com seus clientes, garantindo que todas as taxas e custos sejam claros desde o início, sem surpresas desagradáveis.",
  },
  {
    id: 3,
    question: "A aprovação da minha conta é imediata?",
    answer:
      "A aprovação dos documentos normalmente é em torno de 1 hora, pois passa pelo time de compliance para verificar a autenticidade dos documentos enviados.",
  },
  {
    id: 4,
    question:
      " Quais documentos são necessários para abrir uma conta na BSPay?",
    answer:
      "Documento de identificação frente e verso, cartão CNPJ, contrato social e comprovante de endereço.",
  },
  {
    id: 5,
    question: "O suporte funciona durante o final de semana e feriados?",
    answer:
      " Sim! Nossa equipe de suporte está disponível 24/7 para ajudar você com que precisar.",
  },
];

export function Faq() {
  return (
    <SectionContainer
      additionalContainerClass="items-center pt-14 pb-24 px-[1.375rem] lg:px-0"
      additionalSectionClass="pt-20"
    >
      <div className="flex flex-col items-center relative gap-7 lg:gap-14 w-full lg:w-[52rem]">
        <Image
          src={targetArrow}
          alt="Divisão"
          sizes="100vw"
          className="w-[14.375rem] h-auto absolute top-[-14rem] lg:top-[-5rem] left-[-3.75rem] lg:left-[-10rem]"
          priority
        />

        <h4 className="font-jakarta font-bold text-3xl lg:text-5xl text-blue-text text-center lg:text-left">
          Dúvidas frequentes
        </h4>

        <div className="flex flex-col w-full lg:px-8 gap-4">
          {FaqData.map((data: AccordionSection) => (
            <AccordionCard
              key={data.id}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
