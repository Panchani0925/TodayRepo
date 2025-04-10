"use client";

import { useState } from "react";
import {
  HiMoon,
  HiSun,
  HiOutlineMail,
  HiOutlineArrowLeft,
} from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");
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
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll just set success
      // In a real app, you would call your API endpoint here
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };

  const handleReset = () => {
    setEmail("");
    setStatus("idle");
    setErrorMessage("");
  };

  return (
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
        {/* Theme toggle - show only one icon at a time */}
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
          {status === "success" ? (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <HiCheckCircle
                  className={`h-20 w-20 ${
                    isDarkMode ? "text-[#4ce2e9]" : "text-[#2c9cdb]"
                  }`}
                />
              </div>
              <h1
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-[#4ce2e9]" : "text-[#2c9cdb]"
                }`}
              >
                Check Your Email
              </h1>
              <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                We've sent a password reset link to{" "}
                <span className="font-medium">{email}</span>. Please check your
                inbox and follow the instructions.
              </p>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                If you don't see the email, check your spam folder.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className={`flex items-center justify-center mx-auto ${
                    isDarkMode
                      ? "text-gray-300 hover:text-[#4ce2e9]"
                      : "text-gray-600 hover:text-[#2c9cdb]"
                  } transition-colors`}
                >
                  <HiOutlineArrowLeft className="mr-2" />
                  Back to reset password
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8 text-center">
                <h1
                  className={`mb-2 text-3xl font-bold ${
                    isDarkMode ? "text-[#4ce2e9]" : "text-[#2c9cdb]"
                  }`}
                >
                  Forgot Password
                </h1>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Enter your email and we'll send you a reset link
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <HiOutlineMail
                    className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    } h-5 w-5`}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    disabled={status === "submitting"}
                    className={`w-full rounded-[28px] border ${
                      isDarkMode
                        ? "border-gray-700 bg-[#1a2547] text-gray-200"
                        : "border-gray-300 bg-white text-gray-800"
                    } pl-10 h-14 px-3 focus:outline-none focus:ring-2 ${
                      isDarkMode
                        ? "focus:ring-[#4ce2e9]"
                        : "focus:ring-[#2c9cdb]"
                    } disabled:opacity-70`}
                  />
                </div>

                {status === "error" && (
                  <div
                    className={`p-3 rounded-lg ${
                      isDarkMode
                        ? "bg-red-900/50 text-red-200"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting" || !email}
                  className={`w-full h-14 text-lg font-medium ${
                    isDarkMode
                      ? "bg-gradient-to-r from-[#4ce2e9] to-[#5bbae8] text-gray-900"
                      : "bg-gradient-to-r from-[#2c9cdb] to-[#3db2ff] text-white"
                  } hover:opacity-90 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition duration-200`}
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>

                <div className="text-center">
                  <a
                    href="/login"
                    className={`text-sm ${
                      isDarkMode
                        ? "text-gray-300 hover:text-[#4ce2e9]"
                        : "text-gray-600 hover:text-[#2c9cdb]"
                    } flex items-center justify-center`}
                  >
                    <HiOutlineArrowLeft className="mr-2" />
                    Back to login
                  </a>
                </div>
              </form>
            </>
          )}
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
  );
};

export default ForgotPassword;
