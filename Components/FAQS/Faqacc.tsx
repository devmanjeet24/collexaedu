import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion"
import { FaqsData } from '@/DataFile/Data';
import { CircleQuestionMark } from 'lucide-react';

const Faqacc = () => {
    return (
        <>

        <div className='mt-10 rounded-3xl border border-neutral-200 bg-white/95 backdrop-blur-lg shadow-2xl p-[20px] '>

            <Accordion type="single" collapsible>

                {
                    FaqsData.map((item, id) => {
                        return (
                            <AccordionItem value={`item-${item.id}`} key={id}>
                                <AccordionTrigger className="group">
                                    <div className="flex items-start gap-2">
                                        <span
                                            className="
          rounded-[100px] p-[5px] 
          bg-[#d1deff] 
          transition-colors duration-300
          group-data-[state=open]:bg-green-100
        "
                                        >
                                            <CircleQuestionMark
                                                className="
            text-[#163683] 
            transition-colors duration-300
            group-data-[state=open]:text-green-600
          "
                                            />
                                        </span>
                                        {item.question}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        )
                    })
                }


            </Accordion>


            </div>

        </>
    )
}

export default Faqacc;