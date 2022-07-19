import Head from "next/head";
import Layout from "../components/Layout";
import { getPostsByCategory } from "../lib/api";

export default function Category({ posts }) {
  return (
    <Layout>
      <h1>{posts[0].title.rendered}</h1>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const posts = await getPostsByCategory(context.params.category);

  return {
    props: { posts },
  };
}
