"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Levels", href: "#levels" },
  { label: "Practice", href: "#practice" },
  { label: "Tutors", href: "#tutors" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold text-teal-700">
            <span className="text-teal-600">Maths</span>Mind
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              className="bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors"
            >
              Book Free Trial
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-teal-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block text-center bg-teal-600 text-white px-5 py-2 rounded-lg text-sm font-semibold"
            >
              Book Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
