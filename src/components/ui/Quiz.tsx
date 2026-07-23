"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Sparkles } from "lucide-react";
import { quizQuestions, calculateQuizResult } from "@/data/quizQuestions";
import { tutors } from "@/data/tutors";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<ReturnType<typeof calculateQuizResult> | null>(null);

  const currentQuestion = quizQuestions[step];
  const totalSteps = quizQuestions.length;

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
    } else {
      setResult(calculateQuizResult(answers));
    }
  };

  const handleBack = () => {
    if (result) {
      setResult(null);
      setStep(totalSteps - 1);
    } else if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const tutor = tutors.find((t) => t.name === result?.recommendedTutor);

  if (result) {
    return (
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-teal-600" size={28} />
          <h4 className="text-xl font-bold text-slate-800">Your Match!</h4>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-slate-500 mb-1">Recommended Service</p>
            <p className="text-lg font-semibold text-teal-700">{result.recommendedService}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Recommended Tutor</p>
            <p className="text-lg font-semibold text-slate-800">{result.recommendedTutor}</p>
            {tutor && (
              <p className="text-sm text-slate-600 mt-1">{tutor.teachingStyle} &middot; {tutor.yearsExp} years exp</p>
            )}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{result.matchReason}</p>
          <div className="flex gap-3 pt-2">
            <a
              href="#book"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-teal-700 transition-colors"
            >
              Book a Free Trial <ChevronRight size={16} />
            </a>
            <button
              onClick={handleReset}
              className="text-sm text-slate-500 hover:text-teal-600 underline underline-offset-2"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-medium text-slate-400">
          Step {step + 1} of {totalSteps}
        </span>
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i <= step ? "bg-teal-600" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <h4 className="text-lg font-bold text-slate-800 mb-5">
            {currentQuestion.question}
          </h4>
          <div className="space-y-2.5">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  answers[currentQuestion.id] === opt.value
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-1 text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          <ChevronLeft size={16} /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={!answers[currentQuestion.id]}
          className="flex items-center gap-1 bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {step < totalSteps - 1 ? (
            <>Next <ChevronRight size={16} /></>
          ) : (
            <>See Result <Check size={16} /></>
          )}
        </button>
      </div>
    </div>
  );
}
