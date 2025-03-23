"use client";

import { useState } from "react";

const Feedback = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Email validation function
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="absolute inset-0 bg-white rounded-lg p-6 md:p-8">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
      >
        ✕
      </button>

      {/* Form Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mt-2 mb-6">
        Drop Us a Line!
      </h2>

      {/* Contact Form */}
      <form className="space-y-4 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="email"
          placeholder="Email*"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        <textarea
          placeholder="Tell us about what we can do to support you."
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400"
          rows="4"
        ></textarea>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>

        {/* Send Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Feedback;