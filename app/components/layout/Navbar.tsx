"use client";

import Link from "next/link";

const menus = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Specs",
    href: "#specifications",
  },
  {
    name: "Reviews",
    href: "#testimonials",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-200 bg-white/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">Nothing</h1>

        <nav className="hidden gap-8 md:flex">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className="text-sm text-gray-600 transition hover:text-black"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        <button className="rounded-full bg-black px-5 py-2 text-sm text-white transition hover:scale-105">
          Buy Now
        </button>
      </div>
    </header>
  )
}