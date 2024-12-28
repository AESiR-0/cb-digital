"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a variety of digital services including podcast production, video editing, and more."
    },
    {
        question: "How can I contact you?",
        answer: "You can contact us via the 'Say Hi!' button on our homepage or through our contact page.You can contact us via the 'Say Hi!' button on our homepage or through our contact page.You can contact us via the 'Say Hi!' button on our homepage or through our contact page.You can contact us via the 'Say Hi!' button on our homepage or through our contact page.You can contact us via the 'Say Hi!' button on our homepage or through our contact page.You can contact us via the 'Say Hi!' button on our homepage or through our contact page."
    },
    {
        question: "What services do you offer?",
        answer: "We offer a variety of digital services including podcast production, video editing, and more."
    },
    {
        question: "How can I contact you?",
        answer: "You can contact us via the 'Say Hi!' button on our homepage or through our contact page."
    },
    {
        question: "What services do you offer?",
        answer: "We offer a variety of digital services including podcast production, video editing, and more."
    },
    {
        question: "How can I contact you?",
        answer: "You can contact us via the 'Say Hi!' button on our homepage or through our contact page."
    },
    // Add more FAQs as needed
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section px-5 md:px-10 lg:px-20 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Any Questions?</h2>
            {faqData.map((item, index) => (
                <div key={index} className="mb-10">
                    <button
                        className="w-full text-left p-4 bg-[#3b3b3b] text-white rounded-md"
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                    </button>
                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="px-4 pt-4 bg-primary text-white rounded-md"
                            >
                                {item.answer}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
} 