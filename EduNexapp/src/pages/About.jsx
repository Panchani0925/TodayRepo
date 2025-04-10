import { motion as Motion } from "framer-motion";
import { ChevronUp, Github, Linkedin, Mail } from "lucide-react"; // updated import to include icons
import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Panchali  Charunya Gunarathne",
    role: "Leader",
    idNumber: "w2082085",
    contribution: "I lead my team and also train",
    links: {
      linkedin:
        "http://www.linkedin.com/in/panchani-gunarathne-108058318/johndoe",
      github: "https://github.com/Panchani0925",
      email: "panchani.20233002@iit.ac.lk",
    },
    gradient: "from-purple-500 to-pink-500",
    image: "/site.jpg",
  },
  {
    id: 2,
    name: "Oshadhi",
    role: "Server-side Development & Database Management",
    idNumber: "w2083091",
    contribution: "I work to build the database of the application",
    links: {
      linkedin: "http://www.linkedin.com/in/arundathi-oshadhi-061166336",
      github: "https://github.com/Oshadhi571",
      email: "liyana.20232974@iit.ac.lk",
    },
    gradient: "from-blue-500 to-teal-500",
    image: "/oshadhi.jpg",
  },
  {
    id: 3,
    name: "Ridmi Poornima",
    role: "Client Side Development & Marketing",
    idNumber: "w2084722",
    contribution: "I work to build the frontend of the application",
    links: {
      linkedin: "https://www.linkedin.com/in/ridmi-epa-b569aa2ba/",
      github: "https://github.com/ridmipoornima",
      email: "ridmipoornima.com",
    },
    gradient: "from-orange-500 to-yellow-500",
    image: "/ridmi.jpg",
  },
  {
    id: 4,
    name: "Thangavel Abishek",
    role: "UI/UX Design & server-side development",
    idNumber: "w2084376",
    contribution: "I work to build the backend of the application",
    links: {
      linkedin: "https://linkedin.com/in/charliedavis",
      github: "https://github.com/abishek2305",
      email: "abishek.20234567@iit.ac.lk.com",
    },
    gradient: "from-red-500 to-rose-500",
    image: "/abishek.jpg",
  },
  {
    id: 5,
    name: "Dithara Nimvini Andaraweera",
    role: "server Side development & Marketing",
    idNumber: "w2082820",
    contribution: "I work to build the backend of the application",
    links: {
      linkedin: "http://www.linkedin.com/in/ditharaandaraweera",
      github: "https://github.com/DitharaAndaraweera",
      email: "dithara.20231164@iit.ac.lk",
    },
    gradient: "from-green-500 to-emerald-500",
    image: "/dithara.jpg",
  },
  {
    id: 6,
    name: "Buthmira  Perera",
    role: "UI/UX Design & Client Side development",
    idNumber: "w2084754",
    contribution: "I work to build the frontend of the application",
    links: {
      linkedin: "https://linkedin.com/in/evewilson",
      github: "https://github.com/evewilson",
      email: "buthmira.20231968@iit.ac.lk",
    },
    gradient: "from-indigo-500 to-violet-500",
    image: "/buthmira.jpg",
  },
];

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}

        {/* Hero Section with Transition from White to Blue */}
        <section className="relative overflow-hidden">
          {/* Gradient transition from white to blue */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-950 opacity-100"></div>

          {/* Triangle wave transition pattern */}
          <div className="absolute top-0 left-0 w-full">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-24"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                fill="white"
                opacity="0.3"
              ></path>
            </svg>
          </div>

          {/* Main content */}
          <div className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto text-center px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left column - Text content */}
                <Motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    About <span className="text-blue-300">EduNex</span>
                  </Motion.h1>

                  <Motion.p
                    className="text-xl md:text-2xl text-blue-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Empowering Education Through Technology
                  </Motion.p>

                  <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  ></Motion.div>
                </Motion.div>

                {/* Right column - Illustration */}
                <Motion.div
                  className="hidden md:block"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    {/* Abstract education-themed graphic */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Motion.div
                        className="w-64 h-64 rounded-full border-4 border-blue-400/30"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 40,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <Motion.div
                        className="absolute w-48 h-48 rounded-full border-4 border-blue-300/40"
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <Motion.div
                        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-70"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                </Motion.div>
              </div>
            </div>
          </div>

          {/* Bottom wave transition */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative w-full h-12 md:h-16"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="rgba(219, 234, 254, 0.1)"
              ></path>
            </svg>
          </div>
        </section>
      </div>

      {/* Enhanced Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-black leading-relaxed">
                At EduNex, we believe in making quality education accessible to
                everyone. Our platform connects students with Sri Lanka's finest
                educators, providing a comprehensive learning experience that
                transcends traditional boundaries.
              </p>
              <p className="text-lg text-black leading-relaxed">
                We strive to create an engaging, interactive learning
                environment that empowers students to achieve their academic
                goals and pursue their passions.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative group">
                <img
                  src="/AC.jpg" // Added leading slash
                  alt="Education Mission"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Members Section */}
      <section className="team-section py-24">
        <div className="container mx-auto px-4">
          <h2 className="team-heading">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id}>
                <div className="team-card">
                  <div className="image-container">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-image"
                    />
                    <div className="image-overlay" />
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                      <p className="member-id">ID: {member.idNumber}</p>
                      <p className="member-contribution">
                        {member.contribution}
                      </p>
                      {/* Updated member links with icons */}
                      <div className="member-links">
                        <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin size={20} className="inline-block mr-2" />
                        </a>
                        <a href={member.links.github} target="_blank" rel="noopener noreferrer">
                          <Github size={20} className="inline-block mx-2" />
                        </a>
                        <a href={`mailto:${member.links.email}`}>
                          <Mail size={20} className="inline-block ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-white text-black py-6">
        <div className="container mx-auto px-4">
          <div className="text-black text-center text-lg">
            <button
              onClick={scrollToTop}
              className="group bg-[#1d1b4b] hover:bg-primary/90 text-white p-3 rounded-full shadow-lg mb-6 transition-all duration-300 hover:shadow-primary/30 hover:shadow-xl"
            >
              <ChevronUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
