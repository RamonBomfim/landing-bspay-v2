import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import person from "../../../assets/welcome-photo.png";
import { CardGroup } from "./components/CardGroup";
import { IntroductionNumber } from "./components/IntroductionNumber";
import { IntroductionText } from "./components/IntroductionText";
import { LearnMore } from "./components/LearnMore";

export function Welcome() {
  return (
    <SectionContainer
      additionalSectionClass="min-h-[29.875rem] md:min-h-80 lg:max-h-[29.875rem] bg-gray-white md:bg-gradient-linear md:border-b-4 md:border-green-primary"
      additionalContainerClass="md:relative md:flex-row "
    >
      <article className="flex flex-col gap-[1.875rem] px-[1.375rem] pb-[1.625rem] lg:pt-10 bg-gradient-linear border-b-4 border-green-primary md:px-0 md:bg-gradient-to-r md:from-inherit md:to-inherit md:border-0">
        <IntroductionText />

        <div className="flex items-center justify-between w-[20.5rem] h-[4.375rem] lg:w-[32rem] lg:h-[6.25rem]">
          <IntroductionNumber number="90" subText="Parceiras" />
          <IntroductionNumber number="310" subText="Usuários ativos" />
          <IntroductionNumber number="952k" subText="Em trasações por ano" />
        </div>
      </article>

      <article className="flex items-end justify-end pt-5 pb-7 md:py-5 px-0 h-72 md:absolute md:bottom-[-6rem] lg:bottom-[-3rem] md:right-[-1.375rem]">
        <div className="flex items-center justify-end pr-6 rounded-s-[1.875rem] w-96 h-32 lg:w-[40rem] lg:h-40 bg-gray-black relative">
          <CardGroup />

          <Image
            src={person}
            alt="Pessoa segurando notebook"
            sizes="100vw"
            className="w-44 md:w-60 lg:w-80 h-auto absolute bottom-0 left-0"
            priority
          />

          <LearnMore />
        </div>
      </article>
    </SectionContainer>
  );
}
