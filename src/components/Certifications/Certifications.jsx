import { Award, CheckCircle2 } from "lucide-react";
import { certifications } from "../../data/portfolio";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-shell cert-wrap">
        <div>
          <div className="section-label">06 / Certifications</div>
          <p className="mini-title">Credentials</p>
          <h2 className="section-title">Proof of<br/><span>learning.</span></h2>
        </div>
        <div className="cert-list">
          {certifications.map((item, i) => (
            <article key={item}>
              <div className="cert-number">0{i+1}</div>
              <div><Award size={19}/><h3>{item}</h3></div>
              <CheckCircle2 className="cert-check" size={18}/>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}