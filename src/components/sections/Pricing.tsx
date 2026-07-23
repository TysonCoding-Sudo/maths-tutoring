"use client";

import { motion } from "framer-motion";
import PriceCalculator from "@/components/ui/PriceCalculator";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Simple, Transparent Pricing</h2>
            <p className="mt-3 text-slate-600">
              Use the calculator to get an instant price estimate. No hidden fees, no surprises.
            </p>

            <div className="mt-8 space-y-4">
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">One-on-One Tutoring</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-slate-500">Online</p>
                    <p className="font-bold text-slate-800">R350 / session</p>
                  </div>
                  <div>
                    <p className="text-slate-500">In-Person</p>
                    <p className="font-bold text-slate-800">R450 / session</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <h4 className="font-semibold text-slate-800 mb-2">Group Classes</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-slate-500">Online</p>
                    <p className="font-bold text-slate-800">R200 / session</p>
                  </div>
                  <div>
                    <p className="text-slate-500">In-Person</p>
                    <p className="font-bold text-slate-800">R250 / session</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl p-5 text-white">
                <h4 className="font-bold mb-2">Package Deals</h4>
                <div className="space-y-1 text-sm">
                  <p>10-session package: <strong>10% discount</strong></p>
                  <p>20-session package: <strong>15% discount</strong></p>
                  <p>Weekly sessions: <strong>5% discount</strong></p>
                  <p className="mt-2 text-sm opacity-80">First lesson is free with our trial offer!</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PriceCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
