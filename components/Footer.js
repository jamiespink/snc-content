import Container from "./Container";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.outerContainer}>
      <Container>
        <h2>Need a Content Writer? Let&apos;s work together.</h2>
        <a href="mailto:info@snc-content.com">info@snc-content.com</a>
      </Container>
    </footer>
  );
}
