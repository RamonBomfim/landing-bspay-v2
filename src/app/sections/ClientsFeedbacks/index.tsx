import { SectionContainer } from "@/components/SectionContainer";
import { FeedbackCardProps } from "@/types/FeedbackCard";
import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import client1 from "../../../assets/client-1.png";
import client2 from "../../../assets/client-2.png";
import client3 from "../../../assets/client-3.png";
import rocket from "../../../assets/rocket.svg";
import walletWithCash from "../../../assets/wallet-with-cash.svg";
import { FeedbackCard } from "./components/FeedbackCard";

const feedbacks: FeedbackCardProps[] = [
  {
    name: "Lucas Omena",
    rating: 5,
    feedback:
      "A plataforma é muito fácil de mexer, sem nenhuma complicação. e eu posso receber pagamentos via pix, cripto e cartão de crédito pra mim isso é muito bom, isso faz toda diferença. Vocês são demais!",
    description: "Cliente",
    image: client1,
  },
  {
    name: "André Ferreira",
    rating: 5,
    feedback:
      "Atendimento muito bom, não tenho o que reclamar, suporte via WhatsApp da BSPay é muito boa e rápida, sempre disponível. muito fácil de usar, 100% de aprovação",
    description: "Cliente",
    image: client2,
  },
  {
    name: "Carlos Mendes",
    rating: 5,
    feedback:
      "Nossa experiência com a BSPay tem sido muito boa. A qualidade do serviço oferecido é incomparável e a equipe é show de bola. Com a BSPay não tenho dor de cabeça, superou minhas expectativas.",
    description: "Cliente",
    image: client3,
  },
];

export function ClientsFeedbacks() {
  return (
    <SectionContainer
      additionalSectionClass="bg-gradient-radial w-full h-auto pb-[6.25rem] lg:pb-0"
      additionalContainerClass="gap-7 lg:gap-14 pt-10 lg:py-14 px-[1.375rem] lg:px-0 lg:relative"
    >
      <Image
        src={walletWithCash}
        alt="Carteira com dinheiro"
        sizes="100vw"
        className="hidden lg:block lg:w-40 lg:h-auto lg:absolute lg:top-[-7.375rem] lg:left-[-1.5rem]"
        priority
      />
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7 lg:gap-0 w-full">
        <div className="flex flex-col gap-5 lg:gap-6">
          <h3 className="font-ibmPlex font-semibold text-2xl lg:text-6xl text-gray-white">
            Feedbacks e reviews de clientes
          </h3>
          <p className="font-franklin font-medium text-base lg:text-lg text-gray-border max-w-[40.75rem]">
            Da nossa experiência de mais de 10 anos no desenvolvimento de
            soluções em diversos setores.
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full lg:max-w-[20rem]">
          <div className="flex gap-4">
            <div className="flex lg:flex-col items-end lg:items-start gap-3">
              <h5 className="font-ibmPlex font-semibold text-base sm:text-2xl text-gray-white">
                Excelente
              </h5>

              <div className="flex lg:hidden justify-between items-center h-full sm:pt-1">
                <Star
                  className="w-4 sm:w-6 h-4 sm:h-6 text-green-primary"
                  weight="fill"
                />
                <Star
                  className="w-4 sm:w-6 h-4 sm:h-6 text-green-primary"
                  weight="fill"
                />
                <Star
                  className="w-4 sm:w-6 h-4 sm:h-6 text-green-primary"
                  weight="fill"
                />
                <Star
                  className="w-4 sm:w-6 h-4 sm:h-6 text-green-primary"
                  weight="fill"
                />
                <StarHalf
                  className="w-4 sm:w-6 h-4 sm:h-6 text-green-primary"
                  weight="fill"
                />
              </div>

              <p className="font-franklin font-medium text-base text-gray-white">
                <span className="text-green-primary">4.5</span> de 5
              </p>
            </div>

            <div className="hidden lg:flex lg:justify-between lg:pt-1 lg:gap-4">
              <Star className="w-6 h-6 text-green-primary" weight="fill" />
              <Star className="w-6 h-6 text-green-primary" weight="fill" />
              <Star className="w-6 h-6 text-green-primary" weight="fill" />
              <Star className="w-6 h-6 text-green-primary" weight="fill" />
              <StarHalf className="w-6 h-6 text-green-primary" weight="fill" />
            </div>
          </div>
          <div className="flex items-center lg:justify-end w-full">
            <p className="font-franklin font-medium text-base text-gray-white">
              Total de <span className="text-green-primary">562</span> reviews
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center sm:items-start lg:justify-between gap-7 w-full h-auto">
        {feedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.name}
            name={feedback.name}
            description={feedback.description}
            rating={feedback.rating}
            image={feedback.image}
            feedback={feedback.feedback}
          />
        ))}
      </div>

      <Image
        src={rocket}
        alt="Foquete"
        sizes="100vw"
        className="hidden lg:block lg:w-40 lg:h-auto lg:absolute lg:right-[-1.375rem] lg:bottom-[-7.75rem]"
        priority
      />
    </SectionContainer>
  );
}
