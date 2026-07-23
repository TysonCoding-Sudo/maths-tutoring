"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Printer, X, Lightbulb, AlertTriangle } from "lucide-react";
import type { StudyGuide } from "@/data/studyMaterials";

interface StudyGuideProps {
  guide: StudyGuide;
  onClose: () => void;
}

export default function StudyGuideView({ guide, onClose }: StudyGuideProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 backdrop-blur-sm py-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="relative w-full max-w-4xl mx-4"
      >
        {/* Toolbar — hidden when printing */}
        <div className="flex items-center justify-between bg-white rounded-t-2xl border-b border-slate-200 px-6 py-4 print:hidden">
          <div>
            <h2 className="text-lg font-bold text-slate-800">{guide.topic} Study Guide</h2>
            <p className="text-sm text-slate-500">{guide.gradeBand} &middot; {guide.grades}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              <Printer size={16} /> Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="bg-white rounded-b-2xl p-6 md:p-10 print:rounded-none print:p-6"
        >
          {/* Header */}
          <div className="border-b-2 border-teal-500 pb-4 mb-6 print:mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              {guide.topic}
            </h1>
            <p className="text-slate-500 mt-1">
              Study Guide for {guide.gradeBand} ({guide.grades})
            </p>
            <p className="text-slate-600 mt-2">{guide.description}</p>
          </div>

          {/* Sections */}
          {guide.sections.map((section, i) => (
            <div key={i} className="mb-6 break-inside-avoid">
              <h3 className="text-lg font-bold text-teal-700 mb-2">
                {i + 1}. {section.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">{section.content}</p>

              {section.examples && section.examples.length > 0 && (
                <div className="mt-3 space-y-2">
                  {section.examples.map((ex, j) => (
                    <div
                      key={j}
                      className="bg-teal-50 border border-teal-100 rounded-lg p-3"
                    >
                      <p className="text-sm font-medium text-slate-800">
                        {ex.problem}
                      </p>
                      <p className="text-sm text-teal-700 mt-1">
                        <span className="font-semibold">Solution:</span> {ex.solution}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Tips */}
          <div className="mb-6 break-inside-avoid">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={20} className="text-yellow-600" />
              <h3 className="text-lg font-bold text-slate-800">Study Tips</h3>
            </div>
            <ul className="space-y-2">
              {guide.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-yellow-500 mt-0.5">&#9733;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Common Mistakes */}
          <div className="break-inside-avoid">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={20} className="text-red-500" />
              <h3 className="text-lg font-bold text-slate-800">Common Mistakes</h3>
            </div>
            <div className="space-y-3">
              {guide.commonMistakes.map((cm, i) => (
                <div
                  key={i}
                  className="bg-red-50 border border-red-200 rounded-lg p-3"
                >
                  <p className="text-sm text-slate-800">
                    <span className="font-semibold text-red-600">&#10005; {cm.mistake}</span>
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    <span className="font-semibold">&#10003; Fix:</span> {cm.correction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-4 border-t border-slate-200 text-center text-xs text-slate-400 print:mt-4">
            <p>BrightMinds Maths &middot; Study Guide &middot; {guide.topic} ({guide.gradeBand})</p>
            <p className="mt-0.5">Generated from brightmindmaths.co.za</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
