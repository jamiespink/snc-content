import Container from "./Container";
import PostsListItem from "./PostsListItem";
import PostsListSpacer from "./PostsListSpacer";
import styles from "../styles/PostsList.module.scss";

export default function PostsList({ posts }) {
  return (
    <section className={styles.outerContainer}>
      <Container>
        <div className={styles.innerContainer}>
          {posts.map((post) => (
            <PostsListItem key={post.id} post={post} />
          ))}
          {posts.length % 2 === 0 && 
            <PostsListSpacer />
          }
        </div>
      </Container>
    </section>
  );
}
