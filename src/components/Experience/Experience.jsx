import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-shell">
        <div className="section-label">03 / Experience</div>
        <p className="mini-title">Professional journey</p>
        <h2 className="section-title">Learning by <span>building.</span></h2>

        <div className="timeline">
          <div className="timeline-line" />
          <article className="experience-card">
            <div className="timeline-dot"><BriefcaseBusiness size={17}/></div>
            <div className="experience-top">
              <div>
                <h3>MERN Stack Development Intern</h3>
                <p className="company">Xevotech Private Limited</p>
              </div>
              <span className="period"><CalendarDays size={14}/> 2026 – Present</span>
            </div>
            <ul>
              <li>Developing and enhancing production-oriented web applications using React.js, Node.js and REST APIs.</li>
              <li>Contributing to responsive interfaces, reusable components, navigation flows and backend integration.</li>
              <li>Collaborating with the development team to improve UI consistency and application functionality.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}