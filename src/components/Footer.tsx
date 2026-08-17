import { languages, site, socials } from "../content";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p className={styles.brand}>{site.name}</p>
        <nav className={styles.links} aria-label="Contact">
          {socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
          <a href={site.resumeHref}>Resume PDF</a>
        </nav>
        <p className={`muted ${styles.meta}`}>
          <span>
            {site.location} · {languages.map((lang) => lang.name).join(" / ")}
          </span>
          <span>© {year} {site.name}</span>
        </p>
      </div>
    </footer>
  );
}
