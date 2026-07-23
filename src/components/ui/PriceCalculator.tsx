"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { calculatePrice } from "@/data/pricing";

export default function PriceCalculator() {
  const [mode, setMode] = useState<"online" | "inPerson">("online");
  const [type, setType] = useState<"oneOnOne" | "group">("oneOnOne");
  const [sessions, setSessions] = useState(10);
  const [frequency, setFrequency] = useState<"weekly" | "biweekly" | "monthly">("weekly");

  const price = calculatePrice(mode, type, sessions, frequency);
  const perSession = Math.round(price / sessions);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="text-teal-600" size={22} />
        <h4 className="text-lg font-bold text-slate-800">Price Calculator</h4>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-slate-600 mb-2 block">Session Mode</label>
          <div className="flex gap-2">
            {(["online", "inPerson"] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setMode(opt)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  mode === opt
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {opt === "online" ? "Online" : "In-Person"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-600 mb-2 block">Session Type</label>
          <div className="flex gap-2">
            {(["oneOnOne", "group"] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setType(opt)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  type === opt
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {opt === "oneOnOne" ? "1-on-1" : "Group"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-600 mb-2 block">
            Number of Sessions: <span className="text-teal-700 font-bold">{sessions}</span>
          </label>
          <input
            type="range"
            min={1}
            max={40}
            value={sessions}
            onChange={(e) => setSessions(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1</span>
            <span>40</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-600 mb-2 block">Frequency</label>
          <div className="flex gap-2">
            {(["weekly", "biweekly", "monthly"] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setFrequency(opt)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  frequency === opt
                    ? "bg-teal-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {opt === "weekly" ? "Weekly" : opt === "biweekly" ? "Bi-Weekly" : "Monthly"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        key={`${mode}-${type}-${sessions}-${frequency}`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-5 text-white"
      >
        <p className="text-sm opacity-80 mb-1">Estimated Total</p>
        <p className="text-3xl font-bold">R{price.toLocaleString()}</p>
        <p className="text-sm opacity-80 mt-1">
          R{perSession.toLocaleString()} per session
        </p>
        {sessions >= 10 && (
          <p className="text-xs mt-2 bg-white/20 rounded-full px-3 py-1 inline-block">
            {sessions >= 20 ? "20% package discount applied" : "10% package discount applied"}
          </p>
        )}
      </motion.div>

      <a
        href="#book"
        className="mt-4 block text-center bg-teal-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors"
      >
        Book at This Price
      </a>
    </div>
  );
}
