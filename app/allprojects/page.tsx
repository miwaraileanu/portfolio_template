"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project Title",
    description: "Brief description of the project.",
    image: "/path/to/image.png", // update with your image path
    tech: ["Tech1", "Tech2", "Tech3"],
    live: "#", // replace with live demo URL or leave empty
    code: "#", // replace with repository URL or leave empty
  },
  // Add more project objects as needed
];

const AllProjectsPage: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#212529] via-[#343a40] to-[#212529] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#80ed99] mb-8 text-center">
          All Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative shadow-2xl rounded-lg overflow-hidden bg-gradient-to-b from-[#212529] via-[#343a40] to-[#212529] bg-opacity-10 backdrop-blur-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-40 h-40 mx-auto mt-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-[240px]">
                <div>
                  <h2 className="text-lg font-semibold text-[#80ed99] mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#2d3236] text-[#80ed99] text-xs px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#80ed99] text-black text-sm px-3 py-1.5 rounded hover:bg-[#66c987] transition"
                    >
                      Live
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-[#80ed99] text-[#80ed99] px-3 py-1.5 rounded hover:bg-[#80ed99] hover:text-black transition"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/" className="text-sm text-[#80ed99] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AllProjectsPage;
