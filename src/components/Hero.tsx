import styles from "./Hero.module.css";
import VinylRecord from "./VinylRecord";

export default function Hero() {
  return (
    <div className={styles["hero"]}>
      <div>
        <div className={styles["eyebrow"]}>
          <span className={styles["dot"]}></span> MUSIC FOR A NEW DAY
        </div>
        <h1>
          A little light.
          <br />A new <em>day.</em>
        </h1>
        <p className={styles["intro"]}>
          익숙한 일상 속, 다시 시작할 작은 용기.
          <br />
          Haeiny의 음악을 만나보세요.
        </p>
        <div className={styles["actions"]}>
          <a className={styles["button"]} href="#music">
            Rise and Shine <span>↗</span>
          </a>
          <a className={styles["textlink"]} href="#about">
            아티스트 소개 ↓
          </a>
        </div>
      </div>
      <VinylRecord />
    </div>
  );
}
