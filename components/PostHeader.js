import Container from "./Container";
import Image from "next/image";
import styles from "../styles/PostHeader.module.scss";

export default function PostHeader({ post }) {
  const imageProps = post.plaiceholder;
  const imageStyles = {
    opacity: 0.3
  }
  
  return (
    <section className={styles.outerContainer}>
      <Container>
        {post._embedded["wp:featuredmedia"] && (
          <div className={styles.image}>
            <Image
              {...imageProps}
              style={imageStyles}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              alt={post.title.rendered}
            />
            <h1>{post.title.rendered}</h1>
          </div>
        )}
      </Container>
    </section>
  );
}
