"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/constants/faqs";

const easeOut = [0.16, 1, 0.3, 1] as const;

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-medium pr-8">{question}</span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="flex-shrink-0 rounded-full bg-gray-100 p-2"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="overflow-hidden"
          >
            <p className="pb-6 leading-7 text-gray-500">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="mb-16 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
          FAQ
        </p>
        <h2 className="mt-3 text-5xl font-bold">Got Questions?</h2>
      </motion.div>

      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
}