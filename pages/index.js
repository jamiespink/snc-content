import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import CategoriesList from "../components/CategoriesList";
import { getCategories } from "../lib/api";

// const categories = ["web", "email", "social", "editorial"];

export default function Home({ categories }) {
  return (
    <Layout>
      <Hero />
      <About />
      <CategoriesList categories={categories} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}
