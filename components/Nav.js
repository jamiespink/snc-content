import { useState } from "react";
import styles from "../styles/Nav.module.scss";
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

            <button
              className={styles.burger}
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              type="button"
            />
            <div className={`${styles.linksMobile} ${open ? styles.open : ""}`}>
              <Container>
                <div className={styles.linksMobileContainer}>
                  {renderLinks()}
                </div>
              </Container>
            </div>
          </div>
        </Container>
      </nav>
      <div className={styles.spacer} />
    </>
  );
}
