"use client";

import { FC } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaUser, FaBirthdayCake } from "react-icons/fa";

const AboutSlide: FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen w-full text-white px-6 md:px-24 py-10">
      <div className="w-full max-w-7xl bg-gradient-to-b from-[#212529] via-[#343a40] to-[#212529] bg-opacity-10 backdrop-blur-lg z-50 rounded-2xl p-6 md:p-10 shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-[#80ed99] mb-6 border-b border-[#80ed99]/30 pb-3 text-center">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="flex-1 space-y-4 text-base md:text-lg w-full">
            <AboutItem icon={<FaUser />} label="Name" value="Your Name" />
            <AboutItem icon={<FaEnvelope />} label="Email" value="your.email@example.com" />
            <AboutItem icon={<FaBirthdayCake />} label="Age" value="Your Age" />
            <AboutItem icon={<FaMapMarkerAlt />} label="Location" value="Your Location" />

            <div className="border-b border-[#80ed99]/30 pb-3 w-full" />

            {/* Bio - replace with your own description */}
            <div className="text-sm font-bold text-gray-300 mt-4 leading-relaxed space-y-4">
              <p>
                Brief introduction about yourself. Describe your background, interests, and goals.
              </p>
              <p>
                Highlight your current focus or what you’re passionate about learning and building.
              </p>
              <p>
                Mention any transferable skills or experiences that make you a strong candidate.
              </p>
            </div>
          </div>

        {/* sKILLS */}
          <div className="flex-1 space-y-3 w-full text-sm mt-8 md:mt-0">
            <h2 className="text-xl font-semibold text-[#80ed99] mb-2 text-center md:text-left">Skills</h2>
            {/* Update skill labels and percentages as needed */}
            <SkillBar label="Skill One" percent={50} />
            <SkillBar label="Skill Two" percent={50} />
            <SkillBar label="Skill Three" percent={50} />
            <SkillBar label="Skill Four" percent={50} />
            <SkillBar label="Skill Five" percent={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-4 flex-wrap">
    <div className="text-[#80ed99] text-xl">{icon}</div>
    <span className="font-semibold text-[#80ed99]">{label}:</span>
    <span className="break-words">{value}</span>
  </div>
);

const SkillBar = ({ label, percent }: { label: string; percent: number }) => (
  <div>
    <p className="text-[#80ed99] font-semibold mb-1">{label}</p>
    <div className="w-full h-3 bg-[#2d3236] rounded-full overflow-hidden">
      <div
        className="h-full bg-[#80ed99] rounded-full transition-all duration-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);