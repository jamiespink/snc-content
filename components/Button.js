import Link from "next/link";
import styles from "../styles/Button.module.scss";

export default function Button({ text, link }) {
  return (
    <Link href={link}>
      <a className={styles.anchor}>{text}</a>
    </Link>
  );
}
