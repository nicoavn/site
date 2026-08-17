import { highlights, summary } from "../content";
import styles from "./About.module.css";

export function About() {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="wrap">
        <div className="sectionHeader">
          <span className="kicker">01</span>
          <h2 className="sectionTitle" id="about-title">
            About
          </h2>
        </div>
        <div className={styles.grid}>
          <p className={styles.summary}>{summary}</p>
          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
