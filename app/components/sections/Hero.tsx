"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { product } from "@/app/constants/product";
import Button from "@/app/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-200 blur-[120px]" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200 blur-[120px]" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-600">
            NEW ARRIVAL
          </p>

          <h1 className="font-space mb-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {product.name}
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-gray-700">
            {product.slogan}
          </h2>

          <p className="max-w-xl text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Nếu có Button component thì dùng Button */}
            <Button variant="primary">
              {product.ctaPrimary}
            </Button>

            <Button variant="secondary">
              {product.ctaSecondary}
            </Button>
          </div>

          {/* Statistics */}

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold">40H</h3>
              <p className="text-gray-500">Battery</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-gray-500">Noise Cancel</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">5.4</h3>
              <p className="text-gray-500">Bluetooth</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          className="flex justify-center"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt={product.name}
            width={650}
            height={650}
            priority
            className="w-full max-w-xl object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}