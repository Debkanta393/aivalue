import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#fefbf5] to-[#fcf8eb] border-t border-[#cdb383]/30 py-24 mt-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#cdb383]/20 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          {/* Contact Form */}
          <div className="flex-1 bg-white/60 backdrop-blur-lg border border-[#cdb383]/30 rounded-3xl shadow-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-500">
            <h3 className="text-3xl font-bold text-[#2e2e2e] mb-6">
              Get in <span className="text-[#cdb383]">Touch</span>
            </h3>
            <p className="text-gray-700 mb-8">
              Have a question or want to explore how AI can uncover hidden value in your business?  
              Send us a message — we’d love to connect.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#cdb383]/30 focus:border-[#cdb383] outline-none bg-white/80 placeholder-gray-500 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#cdb383]/30 focus:border-[#cdb383] outline-none bg-white/80 placeholder-gray-500 transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#cdb383]/30 focus:border-[#cdb383] outline-none bg-white/80 placeholder-gray-500 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#cdb383] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:bg-[#b99d69] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Links & Brand Info */}
          <div className="flex-1 flex flex-col justify-between space-y-10">
            {/* Logo and Description */}
            <div>
              <h2 className="text-3xl font-bold text-[#2e2e2e]">
                AI <span className="text-[#cdb383]">Value Prospector</span>
              </h2>
              <p className="text-gray-600 mt-3 max-w-sm">
                Empowering SMBs to discover hidden opportunities through
                intelligent AI-driven transformation.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 font-medium">
              {["Home", "Our Process", "Solutions", "About", "Resources", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="group relative hover:text-[#cdb383] transition-colors duration-300"
                >
                  {link}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#cdb383] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 mt-4">
              <a
                href="https://www.linkedin.com/company/aivalueprospector"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#2e2e2e] hover:text-[#0a66c2] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.763 0 5-2.24 5-5v-14c0-2.76-2.237-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.29c-.967 0-1.75-.79-1.75-1.76s.783-1.75 1.75-1.75 1.75.79 1.75 1.75-.783 1.76-1.75 1.76zm13.5 11.29h-3v-5.4c0-1.29-.025-2.95-1.8-2.95-1.8 0-2.075 1.4-2.075 2.85v5.5h-3v-10h2.875v1.35h.041c.4-.75 1.375-1.55 2.825-1.55 3.025 0 3.575 1.99 3.575 4.58v5.62z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#2e2e2e] hover:text-[#cdb383] transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.46 6.01c-.77.35-1.6.58-2.46.69.89-.53 1.56-1.37 1.88-2.37-.83.5-1.74.86-2.71 1.05a4.18 4.18 0 0 0-7.12 3.81A11.84 11.84 0 0 1 3.15 4.7a4.18 4.18 0 0 0 1.3 5.58c-.67-.02-1.3-.2-1.85-.5v.05c0 2.06 1.46 3.77 3.39 4.16-.36.1-.74.16-1.13.16-.28 0-.55-.03-.82-.08.55 1.7 2.14 2.94 4.02 2.98a8.39 8.39 0 0 1-5.18 1.79c-.34 0-.67-.02-1-.06A11.81 11.81 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54a8.25 8.25 0 0 0 2.02-2.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#cdb383]/50 to-transparent mb-10"></div>

        {/* Legal Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm text-gray-600 gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-[#cdb383] transition-colors duration-300">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#cdb383] transition-colors duration-300">
              Terms of Service
            </a>
          </div>
          <p>
            © {currentYear} <span className="font-semibold text-[#2e2e2e]">AI Value Prospector</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
