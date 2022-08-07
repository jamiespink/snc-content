import Container from "./Container";
import styles from "../styles/About.module.scss";

export default function About({ content }) {
  return (
    <div id="about" className="scrollAnchor">
      <section className={styles.outerContainer}>
        <Container narrow>
          <h2>About</h2>
          <p>{content}</p>
        </Container>
      </section>
    </div>
  );
}
