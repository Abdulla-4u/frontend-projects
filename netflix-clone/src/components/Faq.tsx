import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { AccordionData } from "../Data/Data";

type CustomAccordionItemProps = React.ComponentProps<typeof Item> & {
  header: string;
};

const AccordionItem: React.FC<CustomAccordionItemProps> = ({header, ...rest}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex items-center justify-between w-full">
        <span>{header}</span>
        {isEnter ? (
           <RxCross1
           size={23}
           className={`transition-transform duration-200 ${
             isEnter ? "rotate-180" : ""
           }`}
         />
        ) : (
          <AiOutlinePlus
          size={28}
          className={`transition-transform duration-200 ${
            isEnter ? "rotate-180" : ""
          }`}
        />
        )}
      </div>
    )}
    className="max-w-5xl mx-auto mb-1.5"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex bg-[#2D2D2D] hover:bg-[#414141] text-white sm:text-xl text-lg cursor-pointer w-full p-6 text-left transition duration-300 ease-in-out ${
          isEnter ? "" : ""
        }`,
    }}
    contentProps={{
      className:
        "transition-[height] bg-[#2D2D2D] border-t border-black text-white duration-200 ease-out",
    }}
    panelProps={{ className: "p-6 sm:text-xl text-lg" }}
  />
);

export default function Faq() {
  return (
    <div className="max-w-5xl mx-auto pt-5 border-t bg-black pb-20 sm:px-5 px-5">
      <h2 className="text-white font-bold text-xl mb-5">Frequently Asked Questions</h2>
      <Accordion transition transitionTimeout={200}>
        {AccordionData.map((item, index) => (
          <AccordionItem header={item.header} key={index}>
              <div className="whitespace-pre-line leading-relaxed">
                {item.content}
              </div>
          </AccordionItem>
        ) ) }   
      </Accordion>
    </div>
  );
}
