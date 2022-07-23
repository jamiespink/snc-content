import Head from "next/head";
import Layout from "../../components/Layout";
import PostHeader from "../../components/PostHeader";
import PostContent from "../../components/PostContent";
import { getPostBySlug } from "../../lib/api";

export default function Category({ post }) {
  return (
    <Layout>
      <PostHeader post={post} />
      <PostContent post={post} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const postArray = await getPostBySlug(params.post);
  const post = postArray[0];
  if (postArray.length) {
    return {
      props: { post },
    };
  }
  return {
    notFound: true,
  };
}
