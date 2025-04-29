"use client";

import { FC, useState, useEffect } from "react";
import { FaTools } from "react-icons/fa";
import { FaHouse, FaList, FaComments } from "react-icons/fa6";

const links = [
  { icon: FaHouse, label: "Home", href: "/#home" },
  { icon: FaList, label: "About Me", href: "/#about" },
  { icon: FaTools, label: "Projects", href: "/#projects" },
  { icon: FaComments, label: "Contact Me", href: "/#contact" },
];

const Sidebar: FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <aside
      className={`
        fixed top-0 left-0 z-40 h-full text-white flex flex-col
        ${hasMounted ? "transition-all duration-300" : ""}
        ${isMobile ? "w-[60px]" : "w-[280px]"}
      `}
    >
      <ul className="m-auto space-y-4 w-full">
        {links.map(({ icon: Icon, label, href }, i) => (
          <li
            key={i}
            className={`
              flex ${isMobile ? "justify-center" : "items-center gap-6 px-6"}
              py-4 relative transition-colors duration-200 text-lg hover:text-[#80ed99]
            `}
            title={isMobile ? label : ""}
          >
            <a
              href={href}
              className={`
                flex items-center ${isMobile ? "justify-center" : "gap-2"}
                w-full
              `}
            >
              <Icon className="text-lg" />
              {!isMobile && <p className="text-[1.3rem]">{label}</p>}
            </a>
            {!isMobile && (
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
