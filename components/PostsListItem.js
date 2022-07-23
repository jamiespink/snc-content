import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/PostsListItem.module.scss";

export default function PostsListItem({ post }) {
  const router = useRouter();

  function getHref() {
    return post.acf.external_url.length
      ? post.acf.external_url
      : `${router.asPath}/${post.slug}`;
  }

  function externalPost() {
    return post.acf.external_url !== "";
  }

  return (
    <Link href={externalPost() ? post.acf.external_url : `${router.asPath}/${post.slug}`}>
      <a target={externalPost() ? "_blank" : ""}>
        <div className={styles.container}>
          <h2>{post.title.rendered}</h2>
          <p>{post.acf.description}</p>
        </div>
      </a>
    </Link>
  );
}
