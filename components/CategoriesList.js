import Container from "./Container";
import CategoriesListItem from "./CategoriesListItem";
import styles from "../styles/CategoriesList.module.scss";

export default function CategoriesList({ categories }) {
  return (
    <section className={styles.outerContainer}>
      <Container>
        {categories.map((category) => (
          <CategoriesListItem key={category.id} category={category} />
        ))}
      </Container>
    </section>
  );
}
