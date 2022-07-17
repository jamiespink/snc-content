import Container from "./Container";
import styles from "../styles/Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.outerContainer}>
      <Container>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <p>Hi, my name is</p>
            <h2>Sarah Chetcuti</h2>
            <h1>Content Writer based in Malta</h1>
          </div>
          <div className={styles.image} />
        </div>
      </Container>
    </section>
  );
}
