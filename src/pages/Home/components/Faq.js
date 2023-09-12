import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why choose Exotic Cars?",
          "answer": "Exotic Cars offers a curated selection of luxury and performance cars that are meticulously maintained and inspected. When you choose us, you're choosing unparalleled quality and assurance in the luxury automobile sector."
        },
        {
          "id": 2,
          "question": "Can I schedule a test drive?",
          "answer": "Absolutely! At Exotic Cars, we believe in experiencing luxury first-hand. You can easily schedule a test drive for any car you're interested in. Contact our team to book an appointment."
        },
        {
          "id": 3,
          "question": "What is your return policy?",
          "answer": "We strive to ensure you're satisfied with your purchase. However, in case of any concerns, we have a detailed return and exchange policy. Please refer to our terms and conditions or contact our support team for specifics."
        },
        {
          "id": 4,
          "question": "Do you offer international shipping?",
          "answer": "Yes, we offer international shipping for our cars. Our team ensures that the process is smooth, handling all the necessary paperwork and logistics."
        }
    ];
    
    return (
        <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Have Queries about Exotic Cars?</h1>
        
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                {faqs.map((faq) => {
                    return <Accordion key={faq.id} faq={faq} />
                })}
            </div>
        </section>
    )
    
}