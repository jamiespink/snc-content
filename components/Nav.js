import { useState } from "react";
import styles from "../styles/Nav.module.css";
import Container from "./Container";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function renderLinks() {
    return (
      <>
        <a>Services</a>
        <a>Work</a>
        <a>Contact</a>
      </>
    );
  }

  return (
    <>
      <nav className={`${styles.nav} nav`}>
        <Container>
          <div className={styles.innerContainer}>
            <div className={styles.logo} />
            <div className={styles.linksDesktop}>{renderLinks()}</div>

            {/* <button
              className="burger"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              type="button"
            />
            <div className="links-mobile">
              <Container>{renderLinks()}</Container>
            </div> */}
          </div>
        </Container>
      </nav>
      <div className={styles.spacer} />
    </>
  );
}
