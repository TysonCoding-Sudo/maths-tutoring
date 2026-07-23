"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Sparkles } from "lucide-react";
import { tutors } from "@/data/tutors";

const timeSlots = [
  "14:00", "14:30", "15:00", "15:30", "16:00",
  "16:30", "17:00", "17:30", "18:00",
];

const dateOptions = Array.from({ length: 14 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return {
    value: date.toISOString().split("T")[0],
    label: date.toLocaleDateString("en-ZA", { weekday: "short", day: "numeric", month: "short" }),
  };
});

export default function Scheduler() {
  const [selectedTutor, setSelectedTutor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isTrial, setIsTrial] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleBook = () => {
    if (!selectedTutor || !selectedDate || !selectedTime) return;
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200 text-center"
      >
        <Sparkles className="text-teal-600 mx-auto mb-3" size={36} />
        <h4 className="text-xl font-bold text-slate-800 mb-2">Session Booked!</h4>
        <p className="text-slate-600 text-sm mb-4">
          {isTrial ? "Your free trial lesson" : "Your lesson"} has been scheduled.
          Check your email for confirmation and session details.
        </p>
        <button
          onClick={() => {
            setConfirmed(false);
            setSelectedTutor("");
            setSelectedDate("");
            setSelectedTime("");
            setIsTrial(false);
          }}
          className="text-sm text-teal-600 underline underline-offset-2"
        >
          Book Another
        </button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-bold text-slate-800">Book a Lesson</h4>
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            checked={isTrial}
            onChange={(e) => setIsTrial(e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
          />
          Free Trial Lesson
        </label>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-2">
            <User size={16} /> Choose a Tutor
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {tutors.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTutor(t.id)}
                className={`text-left p-3 rounded-lg border text-sm transition-all ${
                  selectedTutor === t.id
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-teal-200"
                }`}
              >
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{t.subjects.slice(0, 2).join(", ")}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-2">
            <Calendar size={16} /> Pick a Date
          </label>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {dateOptions.map((d) => (
              <button
                key={d.value}
                onClick={() => setSelectedDate(d.value)}
                className={`shrink-0 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                  selectedDate === d.value
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-slate-200 bg-white text-slate-600 hover:border-teal-200"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <label className="text-sm font-medium text-slate-600 mb-2 flex items-center gap-2">
              <Clock size={16} /> Pick a Time
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`py-2.5 rounded-lg border text-sm font-medium transition-all ${
                    selectedTime === t
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-slate-200 bg-white text-slate-600 hover:border-teal-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <button
          onClick={handleBook}
          disabled={!selectedTutor || !selectedDate || !selectedTime}
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          {isTrial ? "Confirm Free Trial Lesson" : "Confirm Booking"}
        </button>
      </div>
    </div>
  );
}
