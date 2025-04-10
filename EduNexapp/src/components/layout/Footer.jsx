"use client";

import "./../../styles/animation.css";

import { cn } from "@/lib/utils";
import {
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.offsetHeight - 400;
      setIsVisible(scrollPosition > pageHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#1a2547] text-white relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-[#4ce2e9] text-[#1a2547] p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 z-50",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-8 sm:h-12 w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#f8fafc]"
          ></path>
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center sm:text-left"
      >
        {/* Updated grid: 1 column on mobile, 3 columns on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* About Us */}
          <motion.div variants={item}>
            <div className="mb-4 sm:mb-6">
              <img
                src="/logo.jpg"
                alt="EduNex Logo"
                width={120}
                height={60}
                className="w-full max-w-[120px] bg-white p-2 rounded-md" // Updated for mobile responsiveness
              />
            </div>
            <h3 className="text-lg font-semibold mb-4 text-[#4ce2e9]">
              About Us
            </h3>
            <p className="text-gray-300">
              We are dedicated to providing quality education through our online
              learning platform, empowering students worldwide.
            </p>

            <div className="mt-6 flex space-x-3 sm:space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#4ce2e9] hover:text-[#1a2547] transition-colors duration-300"
              >
                <Facebook size={16} className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#4ce2e9] hover:text-[#1a2547] transition-colors duration-300"
              >
                <Twitter size={16} className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#4ce2e9] hover:text-[#1a2547] transition-colors duration-300"
              >
                <Instagram size={16} className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#4ce2e9] hover:text-[#1a2547] transition-colors duration-300"
              >
                <Linkedin size={16} className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.a>
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div variants={item} className="mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4 text-[#4ce2e9]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Courses", "Contact", "Blog"].map(
                (item, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link
                      to={
                        item.toLowerCase() === "home"
                          ? "/"
                          : `/${item.toLowerCase()}`
                      }
                      className="text-gray-300 hover:text-white flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#4ce2e9] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
          {/* Contact Info */}
          <motion.div variants={item} className="mt-8 sm:mt-0">
            <h3 className="text-lg font-semibold mb-4 text-[#4ce2e9]">
              Contact Info
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-[#4ce2e9]" />
                <span>(+94) 714 099346</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-[#4ce2e9]" />
                <span>EduNex@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-3 mt-1 text-[#4ce2e9]"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  <p>123 Education Street</p>
                  <p>Colombo, Sri Lanka</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700/50 text-center text-gray-300 text-sm sm:text-base"
        >
          <p>
            &copy; {new Date().getFullYear()} EduNex Learning Platform. All
            rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
