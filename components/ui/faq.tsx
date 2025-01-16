import { Heading } from '@/components/ui/heading'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '@/data/faqs'

export function FAQ() {
    return (
    <section className='pd-section w-full flex flex-col gap-10 items-center justify-center'>
        <span className='w-full flex flex-col gap-5 text-center'>
          <Heading as='h2'>Frequently Asked Questions</Heading>
        </span>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item,index)=>(
            <AccordionItem value={`item-${index+1}`} key={index}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </section>
    )
}