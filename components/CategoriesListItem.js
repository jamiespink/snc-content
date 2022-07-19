import Button from "./Button";
import Image from "next/image";
import styles from "../styles/CategoriesListItem.module.scss";

export default function CategoriesListItem({ category }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={category.acf.image} layout="fill" objectFit="cover" alt={category.name} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrap}>
          <h3>{category.name}</h3>
          <Button link={category.slug} text="View" />
        </div>
      </div>
    </div>
  );
}
