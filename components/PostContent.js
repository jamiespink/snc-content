import Container from "./Container";
import styles from "../styles/PostContent.module.scss";

export default function PostContent({ post }) {
  return (
    <section className={styles.outerContainer}>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Container>
    </section>
  );
}
