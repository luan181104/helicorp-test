"use client";

import { motion } from "framer-motion";
import { features } from "@/app/constants/features";

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="mb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
          FEATURES
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Why You'll Love It
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-500">
          Premium sound meets minimalist design.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-black p-4 text-white">
                <Icon size={28} />
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-500">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}