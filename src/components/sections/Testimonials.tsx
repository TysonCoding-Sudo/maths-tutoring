"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [filter, setFilter] = useState<string | null>(null);
  const [filterRole, setFilterRole] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return testimonials.filter((t) => {
      if (filter && t.subject !== filter) return false;
      if (filterRole && t.role !== filterRole) return false;
      return true;
    });
  }, [filter, filterRole]);

  const subjects = [...new Set(testimonials.map((t) => t.subject).filter(Boolean))];

  const avgImprovement = useMemo(() => {
    const numbers = testimonials
      .map((t) => t.improvement)
      .filter(Boolean)
      .filter((s) => s && s.includes("→"));
    return numbers.length;
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Results That Speak</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Hear from students and parents about their experience with BrightMinds Maths.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setFilterRole(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !filterRole ? "bg-teal-600 text-white" : "bg-white text-slate-500 hover:bg-slate-100"
            }`}
          >
            All
          </button>
          {["Student", "Parent"].map((r) => (
            <button
              key={r}
              onClick={() => setFilterRole(filterRole === r ? null : r)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filterRole === r ? "bg-teal-600 text-white" : "bg-white text-slate-500 hover:bg-slate-100"
              }`}
            >
              {r}s
            </button>
          ))}
          {subjects.map((s) => s && (
            <button
              key={s}
              onClick={() => setFilter(filter === s ? null : s)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === s ? "bg-teal-600 text-white" : "bg-white text-slate-500 hover:bg-slate-100"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
              <Quote className="text-teal-200 mb-2" size={24} />
              <p className="text-sm text-slate-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-1 mt-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.role} &middot; {t.grade}
                  </p>
                </div>
                {t.improvement && (
                  <div className="text-right">
                    <TrendingUp size={14} className="text-green-500 inline-block mr-1" />
                    <span className="text-xs font-semibold text-green-600">{t.improvement}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
