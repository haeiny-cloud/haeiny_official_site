import styles from "./App.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MusicSection from "./components/MusicSection";
import LyricQuote from "./components/LyricQuote";
import ArtistSection from "./components/ArtistSection";
import ListenSection from "./components/ListenSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className={styles["rail"]}>
          <span>Haeiny / 박해인</span>
          <span>SMALL MOMENTS. LASTING MELODIES.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
        <MusicSection />
        <LyricQuote />
        <ArtistSection />
        <ListenSection />
      </main>
      <Footer />
    </>
  );
}
