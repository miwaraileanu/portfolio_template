"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { FaPhone, FaShareAlt, FaFilePdf, FaEnvelope, FaGithub } from "react-icons/fa";

const SocialMedia: FC = () => {
  const [open, setOpen] = useState(false);

  // Replace href values with your own URLs or contact links
  const links = [
    { icon: <FaFilePdf />, href: "/your_cv.pdf", label: "CV" },
    { icon: <FaGithub />, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaEnvelope />, href: "mailto:your.email@example.com", label: "Email" },
    { icon: <FaPhone />, href: "tel:+1234567890", label: "Phone" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Expanded links */}
      {open && (
        <div className="mb-2 flex flex-col space-y-3 bg-transparent backdrop-blur-lg p-3 rounded-xl">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              className="w-12 h-12 flex items-center justify-center bg-[#80ed99] text-[#212529] rounded-full hover:scale-110 transition-transform"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Toggle social links"
      >
        <span className={`${open ? 'rotate-45' : 'rotate-0'} transition-transform`}>
          <FaShareAlt size={20} />
        </span>
      </button>
    </div>
  );
};

export default SocialMedia;
