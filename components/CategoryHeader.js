import Container from "./Container";
import Image from "next/image";
import styles from "../styles/CategoryHeader.module.scss";

export default function CategoryHeader({ category }) {
  return (
    <section className={styles.outerContainer}>
      <Container>
        <div className={styles.text}>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
        <div className={styles.image}>
          <Image
            src={category.acf.image}
            layout="fill"
            objectFit="cover"
            alt={category.name}
          />
        </div>
      </Container>
    </section>
  );
}
