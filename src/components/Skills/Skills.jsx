import { skills } from "../../data/portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-shell">
        <div className="section-label">02 / Skills</div>
        <div className="skills-head">
          <div>
            <p className="mini-title">My toolkit</p>
            <h2 className="section-title">Technologies I<br/><span>work with.</span></h2>
          </div>
          <p className="skills-intro">A practical stack spanning frontend, backend, databases, tooling and AI.</p>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <article className="skill-card" key={group}>
              <h3>{group}</h3>
              <div className="skill-tags">{items.map(x=><span key={x}>{x}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}