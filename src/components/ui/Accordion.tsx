"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionProps {
  items: { question: string; answer: string; category?: string }[];
  filter?: string;
}

export default function Accordion({ items, filter }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <div className="space-y-3">
      {filtered.map((item, i) => (
        <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
          >
            {item.question}
            <ChevronDown
              size={18}
              className={`text-slate-400 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
