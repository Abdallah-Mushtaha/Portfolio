import React from "react";
import "../src/App.css";

export default function Nav() {
  const navLinks = [
    { label: "Home", key: "Home" },
    { label: "About", key: "about" },
    {
      label: "Projects",
      key: "projects",
      icon: "fas fa-project-diagram",
    },
    { label: "Contact", key: "contact" },
  ];

  const scrollToSection = (key) => {
    const section = document.getElementById(key);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: y - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0   z-50">
      <nav className="font-bold">
        <div className="header rounded-b-lg bg-black/10 max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 h-16">
          <a href="#Home" className="text-white text-xl font-semibold">
            <span>
              <span className="text-yellow-500 md:hidden">A</span>
              <span className="text-white md:hidden">m</span>
            </span>
            <span className="sm:display hidden sm:inline">
              <span className="text-yellow-500">A</span>bood{" "}
              <span className="text-yellow-500">M</span>ushtaha{" "}
            </span>
          </a>

          <ul className="flex gap-5 md:gap-6 text-white text-sm md:text-base items-center sm:justify-center ">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => scrollToSection(link.key)}
                  className="flex cursor-pointer items-center gap-1 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.icon && (
                    <i
                      className={`${link.icon} transition-colors duration-200`}
                    />
                  )}
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex gap-4 ml-6 text-xl text-white">
            <a
              href="https://github.com/Abdallah-Mushtaha"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abdallah-mushtaha-138b42294/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
