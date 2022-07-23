import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import CategoriesList from "../components/CategoriesList";
import { getHomeData, getCategories } from "../lib/api";

// const categories = ["web", "email", "social", "editorial"];

export default function Home({ homeData, categories }) {
  return (
    <Layout>
      <Hero />
      <About content={homeData.acf.about} />
      <CategoriesList categories={categories} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const homeData = await getHomeData();
  const categories = await getCategories();

  return {
    props: { homeData, categories },
  };
}
