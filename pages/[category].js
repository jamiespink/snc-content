import Head from "next/head";
import Layout from "../components/Layout";
import { getPostsByCategory } from "../lib/api";

export default function Category({ posts }) {
  return (
    <Layout>
      <h1>{posts[0]?.title.rendered}</h1>
    </Layout>
  );
}

export async function getServerSideProps({ res, params }) {
  const posts = await getPostsByCategory(params.category);
  if (posts.length) {
    return {
      props: { posts },
    };
  }
  return {
    notFound: true,
  };
}
