import Container from "./Container";
import Image from "next/image";
import styles from "../styles/CategoryHeader.module.scss";

export default function CategoryHeader({ category }) {
  const imageProps = category.plaiceholder;

  return (
    <section className={styles.outerContainer}>
      <Container narrow>
        <div className={styles.innerContainer}>
          <div className={styles.text}>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </div>
          {/* <div className={styles.image}>
            <Image
              {...imageProps}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              alt={category.name}
            />
          </div> */}
        </div>
      </Container>
    </section>
  );
}
