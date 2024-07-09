import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionCardProps } from "@/types/AccordionCard";

export function AccordionCard({ question, answer }: AccordionCardProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="border-b-1 border-gray-border"
    >
      <AccordionItem value="pergunta-1">
        <AccordionTrigger className="font-jakarta font-medium text-2xl text-blue-text text-left pb-2 hover:no-underline">
          {question}
        </AccordionTrigger>
        <AccordionContent className="font-jakarta font-regular text-base text-gray-text max-w-[45rem] pb-8">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
