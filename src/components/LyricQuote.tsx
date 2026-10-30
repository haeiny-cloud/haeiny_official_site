import styles from "./LyricQuote.module.css";

export default function LyricQuote() {
  return (
    <div className={styles["quote"]}>
      <div className={styles["eyebrow"]} style={{ justifyContent: "center" }}>
        A LINE TO KEEP
      </div>
      <blockquote>
        “혼자라고 느껴질 때 고개 들어 봐<br />
        우리가 여기 있으니까”
      </blockquote>
      <p>RISE AND SHINE · LYRICS BY HAKCHAN LEE</p>
    </div>
  );
}
