import { useState } from "react";
import {
  FaSun,
  FaMoon,
  FaArrowRight,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    document.body.classList.toggle("light-mode");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        <span className="logo-star">✦</span>
        Webify<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#pricing" onClick={closeMenu}>
          Pricing
        </a>
      </div>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          <span className={!darkMode ? "active" : ""}>
            <FaSun />
          </span>

          <span className={darkMode ? "active" : ""}>
            <FaMoon />
          </span>
        </button>

        <a href="#contact" className="nav-contact">
          Let's Talk <FaArrowRight />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}