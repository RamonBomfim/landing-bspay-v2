import { SectionContainer } from "@/components/SectionContainer";
import Image from "next/image";
import targetArrow from "../../../assets/target-arrow.svg";
import { AccordionCard } from "./components/AccordionCard";

export function Faq() {
  return (
    <SectionContainer additionalContainerClass="items-center pt-[150px] lg:pt-14 pb-24 px-[1.375rem] lg:px-0">
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
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
        </div>
      </div>
    </SectionContainer>
  );
}
