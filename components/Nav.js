import { useState } from "react";
import styles from "../styles/Nav.module.scss";
import Link from "next/link";
import Container from "./Container";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function renderLinks() {
    function onClick(e) {
      e.preventDefault;
      setOpen(false);
    }

    return (
      <>
        <Link href="/#about">
          <a onClick={onClick}>About</a>
        </Link>
        <Link href="/#services">
          <a onClick={onClick}>Services</a>
        </Link>
        <Link href="#footer">
          <a onClick={onClick}>Contact</a>
        </Link>
      </>
    );
  }

  return (
    <>
      <nav className={`${styles.nav} nav`}>
        <Container>
          <div className={styles.innerContainer}>
            <Link href="/">
              <a>
                <div className={styles.logo} />
              </a>
            </Link>
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
