import styles from "./MusicSection.module.css";
import albumImage from "../assets/album.jpg";
import { featuredTrack, streamingPlatforms } from "../data/tracks";

export default function MusicSection() {
  return (
    <section id="music">
      <div className={styles["sectionhead"]}>
        <h2>The music.</h2>
        <span className={styles["index"]}>01 — RELEASE</span>
      </div>
      <div className={styles["release"]}>
        <div>
          <figure className={styles["album-art"]}>
            <img
              src={albumImage}
              alt="たちつてと 앨범 자켓 — 함께 손을 모은 사람들"
              width="1600"
              height="1600"
              loading="lazy"
            />
          </figure>
        </div>
        <div>
          <div className={styles["eyebrow"]}>
            <span className={styles["dot"]}></span> FEATURED TRACK
          </div>
          <h3>{featuredTrack.title}</h3>
          <div className={styles["credits"]}>
            {featuredTrack.artists} / {featuredTrack.language}
          </div>
          <p className={styles["description"]}>
            만원 전철, 익숙한 길, 조금 무거운 발걸음.
            <br />
            반복되는 하루를 살아가는 우리에게 건네는 노래.
            <br />
            혼자라고 느껴지는 순간에도, 다시 아침을 맞이할 수 있도록.
          </p>
          <a
            className={styles["mv-link"]}
            href={featuredTrack.links.video}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles["mv-play"]} aria-hidden="true">
              ▶
            </span>
            <span>
              <strong>{featuredTrack.title}</strong>
              <small>뮤직비디오 보기 · MUSIC VIDEO</small>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
          <div className={styles["platforms"]}>
            {streamingPlatforms.map((platform) => (
              <a
                key={platform.url}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
