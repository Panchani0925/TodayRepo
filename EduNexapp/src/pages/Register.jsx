"use client";

import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student");
  const [enable2FA, setEnable2FA] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Theme functions
  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    setIsDarkMode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                role,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to create account");
        }

        const result = await response.json();
        console.log("Account created successfully:", result);
        alert("Account created successfully!");
    } catch (error) {
        console.error("Error creating account:", error);
        alert("Account created successfully!");
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
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-md px-4">
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
            className={`w-full rounded-xl ${
              isDarkMode ? "bg-[#111936]/80" : "bg-white/90"
            } p-6 md:p-8 backdrop-blur-sm shadow-lg`}
          >
            <div className="mb-6 text-center">
              <h1
                className={`mb-2 text-3xl md:text-4xl font-bold ${
                  isDarkMode ? "text-[#4ce2e9]" : "text-[#2c9cdb]"
                }`}
              >
                EduNex SIGN UP
              </h1>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                Create your educational account
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name field */}
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
                  placeholder="Full Name"
                  className={`w-full rounded-[28px] border ${
                    isDarkMode
                      ? "border-gray-700 bg-[#1a2547] text-gray-200"
                      : "border-gray-300 bg-white text-gray-800"
                  } pl-10 h-12 md:h-14 px-3`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email field */}
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
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  placeholder="Email address"
                  className={`w-full rounded-[28px] border ${
                    isDarkMode
                      ? "border-gray-700 bg-[#1a2547] text-gray-200"
                      : "border-gray-300 bg-white text-gray-800"
                  } pl-10 h-12 md:h-14 px-3`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password field */}
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
                  } pl-10 h-12 md:h-14 px-3`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password field */}
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
                  placeholder="Confirm Password"
                  className={`w-full rounded-[28px] border ${
                    isDarkMode
                      ? "border-gray-700 bg-[#1a2547] text-gray-200"
                      : "border-gray-300 bg-white text-gray-800"
                  } pl-10 h-12 md:h-14 px-3`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Role Selection */}
              <div
                className={`p-4 rounded-lg ${
                  isDarkMode ? "bg-[#1a2547]" : "bg-gray-50"
                }`}
              >
                <p
                  className={`mb-2 font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  I am a:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["student", "teacher", "parent"].map((roleOption) => (
                    <label
                      key={roleOption}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                        role === roleOption
                          ? isDarkMode
                            ? "bg-[#4ce2e9] text-gray-900"
                            : "bg-[#2c9cdb] text-white"
                          : isDarkMode
                          ? "bg-gray-800 text-gray-300"
                          : "bg-white text-gray-700 border border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={roleOption}
                        checked={role === roleOption}
                        onChange={() => setRole(roleOption)}
                        className="sr-only"
                      />
                      <span className="capitalize">{roleOption}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 2FA Option */}
              <div className="flex items-center">
                <input
                  id="enable2fa"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={enable2FA}
                  onChange={(e) => setEnable2FA(e.target.checked)}
                />
                <label
                  htmlFor="enable2fa"
                  className={`ml-2 block text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Enable Two-Factor Authentication (Recommended)
                </label>
              </div>

              {/* Terms and Privacy */}
              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  required
                />
                <label
                  htmlFor="terms"
                  className={`ml-2 block text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  I accept the{" "}
                  <a
                    href="/terms"
                    className={
                      isDarkMode
                        ? "text-[#4ce2e9] hover:underline"
                        : "text-[#2c9cdb] hover:underline"
                    }
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className={
                      isDarkMode
                        ? "text-[#4ce2e9] hover:underline"
                        : "text-[#2c9cdb] hover:underline"
                    }
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className={`w-full h-12 md:h-14 text-lg font-medium ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#4ce2e9] to-[#5bbae8] text-gray-900"
                    : "bg-gradient-to-r from-[#2c9cdb] to-[#3db2ff] text-white"
                } hover:opacity-90 rounded-full flex items-center justify-center`}
                disabled={!acceptTerms}
              >
                Create Account
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
                Or sign up with
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

            <p
              className={`mt-8 text-center text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Already have an account?{" "}
              <a
                href="/login"
                className={
                  isDarkMode
                    ? "text-[#4ce2e9] hover:underline"
                    : "text-[#2c9cdb] hover:underline"
                }
              >
                Sign in
              </a>
            </p>
          </div>
        </div>

        <style jsx global>{`
          :root {
            --bg-color: #f0f4f8;
            --text-color: #334155;
            --tint-color: #2c9cdb;
            --input-bg: #ffffff;
            --input-border: #e2e8f0;
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
          }
        `}</style>
      </div>
    </>
  );
}
