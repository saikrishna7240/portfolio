import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-shell">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">S</span>
          <span>Saikrishna<span className="brand-dot">.</span></span>
        </button>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([label, id]) => (
            <button key={id} onClick={() => go(id)}>{label}</button>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>Let's Talk</button>
        </nav>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}