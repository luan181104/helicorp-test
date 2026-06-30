"use client";

import { motion } from "framer-motion";
import { specs } from "@/constants/specs";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Specifications() {
  return (
    <section id="specifications" className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            SPECIFICATIONS
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Engineered to Perform
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-3">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: easeOut, delay: index * 0.08 }}
              className="flex flex-col items-center justify-center gap-2 bg-black px-6 py-12 text-center"
            >
              <span className="text-4xl font-bold md:text-5xl">
                {spec.value}
              </span>
              <span className="text-sm text-cyan-400">{spec.unit}</span>
              <span className="mt-2 text-sm text-gray-500">
                {spec.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}