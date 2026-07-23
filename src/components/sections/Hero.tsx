"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, GraduationCap, Award, TrendingUp } from "lucide-react";
import Carousel from "@/components/ui/Carousel";
import { testimonials } from "@/data/testimonials";

const stats = [
  { icon: GraduationCap, label: "Students Tutored", value: "500+" },
  { icon: Star, label: "Average Rating", value: "4.9" },
  { icon: Award, label: "Years Experience", value: "12+" },
  { icon: TrendingUp, label: "Pass Rate Improvement", value: "85%" },
];

export default function Hero() {
  const snippetItems = testimonials.slice(0, 4).map((t) => ({
    id: t.id,
    content: (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-teal-100 shadow-sm">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-slate-600 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
        <p className="text-xs font-semibold text-slate-500 mt-2">
          — {t.name}, {t.role}
        </p>
      </div>
    ),
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Maths Tutoring That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Builds Confidence
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-lg">
              Personalised tutoring from foundation phase to matric. Online or in-person, we help every student reach their full potential.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#book"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200"
              >
                Book a Free Trial Lesson <ArrowRight size={18} />
              </a>
              <a
                href="#quiz"
                className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-xl font-semibold text-sm border border-teal-200 hover:bg-teal-50 transition-colors"
              >
                Find Your Fit
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="text-teal-600 mx-auto mb-1" size={22} />
                  <p className="text-xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-white/60 backdrop-blur rounded-2xl p-5 border border-teal-100 shadow-sm">
              <p className="text-sm font-semibold text-slate-600 mb-3 flex items-center gap-2">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                What parents & students say
              </p>
              <Carousel items={snippetItems} autoPlayInterval={4000} />
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-6 text-white">
              <p className="text-lg font-bold">Try a Quick Question</p>
              <p className="text-sm opacity-80 mt-1">What is the area of a rectangle with length 8 cm and width 5 cm?</p>
              <div className="flex gap-2 mt-3">
                {["13 cm²", "26 cm²", "40 cm²", "45 cm²"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => alert(opt === "40 cm²" ? "Correct! 🎉 Area = 8 × 5 = 40 cm²" : "Not quite! Try again.")}
                    className="bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
