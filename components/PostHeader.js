import Container from "./Container";
import Image from "next/image";
import styles from "../styles/PostHeader.module.scss";

export default function PostHeader({ post }) {
  return (
    <section className={styles.outerContainer}>
      <Container>
        <h1>{post.title.rendered}</h1>
        {post._embedded["wp:featuredmedia"] && (
          <div className={styles.image}>
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              layout="fill"
              objectFit="cover"
              alt={post.title.rendered}
            />
          </div>
        )}
      </Container>
    </section>
  );
}
