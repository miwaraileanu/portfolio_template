"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// Replace with your own projects data
const projects = [
  {
    title: "Project Title",
    description: "Short project description.",
    image: "/assets/project-image.png", // update path
    tech: ["Tech1", "Tech2", "Tech3"],
    live: "#", // live demo URL or empty
    code: "#", // repo URL or empty
  },
  // Add more projects as needed
];

const ProjectsSlide: FC = () => {
  const latest = projects.slice(0, 3);

  return (
    <section className="w-full min-h-screen text-white px-4 py-8 flex items-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#80ed99] mb-8 text-center">
          My Latest Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latest.map((project, i) => (
            <div
              key={i}
              className="relative shadow-lg rounded-lg overflow-hidden bg-gradient-to-b from-[#212529] via-[#343a40] to-[#212529] bg-opacity-10 backdrop-blur-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-40 h-40 mx-auto mt-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#343a40] to-transparent" />
              </div>

              <div className="p-4 flex flex-col justify-between h-[240px]">
                <div>
                  <h2 className="text-lg font-semibold text-[#80ed99] mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-2 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="bg-[#2d3236] text-[#80ed99] text-sm px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#80ed99] text-black text-md px-2 py-1 rounded hover:bg-[#66c987] transition"
                    >
                      Live
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md border border-[#80ed99] text-[#80ed99] px-2 py-1 rounded hover:bg-[#80ed99] hover:text-black transition"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/allprojects" className="text-lg text-[#80ed99] underline font-semibold hover:text-[#66c987]">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlide;
