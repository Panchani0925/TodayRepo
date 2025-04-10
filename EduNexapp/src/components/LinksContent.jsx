import React from 'react';

const LinksContent = ({ isDarkMode }) => {
  return (
    <div className="mt-4 text-center">
      <p
        className={`mt-8 text-center text-sm ${
          isDarkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        By signing in, you agree to our{" "}
        <a
          href="/terms"
          className={
            isDarkMode
              ? "text-[#4ce2e9] hover:underline"
              : "text-[#2c9cdb] hover:underline"
          }
        >
          Terms
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
      </p>
      <a href="/privacy" className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Privacy Policy</a>
      <span className="mx-2">|</span>
      <a href="/terms" className={isDarkMode ? "text-gray-400" : "text-gray-600"}>Terms of Service</a>
    </div>
  );
};

export default LinksContent;
