import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/PostsListItem.module.scss";

export default function PostsListItem({ post }) {
  const router = useRouter();

  return (
    <Link href={`${router.asPath}/${post.slug}`}>
      <a>
        <div className={styles.container}>
          <h2>{post.title.rendered}</h2>
          <div
            className={styles.excerpt}
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
      </a>
    </Link>
  );
}
