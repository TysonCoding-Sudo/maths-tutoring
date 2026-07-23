"use client";

import { motion } from "framer-motion";
import Scheduler from "@/components/ui/Scheduler";

export default function BookLesson() {
  return (
    <section id="book" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Book a Lesson</h2>
          <p className="mt-3 text-slate-600 max-w-lg mx-auto">
            Pick your tutor, choose a time, and get started. New students get a{" "}
            <span className="text-teal-600 font-semibold">free 30-minute trial lesson</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
        >
          <Scheduler />
        </motion.div>
      </div>
    </section>
  );
}
