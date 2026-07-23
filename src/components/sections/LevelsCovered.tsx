"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { levels, gradeBands, curriculumOptions } from "@/data/levels";

export default function LevelsCovered() {
  const [activeBand, setActiveBand] = useState<string | null>(null);
  const [activeCurriculum, setActiveCurriculum] = useState<string | null>(null);

  const filtered = levels.filter((level) => {
    if (activeBand) {
      const band = gradeBands.find((b) => b.label === activeBand);
      if (band && !band.range.includes(level.grade)) return false;
    }
    if (activeCurriculum && !level.curriculum.includes(activeCurriculum)) return false;
    return true;
  });

  return (
    <section id="levels" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Levels Covered</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            From Grade 1 to Matric, aligned to CAPS, IEB, and Cambridge curriculums.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            onClick={() => setActiveBand(null)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              !activeBand ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            All Grades
          </button>
          {gradeBands.map((band) => (
            <button
              key={band.label}
              onClick={() => setActiveBand(activeBand === band.label ? null : band.label)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                activeBand === band.label
                  ? "bg-teal-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {band.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActiveCurriculum(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !activeCurriculum ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            All Curriculums
          </button>
          {curriculumOptions.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCurriculum(activeCurriculum === c ? null : c)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCurriculum === c
                  ? "bg-cyan-100 text-cyan-700"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((level, i) => (
            <motion.div
              key={level.grade}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              layout
              className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-teal-200 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-slate-800 text-sm">{level.grade}</h3>
                {level.age && (
                  <span className="text-xs text-slate-400">{level.age}</span>
                )}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">{level.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {level.curriculum.map((c) => (
                  <span
                    key={c}
                    className="text-xs bg-cyan-50 text-cyan-600 px-2 py-0.5 rounded-full font-medium"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {level.subjects.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
                {level.subjects.length > 3 && (
                  <span className="text-xs text-slate-400">+{level.subjects.length - 3} more</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
