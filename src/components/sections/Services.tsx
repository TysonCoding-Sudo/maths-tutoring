"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { UserRound, Users, BookOpen, FileCheck, Monitor } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  UserRound,
  Users,
  BookOpen,
  FileCheck,
  Monitor,
};

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our Services</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Five ways we help students master maths — from one-on-one support to self-paced resources.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || UserRound;
            return (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-xl p-5 border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-100/30 transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                  <Icon className="text-teal-600" size={20} />
                </div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1.5">{service.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{service.shortDesc}</p>
                <span className="text-xs text-teal-600 font-medium mt-2 inline-block group-hover:underline underline-offset-2">
                  {service.targetGrades}
                </span>
              </motion.a>
            );
          })}
        </div>

        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || UserRound;
          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              className={`mt-12 ${i > 0 ? "border-t border-slate-100 pt-12" : ""}`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                      <Icon className="text-teal-600" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#book"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    Book a session &rarr;
                  </a>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                  <p className="text-sm font-semibold text-slate-600 mb-2">Good for</p>
                  <span className="inline-block bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">
                    {service.targetGrades}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
