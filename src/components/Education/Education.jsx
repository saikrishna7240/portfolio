import { education } from "../../data/portfolio";
import { GraduationCap } from "lucide-react";
import "./Education.css";

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-shell">
        <div className="section-label">05 / Education</div>
        <p className="mini-title">Academic foundation</p>
        <h2 className="section-title">Learning never<br/><span>stops.</span></h2>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.institute}>
              <div className="edu-icon"><GraduationCap size={20}/></div>
              <div className="edu-main"><h3>{item.degree}</h3><p>{item.institute}</p></div>
              <div className="edu-meta"><span>{item.period}</span><b>{item.score}</b></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}