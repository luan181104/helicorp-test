import { product } from "@/app/constants/product";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-blue-500 uppercase tracking-[0.3em]">
            NEW ARRIVAL
          </p>

          <h1 className="mb-6 text-6xl font-bold">
            {product.name}
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            {product.description}
          </p>

          <div className="flex gap-4">
            <button className="rounded-full bg-black px-6 py-3 text-white">
              {product.ctaPrimary}
            </button>

            <button className="rounded-full border px-6 py-3">
              {product.ctaSecondary}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/hero.jpg"
            alt="Nothing Ear"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}