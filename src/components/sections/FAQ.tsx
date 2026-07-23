"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

const categories = ["All", "Scheduling", "Pricing", "Online Tools", "Cancellation", "Curriculum"];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? faqItems
    : faqItems.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Frequently Asked Questions</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to know about tutoring with MathsMind.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-teal-600 text-white"
                  : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm p-2"
        >
          <Accordion items={filtered} />
        </motion.div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Still have questions?{" "}
          <a href="#contact" className="text-teal-600 font-semibold hover:underline underline-offset-2">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}
