import { ArrowUpRight, Brain, Film, MessageCircle, ShoppingBag, Trophy } from "lucide-react";
import { projects } from "../../data/portfolio";
import "./Projects.css";

const icons = { brain: Brain, shopping: ShoppingBag, film: Film, trophy: Trophy, message: MessageCircle };

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-shell">
        <div className="section-label">04 / Selected Work</div>
        <div className="projects-head">
          <div>
            <p className="mini-title">Things I've built</p>
            <h2 className="section-title">Projects with<br/><span>purpose.</span></h2>
          </div>
          <p>Selected personal and academic work demonstrating frontend, full-stack and AI/ML capabilities.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = icons[project.icon];
            return (
              <article className={`project-card ${index === 0 ? "featured" : ""}`} key={project.title}>
                <div className="project-icon"><Icon size={20}/></div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-row">{project.tech.map(t=><span key={t}>{t}</span>)}</div>
                <div className="project-footer"><b>{project.metric}</b><ArrowUpRight size={18}/></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}