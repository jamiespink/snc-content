import Container from "./Container";
import CategoriesListItem from "./CategoriesListItem";
import styles from "../styles/CategoriesList.module.scss";

export default function CategoriesList({ categories }) {
  return categories.length ? (
    <div id="services" className="scrollAnchor">
      <section className={styles.outerContainer}>
        <Container>
          {categories.map((category) => (
            <CategoriesListItem key={category.id} category={category} />
          ))}
        </Container>
      </section>
    </div>
  ) : null;
}
