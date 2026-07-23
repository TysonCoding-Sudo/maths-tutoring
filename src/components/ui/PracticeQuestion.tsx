"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, RefreshCw, BookOpen } from "lucide-react";
import { practiceQuestions } from "@/data/practiceQuestions";

export default function PracticeQuestion({ filterGrade }: { filterGrade?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);

  const filtered = filterGrade
    ? practiceQuestions.filter((q) => q.grade === filterGrade)
    : practiceQuestions;

  const question = filtered[currentIndex];

  if (!question || filtered.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500">
        <p>No practice questions available for this filter.</p>
      </div>
    );
  }

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    setAnswered((p) => p + 1);
    if (option === question.correctAnswer) {
      setScore((p) => p + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    setCurrentIndex((p) => (p + 1) % filtered.length);
  };

  const reset = () => {
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswered(0);
  };

  const isCorrect = selected === question.correctAnswer;
  const progress = answered > 0 ? `${score}/${answered}` : "0/0";

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-slate-400">
          Question {currentIndex + 1} of {filtered.length}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-500">
            Score: {progress}
          </span>
          <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
            {question.grade} &middot; {question.topic}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
            question.difficulty === "Easy" ? "bg-green-100 text-green-700" :
            question.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
            "bg-red-100 text-red-700"
          }`}>
            {question.difficulty}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          <h4 className="text-lg font-semibold text-slate-800 mb-5">
            {question.question}
          </h4>

          <div className="space-y-2.5">
            {question.options.map((option) => {
              let state = "default";
              if (showResult) {
                if (option === question.correctAnswer) state = "correct";
                else if (option === selected) state = "wrong";
              }

              return (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  disabled={showResult}
                  className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                    state === "correct"
                      ? "border-green-500 bg-green-50 text-green-700"
                      : state === "wrong"
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-teal-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {state === "correct" && <CheckCircle size={16} className="text-green-600" />}
                    {state === "wrong" && <XCircle size={16} className="text-red-600" />}
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className={`mt-4 p-4 rounded-xl text-sm ${
                isCorrect
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <p className={`font-semibold mb-1 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                {isCorrect ? "Correct!" : "Not quite"}
              </p>
              <p className="text-slate-600">{question.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {showResult && (
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-teal-600 transition-colors"
          >
            <RefreshCw size={14} /> Reset
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            <BookOpen size={14} /> Next Question
          </button>
        </div>
      )}
    </div>
  );
}
