import styles from "./ArtistSection.module.css";
import artistImage from "../assets/artist.jpg";
import { artist } from "../data/artist";

export default function ArtistSection() {
  return (
    <section className={styles["about"]} id="about">
      <div>
        <div className={styles["eyebrow"]}>02 — ABOUT THE ARTIST</div>
        <h2 style={{ marginTop: "25px" }}>
          Behind
          <br />
          the music.
        </h2>
        <figure className={styles["artist-portrait"]}>
          <img
            src={artistImage}
            alt="노을 진 항구를 바라보는 Haeiny"
            width="1600"
            height="1600"
            loading="lazy"
          />
          <figcaption>
            <span>Haeiny</span>
            <span>BEHIND THE MUSIC</span>
          </figcaption>
        </figure>
      </div>
      <div>
        <p>
          {artist.name}, {artist.koreanName}.
          <br />
          일상에서 마주하는 감정과 다시 나아가는 마음을 음악에 담습니다.
        </p>
        <p>
          ‘Rise and Shine’은 평범한 하루를 버텨내는 이들을 향한 응원입니다.
          익숙한 풍경 속에서도 작은 빛을 발견하고, 함께하는 마음으로 내일을
          맞이합니다.
        </p>
        <div className={styles["signature"]}>Haeiny.</div>
        <div className={styles["official-socials"]}>
          <div className={styles["eyebrow"]}>FOLLOW HAEINY</div>
          <div className={styles["social-links"]}>
            {artist.socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${artist.name} ${social.label}`}
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
