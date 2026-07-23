"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import PracticeQuestion from "@/components/ui/PracticeQuestion";
import { topics } from "@/data/practiceQuestions";
import { levels } from "@/data/levels";

export default function PracticeZone() {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [activeGrade, setActiveGrade] = useState<string | null>(null);

  const gradeOptions = levels.map((l) => l.grade);

  return (
    <section id="practice" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Practice Zone</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Test your skills with interactive problems, instant feedback, and downloadable past papers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setActiveGrade(null)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    !activeGrade ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  All Grades
                </button>
                {gradeOptions.slice(0, 6).map((g) => (
                  <button
                    key={g}
                    onClick={() => setActiveGrade(activeGrade === g ? null : g)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeGrade === g ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setActiveTopic(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    !activeTopic ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  All Topics
                </button>
                {topics.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveTopic(activeTopic === t ? null : t)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      activeTopic === t ? "bg-cyan-100 text-cyan-700" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <PracticeQuestion filterGrade={activeGrade || undefined} />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <Download size={18} className="text-teal-600" />
                Download Past Papers
              </h4>
              <div className="space-y-2">
                {[ "Grade 10", "Grade 11", "Grade 12/Matric" ].map((grade) => (
                  <button
                    key={grade}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-600 hover:border-teal-200 hover:bg-teal-50/50 transition-colors"
                  >
                    <span>{grade} Mathematics Past Paper</span>
                    <Download size={14} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Struggling with a topic?</h4>
              <p className="text-sm opacity-90 mb-4">
                Get one-on-one help from an expert tutor. Book a session and we&apos;ll sort it out together.
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-1.5 bg-white text-teal-700 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-colors"
              >
                Book a Session <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
