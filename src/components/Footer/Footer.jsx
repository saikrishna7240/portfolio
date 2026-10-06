import { Github, Linkedin } from "lucide-react";
import { profile } from "../../data/portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Saikrishna Bitla</span>
        <span>Designed & built with React.</span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/></a>
        </div>
      </div>
    </footer>
  );
}