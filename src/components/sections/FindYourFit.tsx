"use client";

import { motion } from "framer-motion";
import Quiz from "@/components/ui/Quiz";

export default function FindYourFit() {
  return (
    <section id="quiz" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Find Your <span className="text-teal-600">Fit</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Not sure where to start? Answer 4 quick questions and we&apos;ll recommend the perfect service and tutor for you.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Select your grade level",
                "Tell us what you're struggling with",
                "Choose your learning goal",
                "Pick your preferred format",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Quiz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
