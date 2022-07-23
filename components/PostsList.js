import Container from "./Container";
import PostsListItem from "./PostsListItem";
import styles from "../styles/PostsList.module.scss";

export default function PostsList({ posts }) {
  return (
    <section className={styles.outerContainer}>
      <Container>
        {posts.map((post) => (
          <PostsListItem key={post.id} post={post} />
        ))}
      </Container>
    </section>
  );
}
