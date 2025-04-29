"use client";

import { FC, useRef, useState } from "react";
// Replace with your preferred email service library or keep emailjs and install it
import emailjs from "emailjs-com";

const Contact: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // replace with your email service ID
        "YOUR_TEMPLATE_ID",   // replace with your email template ID
        form.current,
        "YOUR_USER_ID"        // replace with your user/public key
      )
      .then(() => {
        setSent(true);
        form.current?.reset();
      })
      .catch((err) => {
        console.error("Email error:", err);
      });
  };

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen px-6 py-16">
      <div className="w-full max-w-5xl bg-gradient-to-b from-[#212529] via-[#343a40] to-[#212529] bg-opacity-80 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-[#80ed99] text-center mb-8">Get in Touch</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full bg-[#2d3236] p-3 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#80ed99]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full bg-[#2d3236] p-3 rounded text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#80ed99]"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            required
            className="w-full bg-[#2d3236] p-3 rounded text-white placeholder-white resize-none focus:outline-none focus:ring-2 focus:ring-[#80ed99]"
          />
          <button
            type="submit"
            className="w-full bg-[#80ed99] text-[#1b1e22] font-bold py-3 rounded hover:bg-[#66c987] transition duration-300"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-green-400 text-center mt-2 text-sm">✅ Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
