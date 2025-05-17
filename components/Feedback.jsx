"use client";

import { useState } from "react";
import { supabase } from "../lib/supabase"; // Ensure this path is correct

const Feedback = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setEmailError(isValid ? "" : "Please enter a valid email address.");
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateEmail()) return;
    if (!message.trim()) {
      setSubmitError("Please enter your message.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("feedback").insert([
        {
          name: name || null,
          email,
          message,
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        throw error;
      }

      setSubmitSuccess(true);
      setName("");
      setEmail("");
      setMessage("");

      // Auto-close modal after a short delay
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSubmitError(
        error.message || "Failed to submit feedback. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-white rounded-lg p-6 md:p-8 z-50 shadow-lg">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl font-bold"
        aria-label="Close feedback form"
      >
        ✕
      </button>

      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        Drop Us a Line!
      </h2>

      {/* Feedback Messages */}
      {submitSuccess && (
        <div className="mb-2 p-2 md:p-4 bg-green-100 text-green-700 rounded-md text-[0.9rem] md:text-[1.1rem]">
          Thank you for your feedback! We'll get back to you soon.
        </div>
      )}
      {submitError && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {submitError}
        </div>
      )}

      {/* Feedback Form */}
      <form
        className="space-y-4 max-w-2xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email*"
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          required
        />
        {emailError && (
          <p className="text-red-500 text-sm -mt-2">{emailError}</p>
        )}
        <textarea
          placeholder="Tell us about what we can do to support you."
          className="w-full border p-3 rounded-md focus:ring-2 focus:ring-gray-400"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        {/* <p className="text-xs text-gray-500 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>*/}

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? "SENDING..." : "SEND"}
        </button>
      </form>
    </div>
  );
};

export default Feedback;
