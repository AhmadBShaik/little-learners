import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

type FAQ = {
  question: string;
  answer: string;
};

type FAQsAccordionProps = {
  faqs: Array<FAQ>;
};

const AccordionItem = ({
  value,
  question,
  answer,
}: {
  value: string;
  question: string;
  answer: string;
}) => {
  return (
    <>
      {/* Mobile View */}
      <Accordion.Item
        className="AccordionItem rounded-[10px] border-2 border-black px-[24px] py-[30px] laptop:hidden laptop:px-[30px] laptop:py-[34px] desktop:rounded-xl desktop:px-[40px] desktop:py-[37.5px]"
        value={value}
      >
        <Accordion.Header className="w-full">
          <Accordion.Trigger className="AccordionTrigger w-full">
            <div className="QuestionContainer flex w-full items-center gap-2.5 pb-[24px] text-left">
              <div className="flex-1">{question}</div>

              <div className="AccordionStatus relative size-[32px] rounded border-2 border-black laptop:rounded-md desktop:size-[40px]"></div>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="pt-[24px]">{answer}</Accordion.Content>
      </Accordion.Item>

      {/*Laptop and Desktop View */}
      <Accordion.Item
        className="AccordionItem hidden rounded-[10px] border-2 border-black px-[24px] py-[30px] laptop:block laptop:px-[30px] laptop:py-[34px] desktop:rounded-xl desktop:px-[40px] desktop:py-[37.5px]"
        value={value}
      >
        <div className="flex w-full items-start gap-[24px] desktop:gap-[30px]">
          <div className="flex-1 text-left">
            <Accordion.Header className="">
              <div className="QuestionContainer laptop:pb-[20px] desktop:pb-[24px]">
                {question}
              </div>
              <Accordion.Content className="pt-[20px] desktop:pt-[24px]">
                {answer}
              </Accordion.Content>
            </Accordion.Header>
          </div>
          <Accordion.Trigger className="AccordionTrigger">
            <div className="AccordionStatus relative size-[32px] rounded border-2 border-black laptop:rounded-md desktop:size-[40px]"></div>
          </Accordion.Trigger>
        </div>
      </Accordion.Item>
    </>
  );
};

function FAQsAccordion({ faqs }: FAQsAccordionProps) {
  const middleIndex = Math.ceil(faqs.length / 2);
  const column1 = faqs.splice(0, middleIndex);
  const column2 = faqs.splice(-middleIndex);
  return (
    <Accordion.Root
      className="flex w-full flex-col gap-[20px] laptop:flex-row laptop:gap-[40px] desktop:gap-[50px]"
      type="single"
      collapsible
    >
      <div className="flex w-full flex-col gap-[20px] laptop:gap-[24px] desktop:gap-[30px]">
        {column1.map((faq, index) => (
          <AccordionItem
            key={`item-0-${index}`}
            value={`item-0-${index}`}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
      <div className="flex w-full flex-col gap-[20px] laptop:gap-[24px] desktop:gap-[30px]">
        {column2.map((faq, index) => (
          <AccordionItem
            key={`item-1-${index}`}
            value={`item-1-${index}`}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </Accordion.Root>
  );
}

export default FAQsAccordion;
