import styles from "../styles/Container.module.scss"

export default function Container({ narrow = false, children }) {
  return (
    <div className={`${styles.container} ${narrow ? styles.containerNarrow : ''}`}>
      {children}
    </div>
  );
}
