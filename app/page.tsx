"use client";

import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsBackground from "./components/StarsBackground";

export default function Page() {
  return (
    <main className="relative flex text-white overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <StarsBackground />

      {/* Sidebar navigation
      <div className="fixed top-0 left-0 h-screen w-[60px] lg:w-[280px]  
+                        bg-gradient-to-b from-[#212529] via-[#343a40] to-[#212529]  
+                        bg-opacity-10 backdrop-blur-lg z-50">  
         <Navbar />  
       </div>   */}

      {/* Main content area with smooth scroll */}
      <div className="flex-1 overflow-y-auto scroll-smooth relative z-20">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen">
          <AboutMe />
        </section>
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </div>
    </main>
  );
}
