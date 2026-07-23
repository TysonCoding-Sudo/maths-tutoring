"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, RefreshCw, Trophy, ArrowRight, BookOpen, BarChart3 } from "lucide-react";
import { quizQuestions } from "@/data/practiceQuestions";

const QUESTIONS_PER_QUIZ = 10;

export default function PracticeQuestion({ filterGrade, filterTopic }: { filterGrade?: string; filterTopic?: string }) {
  const [phase, setPhase] = useState<"select" | "quiz" | "result">("select");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<{ questionId: number; selected: string; correct: boolean }[]>([]);
  const [sessionQuestions, setSessionQuestions] = useState<typeof quizQuestions>([]);

  const filtered = useMemo(() => {
    let qs = quizQuestions;
    if (filterGrade) qs = qs.filter((q) => q.grade === filterGrade);
    if (filterTopic) qs = qs.filter((q) => q.topic === filterTopic);
    return qs;
  }, [filterGrade, filterTopic]);

  const startQuiz = () => {
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setSessionQuestions(shuffled.slice(0, QUESTIONS_PER_QUIZ));
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setAnswers([]);
    setPhase("quiz");
  };

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelected(option);
    setShowResult(true);
    const question = sessionQuestions[currentIndex];
    setAnswers((prev) => [
      ...prev,
      { questionId: question.id, selected: option, correct: option === question.correctAnswer },
    ]);
  };

  const handleNext = () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((p) => p + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setPhase("result");
    }
  };

  const handleReset = () => {
    setPhase("select");
    setCurrentIndex(0);
    setSelected(null);
    setShowResult(false);
    setAnswers([]);
  };

  const score = answers.filter((a) => a.correct).length;
  const total = answers.length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const correctAnswers = sessionQuestions.filter((q) =>
    answers.some((a) => a.questionId === q.id && a.correct)
  ).length;

  if (phase === "select") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
          <BookOpen size={28} className="text-teal-600" />
        </div>
        <h4 className="text-xl font-bold text-slate-800 mb-2">Ready for a Quiz?</h4>
        <p className="text-sm text-slate-500 mb-2">
          {filtered.length} questions available
          {filterGrade && <> for <strong>{filterGrade}</strong></>}
          {filterTopic && <> on <strong>{filterTopic}</strong></>}
        </p>
        <p className="text-xs text-slate-400 mb-6">
          You&apos;ll get {Math.min(QUESTIONS_PER_QUIZ, filtered.length)} random questions with instant feedback.
        </p>
        <button
          onClick={startQuiz}
          disabled={filtered.length === 0}
          className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Start Quiz <ArrowRight size={16} />
        </button>
      </div>
    );
  }

  if (phase === "result") {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-3">
            <Trophy size={28} className="text-teal-600" />
          </div>
          <h4 className="text-2xl font-bold text-slate-800">Quiz Complete!</h4>
          <p className="text-slate-500 mt-1">Here&apos;s how you did:</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
            <p className="text-2xl font-bold text-green-700">{score}</p>
            <p className="text-xs text-green-600">Correct</p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 text-center border border-red-200">
            <p className="text-2xl font-bold text-red-700">{total - score}</p>
            <p className="text-xs text-red-600">Wrong</p>
          </div>
          <div className="bg-teal-50 rounded-xl p-4 text-center border border-teal-200">
            <p className="text-2xl font-bold text-teal-700">{percentage}%</p>
            <p className="text-xs text-teal-600">Score</p>
          </div>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            className={`h-2.5 rounded-full ${percentage >= 70 ? "bg-green-500" : percentage >= 40 ? "bg-yellow-500" : "bg-red-500"}`}
          />
        </div>

        <div className="space-y-3 mb-6">
          {sessionQuestions.map((q, i) => {
            const answer = answers[i];
            if (!answer) return null;
            const isCorrect = answer.correct;
            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl border text-sm ${
                  isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                }`}
              >
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" />
                  ) : (
                    <XCircle size={16} className="text-red-600 mt-0.5 shrink-0" />
                  )}
                  <div>
                    <p className="font-medium text-slate-800 mb-1">{q.question}</p>
                    <p className="text-xs text-slate-500">
                      {isCorrect ? (
                        <>You answered <strong className="text-green-700">{answer.selected}</strong></>
                      ) : (
                        <>You answered <strong className="text-red-700">{answer.selected}</strong> &middot; Correct: <strong className="text-green-700">{q.correctAnswer}</strong></>
                      )}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{q.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleReset}
            className="flex-1 flex items-center justify-center gap-2 bg-white text-teal-700 px-5 py-3 rounded-xl font-semibold text-sm border border-teal-200 hover:bg-teal-50 transition-colors"
          >
            <RefreshCw size={16} /> Try Again
          </button>
          <a
            href="#book"
            className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors"
          >
            <BarChart3 size={16} /> Book a Session
          </a>
        </div>
      </motion.div>
    );
  }

  const question = sessionQuestions[currentIndex];
  const isCorrect = selected === question.correctAnswer;

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 bg-slate-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }}
            className="h-2 rounded-full bg-teal-500"
          />
        </div>
        <span className="text-xs font-medium text-slate-400 shrink-0">
          {currentIndex + 1}/{sessionQuestions.length}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
            {question.grade}
          </span>
          <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
            {question.topic}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">
            Score: {score}/{answers.length || "—"}
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <h4 className="text-lg font-semibold text-slate-800 mb-5">
            {currentIndex + 1}. {question.question}
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
                        : selected === option
                          ? "border-teal-500 bg-teal-50 text-teal-700"
                          : "border-slate-200 bg-white text-slate-600 hover:border-teal-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {state === "correct" && <CheckCircle size={16} className="text-green-600" />}
                    {state === "wrong" && <XCircle size={16} className="text-red-600" />}
                    <span className={!showResult && selected === option ? "text-teal-700" : ""}>{option}</span>
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
                {isCorrect ? "✓ Correct!" : "✗ Not quite"}
              </p>
              <p className="text-slate-600">{question.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {showResult && (
        <div className="flex items-center justify-between mt-5">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-teal-600 transition-colors"
          >
            <RefreshCw size={14} /> Quit & Try Again
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            {currentIndex < sessionQuestions.length - 1 ? (
              <>Next <ArrowRight size={16} /></>
            ) : (
              <>See Results <Trophy size={16} /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
