import { caseStudies } from "../content";
import { CaseStudyCard } from "./CaseStudyCard";
import styles from "./CaseStudyGrid.module.css";

export function CaseStudyGrid() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="sectionHeader">
          <span className="kicker">02</span>
          <h2 className="sectionTitle" id="work-title">
            Selected work
          </h2>
        </div>
        <div className={styles.grid}>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
