"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator, Triangle, ListOrdered, Square,
  Dices, TrendingUp, PieChart, Download, BookOpen,
} from "lucide-react";
import { studyGuides, topics, gradeBands } from "@/data/studyMaterials";
import StudyGuideView from "@/components/ui/StudyGuide";
import type { StudyGuide } from "@/data/studyMaterials";

const iconMap: Record<string, React.ElementType> = {
  Calculator, Triangle, ListOrdered, Square,
  Dices, TrendingUp, PieChart,
};

export default function StudyCentre() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [activeBand, setActiveBand] = useState<string | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<StudyGuide | null>(null);

  const filtered = studyGuides.filter((g) => {
    if (activeTopic && g.topic !== activeTopic) return false;
    if (activeBand && g.gradeBand !== activeBand) return false;
    return true;
  });

  return (
    <>
      <section id="study" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Study Centre
            </h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Downloadable study guides for every topic. Learn the concepts, work through examples, and avoid common mistakes.
            </p>
          </motion.div>

          {/* Topic filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <button
              onClick={() => setActiveTopic(null)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                !activeTopic ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              All Topics
            </button>
            {topics.map((t) => {
              const Icon = iconMap[studyGuides.find((g) => g.topic === t)?.icon || "BookOpen"] || BookOpen;
              return (
                <button
                  key={t}
                  onClick={() => setActiveTopic(activeTopic === t ? null : t)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    activeTopic === t ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <Icon size={14} />
                  {t}
                </button>
              );
            })}
          </div>

          {/* Grade band filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveBand(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                !activeBand ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              All Grades
            </button>
            {gradeBands.map((b) => (
              <button
                key={b}
                onClick={() => setActiveBand(activeBand === b ? null : b)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeBand === b ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Guide cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((guide, i) => {
              const Icon = iconMap[guide.icon] || BookOpen;
              return (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all group cursor-pointer"
                  onClick={() => setSelectedGuide(guide)}
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                    <Icon className="text-teal-600" size={20} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">{guide.topic}</h3>
                  <p className="text-xs text-teal-600 font-medium mt-0.5">{guide.gradeBand}</p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">{guide.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {guide.grades.split(", ").map((g) => (
                      <span key={g} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                        {g}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-teal-600 group-hover:underline underline-offset-2">
                    <Download size={12} /> Download Study Guide
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-8">No study guides match your filters.</p>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedGuide && (
          <StudyGuideView
            guide={selectedGuide}
            onClose={() => setSelectedGuide(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
