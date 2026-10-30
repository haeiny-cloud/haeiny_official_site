import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <a className={styles["logo"]} href="#" aria-label="Haeiny 홈">
        Haeiny<span>.</span>
      </a>
      <nav aria-label="주 메뉴">
        <a href="#music">MUSIC</a>
        <a href="#about">ABOUT</a>
        <a href="#listen">LISTEN ↗</a>
      </nav>
    </header>
  );
}
