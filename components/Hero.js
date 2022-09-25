import Container from "./Container";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";

export default function Hero({ image }) {
  return (
    <section className={styles.outerContainer}>
      <Container>
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            <p>Hi, my name is</p>
            <h2>Sarah Chetcuti</h2>
            <h1>Content Writer based in Malta</h1>
          </div>
          <div className={styles.image}>
            <Image
              {...image}
              placeholder="blur"
              layout="fill"
              objectFit="contain"
              alt="Hero"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
