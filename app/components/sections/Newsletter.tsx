"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    // TODO: thay bằng API call thật khi có backend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 to-cyan-800 px-6 py-28">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <div className="mb-6 inline-flex rounded-2xl bg-white/15 p-4">
          <Mail className="text-white" size={28} />
        </div>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Stay in the Loop
        </h2>

        <p className="mx-auto mt-4 max-w-md text-cyan-100">
          Get early access to new drops, exclusive discounts, and product updates.
        </p>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-white/15 px-6 py-4 text-white"
            >
              <CheckCircle2 size={20} />
              <span>You're in! Check your inbox to confirm.</span>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="you@example.com"
                  className="flex-1 rounded-full border-0 bg-white px-6 py-4 text-gray-900 outline-none ring-2 ring-transparent placeholder:text-gray-400 focus:ring-white"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-full bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-gray-900 disabled:opacity-60"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </div>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-red-100"
                >
                  {errorMsg}
                </motion.p>
              )}

              <p className="mt-4 text-xs text-cyan-100/80">
                No spam. Unsubscribe anytime.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}