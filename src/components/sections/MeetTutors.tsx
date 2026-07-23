"use client";

import { motion } from "framer-motion";
import { tutors } from "@/data/tutors";
import { BookOpen, MapPin, Clock, Award } from "lucide-react";

export default function MeetTutors() {
  return (
    <section id="tutors" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Meet the Tutors</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Experienced, passionate, and dedicated to helping your child succeed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {tutors.map((tutor, i) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold">
                {tutor.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="text-center font-bold text-slate-800">{tutor.name}</h3>
              <p className="text-center text-xs text-teal-600 font-medium mt-0.5">{tutor.teachingStyle}</p>

              <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <BookOpen size={12} className="text-slate-400 shrink-0" />
                  {tutor.subjects.join(", ")}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={12} className="text-slate-400 shrink-0" />
                  {tutor.availability[0]}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Award size={12} className="text-slate-400 shrink-0" />
                  {tutor.yearsExp} years &middot; {tutor.qualification}
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-3 leading-relaxed line-clamp-2">{tutor.bio}</p>

              <div className="flex flex-wrap gap-1 mt-3">
                {tutor.grades.slice(0, 3).map((g) => (
                  <span key={g} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                    {g}
                  </span>
                ))}
              </div>

              <a
                href="#book"
                className="mt-4 block text-center bg-teal-600 text-white py-2 rounded-lg text-xs font-semibold hover:bg-teal-700 transition-colors"
              >
                Book with {tutor.name.split(" ")[0]}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
