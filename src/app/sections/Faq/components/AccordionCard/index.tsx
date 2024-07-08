import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionCard() {
  return (
    <Accordion
      type="single"
      collapsible
      className="border-b-1 border-gray-border"
    >
      <AccordionItem value="pergunta-1">
        <AccordionTrigger className="font-jakarta font-medium text-2xl text-blue-text pb-2 hover:no-underline">
          Lorem Ipsum dolor?
        </AccordionTrigger>
        <AccordionContent className="font-jakarta font-regular text-base text-gray-text max-w-[45rem] pb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies
          quam quis ex rutrum, et pellentesque ex fermentum. Fusce id eros
          velit.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
