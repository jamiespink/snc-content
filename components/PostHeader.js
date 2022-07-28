import Container from "./Container";
import Image from "next/image";
import styles from "../styles/PostHeader.module.scss";

export default function PostHeader({ post }) {
  const imageProps = post.plaiceholder;
  
  return (
    <section className={styles.outerContainer}>
      <Container>
        <h1>{post.title.rendered}</h1>
        {post._embedded["wp:featuredmedia"] && (
          <div className={styles.image}>
            <Image
              {...imageProps}
              placeholder="blur"
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
