import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PostsListItem.module.scss";

export default function PostsListItem({ post }) {
  const router = useRouter();
  const imageProps = post.plaiceholder;

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
        className={styles.outerContainer}
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
            <h2>{post.title.rendered}</h2>
            <p>{post.acf.description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
