import Head from "next/head";
import Layout from "../components/Layout";
import CategoryHeader from "../components/CategoryHeader";
import PostsList from "../components/PostsList";
import { getPostsByCategory, getCategories } from "../lib/api";

export default function Category({ category, posts }) {
  return (
    <Layout>
      <CategoryHeader category={category} />
      <PostsList posts={posts} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  // todo: commit to store and only fetch category when its not set
  const categories = await getCategories();
  let category;
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].slug === params.category) {
      category = categories[i];
      break;
    }
  }
  const posts = await getPostsByCategory(params.category);
  if (posts.length) {
    return {
      props: { category, posts },
    };
  }
  return {
    notFound: true,
  };
}
