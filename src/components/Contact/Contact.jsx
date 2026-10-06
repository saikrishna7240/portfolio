import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../../data/portfolio";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" />
      <div className="section-shell contact-shell">
        <div className="section-label">07 / Contact</div>
        <p className="mini-title">Have an idea?</p>
        <h2>Let's build something<br/><span>great together.</span></h2>
        <p className="contact-text">I'm open to developer opportunities, collaborations and interesting product ideas.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight/></a>
        <div className="contact-info">
          <span><MapPin/> {profile.location}</span>
          <span><Phone/> {profile.phone}</span>
          <span><Mail/> Available by email</span>
        </div>
      </div>
    </section>
  );
}