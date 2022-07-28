import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import Layout from "../../components/Layout";
import PostHeader from "../../components/PostHeader";
import PostContent from "../../components/PostContent";
import { getPostBySlug, getAllPosts, getCategories } from "../../lib/api";

export default function Category({ post }) {
  return (
    <Layout>
      <PostHeader post={post} />
      <PostContent post={post} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postArray = await getPostBySlug(params.post);
  let post = postArray[0];
  if (post._embedded["wp:featuredmedia"]) {
    const { base64, img } = await getPlaiceholder(post._embedded["wp:featuredmedia"][0].source_url);
    post = {
      ...post,
      plaiceholder: {
        ...img,
        blurDataURL: base64,
      },
    };
  }
  if (postArray.length) {
    return {
      props: { post },
    };
  }
  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => {
    const categorySlug = post._embedded["wp:term"][0][0].slug;
    const postSlug = post.slug;
    return {
      params: {
        category: categorySlug,
        post: postSlug,
      },
    };
  });
  return { paths, fallback: false };
}
