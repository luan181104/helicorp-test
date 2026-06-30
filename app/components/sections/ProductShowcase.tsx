"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { showcaseItems } from "@/constants/showcase";

const easeOut = [0.16, 1, 0.3, 1] as const;

function ShowcaseRow({
  item,
  index,
}: {
  item: (typeof showcaseItems)[number];
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -120]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  const imageBlur = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [8, 0, 0, 8]
  );
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center gap-12 overflow-hidden py-32 md:flex-row md:gap-20 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-100 to-transparent blur-3xl"
      />

      {/* Image */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
          opacity: imageOpacity,
          filter: useTransform(imageBlur, (v) => `blur(${v}px)`),
        }}
        className="relative aspect-square w-full max-w-md flex-1"
      >
        <Image
  src={item.image}
  alt={item.title}
  fill
  sizes="(max-width: 768px) 90vw, 448px"
  className="object-contain drop-shadow-2xl"
/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
        className="flex-1 text-center md:text-left"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          {item.title}
        </h3>

        <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-gray-500 md:mx-0">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="mb-8 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
          PRODUCT SHOWCASE
        </p>
        <h2 className="mt-3 text-5xl font-bold">
          Designed Without Compromise
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-gray-500">
          Every detail, refined. Take a closer look at what makes it different.
        </p>
      </motion.div>

      {showcaseItems.map((item, index) => (
        <ShowcaseRow key={item.title} item={item} index={index} />
      ))}
    </section>
  );
}