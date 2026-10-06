import { Code2, Lightbulb, Rocket } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-shell">
        <div className="section-label">01 / About</div>
        <div className="about-grid">
          <div>
            <p className="mini-title">A developer who likes to build</p>
            <h2 className="section-title">From <span>curiosity</span><br />to working products.</h2>
          </div>
          <div className="about-copy">
            <p>
              I'm a Full Stack Developer focused on creating responsive web applications
              and practical digital products. I enjoy turning ideas into clean interfaces,
              useful APIs and reliable user experiences.
            </p>
            <p>
              My current journey combines React.js, Node.js, Python, databases and AI/ML,
              with hands-on experience from real development environments and independent projects.
            </p>
          </div>
        </div>
        <div className="about-cards">
          <article><Code2/><h3>Build</h3><p>Modern interfaces and full-stack applications with clean architecture.</p></article>
          <article><Rocket/><h3>Ship</h3><p>Deployment-minded development with APIs, databases and production workflows.</p></article>
          <article><Lightbulb/><h3>Innovate</h3><p>Always looking for simpler, smarter ways to solve real user problems.</p></article>
        </div>
      </div>
    </section>
  );
}