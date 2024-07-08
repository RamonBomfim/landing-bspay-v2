import { SectionContainer } from "@/components/SectionContainer";
import { FeedbackCardProps } from "@/types/FeedbackCard";
import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import person1 from "../../../assets/person01.png";
import person2 from "../../../assets/person02.png";
import person3 from "../../../assets/person03.png";
import { FeedbackCard } from "./components/FeedbackCard";

const feedbacks: FeedbackCardProps[] = [
  {
    name: "Maria Silva",
    rating: 5,
    feedback:
      "Vocês são a parceira ideal para nossos negócios online. O serviço de vocês é essencial para garantir a segurança e a eficiência das transações.",
    description: "Gerente de E-commerce",
    image: person1,
  },
  {
    name: "João Oliveira",
    rating: 4.5,
    feedback:
      "Estamos muito satisfeitos com a qualidade do serviço. Vocês são extremamente profissionais e eficientes!",
    description: "CEO",
    image: person3,
  },
  {
    name: "Pedro Santos",
    rating: 4.5,
    feedback:
      "Os devs gostaram bastante de documentação que vocês montaram, a integração foi fácil e rápida! E suporte também tirou várias dúvidas.",
    description: "Diretor Financeiro",
    image: person2,
  },
];

export function ClientsFeedbacks() {
  return (
    <SectionContainer
      additionalSectionClass="bg-gradient-radial w-full h-auto lg:h-[48.5rem] pb-[6.25rem] lg:pb-0"
      additionalContainerClass="gap-7 lg:gap-14 pt-10 lg:py-14 px-[1.375rem] lg:px-0"
    >
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
    </SectionContainer>
  );
}
