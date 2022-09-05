import { useRouter } from "next/router";
import { useState } from "react";
import { decode } from 'html-entities';
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PostsListItem.module.scss";

export default function PostsListItem({ post }) {
  const router = useRouter();
  const imageProps = post.plaiceholder;
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  function externalPost() {
    return post.acf.external_url !== "";
  }

  return (
    <Link
      href={
        externalPost() ? post.acf.external_url : `${router.asPath}/${post.slug}`
      }
    >
      <a
        target={externalPost() ? "_blank" : ""}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        className={`${styles.outerContainer} ${hovered ? styles.hover : ''}`}
      >
        <div className={styles.innerContainer}>
          {imageProps && (
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
          <div className={styles.text}>
            <h2>{decode(post.title.rendered)}</h2>
            <p>{post.acf.description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
