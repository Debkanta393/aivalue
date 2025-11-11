import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function SubscriptionForm({showForm, setShowForm, buttonType}) {
  return (

      <AnimatePresence>
        {showForm && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
            />

            {/* Form Container */}
            <motion.div
              className="fixed z-50 bg-[#222831] rounded-2xl shadow-2xl p-8 w-[90%] max-w-md mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="absolute -top-2 -right-2 p-1 rounded-full bg-[#222831] hover:bg-gray-800 border border-gray-100 cursor-pointer" onClick={() => setShowForm(false)}>
                    <X />
                </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Contact Us
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full duration-300 bg-gradient-to-r from-amber-400 to-[#cdb383] hover:from-[#cdb383] hover:to-amber-400 shadow-lg shadow-cyan-500/20 cursor-pointer py-3 rounded-xl text-lg font-semibold transition-all px-10"
                >
                  Upgrade to {buttonType}
                </button>
              </form>

              
            </motion.div>
          </>
        )}
      </AnimatePresence>

  );
}
