"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Globe, Video, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let&apos;s Talk</h2>
            <p className="mt-3 text-slate-300">
              Have a question or ready to get started? Reach out — we&apos;d love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="https://wa.me/27123456789"
                className="flex items-center gap-3 text-slate-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                  <MessageCircle size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">WhatsApp</p>
                  <p className="text-sm font-medium text-white">+27 12 345 6789</p>
                </div>
              </a>

              <a
                href="tel:+27123456789"
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-600/20 flex items-center justify-center group-hover:bg-teal-600/30 transition-colors">
                  <Phone size={20} className="text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-sm font-medium text-white">+27 12 345 6789</p>
                </div>
              </a>

              <a
                href="mailto:hello@mathsmind.co.za"
                className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-600/20 flex items-center justify-center group-hover:bg-cyan-600/30 transition-colors">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-sm font-medium text-white">hello@mathsmind.co.za</p>
                </div>
              </a>
            </div>

            <div className="flex gap-3 mt-8">
              {[
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
                { icon: Globe, href: "#", label: "LinkedIn" },
                { icon: Video, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 hover:bg-teal-600 hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
          >
            <h4 className="text-lg font-bold text-white mb-2">Get Study Tips & Updates</h4>
            <p className="text-sm text-slate-300 mb-5">
              Sign up for our newsletter and receive weekly study tips, exam strategies, and free resources.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing! You'll hear from us soon.");
              }}
              className="space-y-3"
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-teal-700 transition-colors"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} BrightMinds Maths Tutoring. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
