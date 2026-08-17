import { skillGroups } from "../content";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="sectionHeader">
          <span className="kicker">03</span>
          <h2 className="sectionTitle" id="skills-title">
            Skills
          </h2>
        </div>
        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3 className={styles.label}>{group.label}</h3>
              <div className="chipRow">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
