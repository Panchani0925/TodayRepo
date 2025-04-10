"use client";

import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import LinksContent from "../components/LinksContent";
import users from "../Users.json"; // Import the JSON file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const navigate = useNavigate();

  // Theme functions
  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists in the JSON data
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert("Login successful!");
      // Redirect to the appropriate dashboard based on the role
      if (user.role === "student") {
        navigate("/student-dashboard");
      } else if (user.role === "teacher") {
        navigate("/teacher-dashboard");
      } else if (user.role === "parent") {
        navigate("/parent-dashboard");
      }
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <>
      <div
        className={`flex min-h-screen items-center justify-center ${
          isDarkMode ? "bg-[#0a1025]" : "bg-[#f0f4f8]"
        } relative overflow-hidden`}
      >
        {/* Background dots */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`absolute h-8 w-8 rounded-full ${
                isDarkMode ? "bg-cyan-500/20" : "bg-cyan-500/30"
              } bubble`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative">
          {/* Theme toggle */}
          <div className="absolute top-4 right-4 z-10">
            {isDarkMode ? (
              <HiSun
                onClick={setLightMode}
                className="cursor-pointer text-yellow-500 hover:text-yellow-400 transition-colors"
                size={24}
                aria-label="Switch to light mode"
              />
            ) : (
              <HiMoon
                onClick={setDarkMode}
                className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
                size={24}
                aria-label="Switch to dark mode"
              />
            )}
          </div>
          <div
            className={`w-full max-w-md rounded-xl ${
              isDarkMode ? "bg-[#111936]/80" : "bg-white/90"
            } p-8 backdrop-blur-sm shadow-lg`}
          >
            <div className="mb-6 text-center">
              <h1
                className={`mb-2 text-3xl md:text-4xl font-bold ${
                  isDarkMode ? "text-[#4ce2e9]" : "text-[#2c9cdb]"
                }`}
              >
                EduNex SIGN IN
              </h1>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Have your EduNex account
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <svg
                  className={`absolute left-3 top-3 h-5 w-5 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="text"
                  placeholder="Username"
                  className={`w-full rounded-[28px] border ${
                    isDarkMode
                      ? "border-gray-700 bg-[#1a2547] text-gray-200"
                      : "border-gray-300 bg-white text-gray-800"
                  } pl-10 h-14 px-3`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="relative">
                <svg
                  className={`absolute left-3 top-3 h-5 w-5 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full rounded-[28px] border ${
                    isDarkMode
                      ? "border-gray-700 bg-[#1a2547] text-gray-200"
                      : "border-gray-300 bg-white text-gray-800"
                  } pl-10 h-14 px-3`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end">
                <a
                  href="/forgot-password"
                  className={`text-sm ${
                    isDarkMode
                      ? "text-gray-300 hover:text-[#4ce2e9]"
                      : "text-gray-600 hover:text-[#2c9cdb]"
                  }`}
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className={`w-full h-14 text-lg font-medium ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#4ce2e9] to-[#5bbae8] text-gray-900"
                    : "bg-gradient-to-r from-[#2c9cdb] to-[#3db2ff] text-white"
                } hover:opacity-90 rounded-full flex items-center justify-center`}
              >
                Sign In
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>
            <div className="my-6 flex items-center">
              <div
                className={`flex-grow h-px ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              ></div>
              <span
                className={`mx-4 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Or continue with
              </span>
              <div
                className={`flex-grow h-px ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              ></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`flex items-center justify-center ${
                  isDarkMode
                    ? "bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500"
                    : "bg-blue-600 hover:bg-blue-500 border-blue-800 hover:border-blue-600"
                } text-white font-bold py-2 px-4 border-b-4 rounded`}
              >
                <FaGoogle className="mr-2 h-5 w-5" />
                Google
              </button>
              <button
                className={`flex items-center justify-center ${
                  isDarkMode
                    ? "bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-500"
                    : "bg-blue-600 hover:bg-blue-500 border-blue-800 hover:border-blue-600"
                } text-white font-bold py-2 px-4 border-b-4 rounded`}
              >
                <FaFacebookF className="mr-2 h-5 w-5" />
                Facebook
              </button>
            </div>
            <LinksContent isDarkMode={isDarkMode} />
            <p
              className={`mt-8 text-center text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Already have an account?{" "}
              <a
                href="/register"
                className={
                  isDarkMode
                    ? "text-[#4ce2e9] hover:underline"
                    : "text-[#2c9cdb] hover:underline"
                }
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
        <style jsx global>{`
          :root {
            --bg-color: #f0f4f8; /* updated light background */
            --text-color: #334155; /* updated light text color */
            --tint-color: #2c9cdb; /* updated light tint color */
            --input-bg: #ffffff;
            --input-border: #e2e8f0; /* updated light input border */
            --card-bg: #ffffff;
            --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }
          .dark {
            --bg-color: #0a1025;
            --text-color: #e5e5e5;
            --tint-color: #4ce2e9;
            --input-bg: #1a2547;
            --input-border: #444444;
            --card-bg: #111936;
            --card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3),
              0 4px 6px -2px rgba(0, 0, 0, 0.2);
          }
          /* Styles applied to all elements */
          body {
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          input {
            background-color: var(--input-bg);
            border: 1px solid var(--input-border);
            color: var(--text-color);
          }
          button.gradient {
            background-image: linear-gradient(
              to right,
              var(--tint-color),
              var(--tint-color-light, #5bbae8)
            );
            color: white;
            transition: opacity 0.3s ease;
          }
          a {
            color: var(--tint-color);
          }
        `}</style>
        <style jsx>{`
          @keyframes bubble {
            0% {
              opacity: 0.9;
            }
            50% {
              transform: translateY(-10px) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.9;
            }
          }
          .bubble {
            animation: bubble 3s infinite ease-in-out;
            animation-delay: calc(0.3s * var(--i, 0));
          }
        `}</style>
      </div>
    </>
  );
};

export default Login;
