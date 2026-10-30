import styles from "./ListenSection.module.css";

export default function ListenSection() {
  return (
    <div className={styles["listen"]} id="listen">
      <div>
        <div className={styles["eyebrow"]}>TAKE THE MUSIC WITH YOU</div>
        <h2 style={{ marginTop: "20px" }}>Let the day begin.</h2>
        <p>오늘의 플레이리스트에 작은 응원을 더해보세요.</p>
      </div>
      <a href="#music">음악 들으러 가기 ↗</a>
    </div>
  );
}
