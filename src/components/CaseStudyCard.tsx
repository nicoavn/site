import type { CaseStudy } from "../content";
import styles from "./CaseStudyCard.module.css";

type Props = {
  study: CaseStudy;
  index: number;
};

export function CaseStudyCard({ study, index }: Props) {
  const n = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`${styles.card} ${study.featured ? styles.featured : ""}`}
      aria-labelledby={`${study.id}-title`}
    >
      <div className={styles.meta}>
        <span>{n}</span>
        <span>
          {study.dates} · {study.location}
        </span>
      </div>
      <h3 className={styles.company} id={`${study.id}-title`}>
        {study.company}
      </h3>
      <p className={styles.role}>{study.role}</p>
      <p className={styles.narrative}>{study.narrative}</p>
      {study.clients ? (
        <dl className={styles.clients}>
          {study.clients.map((client) => (
            <div key={client.name} className={styles.client}>
              <dt>{client.name}</dt>
              <dd>{client.body}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {study.outcomes.length > 0 ? (
        <ul className={styles.outcomes}>
          {study.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <div className="chipRow">
        {study.stack.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
