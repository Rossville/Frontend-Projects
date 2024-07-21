import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = () => {
  return (
    <div className="m-auto pl-2 my-10 md:w-3/4">
      <div className="border-b-2 border-slate-200">
        <h1 className="font-bold text-2xl md:text-4xl my-4">FAQ</h1>
      </div>
      {/* Accordion */}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the cost of mobile application?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you provide guarentee for the mobile application?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default faq;
