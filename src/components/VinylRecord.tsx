import styles from "./VinylRecord.module.css";

export default function VinylRecord() {
  return (
    <div
      className={styles["art"]}
      role="img"
      aria-label="아침 햇살과 풍경을 배경으로 한 레코드 일러스트"
    >
      <div className={styles["sun"]}></div>
      <div className={styles["horizon"]}></div>
      <div className={styles["record"]}>
        <div className={styles["label"]}>
          <span className={styles["label-title"]}>
            Rise and
            <br />
            Shine
          </span>
          <small>Haeiny</small>
        </div>
      </div>
      <div className={styles["art-caption"]}>
        <span>EVERY DAY, A NEW BEGINNING</span>
        <span>01 / 01</span>
      </div>
    </div>
  );
}
