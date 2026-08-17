import { useTheme } from "../theme";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1Zm0 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7.5-3.5a1 1 0 1 1 0-2H21a1 1 0 1 1 0 2h-1.5ZM3 13a1 1 0 1 1 0-2h1.5a1 1 0 1 1 0 2H3Zm15.66-6.16a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0ZM7.81 16.69a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06a1 1 0 0 1 1.41 0Zm11.38 1.41a1 1 0 0 1-1.41 0l-1.06-1.06a1 1 0 0 1 1.41-1.41l1.06 1.06a1 1 0 0 1 0 1.41ZM7.81 7.31 6.75 6.25A1 1 0 0 1 8.16 4.84l1.06 1.06A1 1 0 1 1 7.81 7.31ZM12 18a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V19a1 1 0 0 1 1-1Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.5 13.5A7 7 0 0 1 10.5 4a.75.75 0 0 0-.9-.96 9 9 0 1 0 11.36 11.36.75.75 0 0 0-.96-.9 7 7 0 0 1-3.5 0Z"
          />
        </svg>
      )}
    </button>
  );
}
