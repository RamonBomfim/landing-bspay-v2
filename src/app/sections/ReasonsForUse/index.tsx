import { SectionContainer } from "@/components/SectionContainer";
import { Medal, ShieldCheck, ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import { ReasonCardProps } from "../../../types/ReasonCard";
import { ReasonCard } from "./components/ReasonCard";

const reasonsForUse: ReasonCardProps[] = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Atuamos seguindo as principais recomendações dos órgãos reguladores do mercado financeiro.",
  },
  {
    icon: ThumbsUp,
    title: "Confiabilidade",
    description:
      "Usamos verificação de duas etapas para proteger a sua conta. Sendo assim, apenas você tem acesso ao seu dinheiro.",
  },
  {
    icon: Medal,
    title: "Credibilidade",
    description:
      "Somos licenciados pelo Banco Central do Brasil a operar como facilitadora de pagamento.",
  },
];

export function ReasonsForUse() {
  return (
    <SectionContainer
      additionalSectionClass="h-auto pt-14"
      additionalContainerClass="gap-7 lg:gap-14 px-[1.375rem] lg:px-0"
    >
      <h3 className="font-jakarta font-bold text-3xl lg:text-5xl text-blue-text text-center">
        Por que trazer sua operação para BSPAY
      </h3>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full h-auto gap-5 lg:gap-6">
        {reasonsForUse.map((reason) => (
          <ReasonCard
            key={reason.title}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
