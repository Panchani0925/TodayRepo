"use client"
import { motion as Motion } from "framer-motion"
import { Search } from "lucide-react"
import { useState } from "react"

// EducationHero component with hero section
export default function EducationHero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#231b5d]">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
          <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Start Your{" "}
              <span className="relative inline-block">
                <span className="animate-bounce inline-block text-[#6ee7ff]">Education</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#6ee7ff] rounded-full animate-pulse"></span>
              </span>{" "}
              Journey With Us
            </h1>

            <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
              Discover thousands of courses taught by expert instructors to help you reach your goals.
            </p>

            <Motion.div
              className="bg-white rounded-lg p-2 flex items-center gap-2 justify-center shadow-lg shadow-[#231b5d]/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <input
                type="text"
                placeholder="What do you want to learn?"
                className="flex-1 p-3 text-gray-800 outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-[#231b5d] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#2f2578] transition-colors duration-300">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </Motion.div>

         
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#6ee7ff] to-[#231b5d] opacity-30 blur-xl animate-pulse"></div>
              <img
                src="/2.jpg"
                alt="Students learning online"
                className="relative z-10 rounded-lg shadow-xl"
              />

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 animate-bounce animate-infinite animate-duration-[4000ms] animate-ease-in-out">
                <div className="text-[#231b5d] font-bold">10,000+</div>
                <div className="text-sm text-gray-600">Online Courses</div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-20 animate-bounce animate-infinite animate-duration-[5000ms] animate-delay-300 animate-ease-in-out">
                <div className="text-[#231b5d] font-bold">5M+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}
