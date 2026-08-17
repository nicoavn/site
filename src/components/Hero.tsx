import { site } from "../content";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-name">
      <div className="wrap">
        <p className={`kicker ${styles.kicker}`}>{site.availability}</p>
        <h1 className={styles.name} id="hero-name">
          {site.name}
        </h1>
        <p className={styles.title}>{site.title}</p>
        <p className={`muted ${styles.meta}`}>
          <span>{site.location}</span>
        </p>
        <div className={`btnRow ${styles.actions}`}>
          <a className="btn btnPrimary" href={`mailto:${site.email}`}>
            Email
          </a>
          <a
            className="btn btnGhost"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btnGhost" href={site.resumeHref}>
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
