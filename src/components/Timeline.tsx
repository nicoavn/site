import { certification, education, timeline } from "../content";
import styles from "./Timeline.module.css";

export function Timeline() {
  return (
    <section className="section" id="resume" aria-labelledby="resume-title">
      <div className="wrap">
        <div className="sectionHeader">
          <span className="kicker">04</span>
          <h2 className="sectionTitle" id="resume-title">
            Resume
          </h2>
        </div>
        <div className={styles.layout}>
          <ol className={styles.list}>
            {timeline.map((item) => (
              <li key={`${item.company}-${item.dates}`} className={styles.item}>
                <p className={styles.dates}>{item.dates}</p>
                <h3 className={styles.role}>
                  {item.role} · {item.company}
                </h3>
                <p className="muted">{item.summary}</p>
              </li>
            ))}
          </ol>
          <aside className={styles.aside}>
            <div className={styles.block}>
              <h3>Education</h3>
              <ul>
                {education.map((item) => (
                  <li key={item.school}>
                    <strong>{item.credential}</strong>
                    <span className={styles.school}>
                      {item.school} · {item.dates}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.block}>
              <h3>Certification</h3>
              <p>{certification}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
