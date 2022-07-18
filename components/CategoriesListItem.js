import Button from "./Button";
import styles from "../styles/CategoriesListItem.module.scss";

export default function CategoriesListItem({ category }) {
  return (
    <div className={styles.container}>
      <div className={styles.image} />
      <div className={styles.textContainer}>
        <div className={styles.textWrap}>
          <h3>{category}</h3>
          <Button link="" text="View" />
        </div>
      </div>
    </div>
  );
}
