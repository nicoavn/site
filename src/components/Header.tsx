import { nav, site, socials } from "../content";
import styles from "./Header.module.css";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <a className={styles.logo} href="#top" aria-label={`${site.name} home`}>
          <img src="/logo.png" alt="" />
        </a>
        <nav className={styles.nav} aria-label="Primary">
          <span className={styles.navLinks}>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </span>
          <a className={styles.contact} href={socials[0].href}>
            Email
          </a>
          <a
            className={styles.contact}
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
