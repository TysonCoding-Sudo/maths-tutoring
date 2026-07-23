"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  items: { id: string; content: React.ReactNode }[];
  autoPlayInterval?: number;
}

export default function Carousel({ items, autoPlayInterval = 5000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % items.length), [items.length]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (isPaused || items.length <= 1) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [isPaused, next, autoPlayInterval, items.length]);

  if (items.length === 0) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35 }}
          >
            {items[current].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={prev}
            className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-teal-600" : "bg-slate-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
