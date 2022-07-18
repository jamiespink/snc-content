import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import CategoriesList from "../components/CategoriesList";

const categories = ["web", "email", "social", "editorial"];

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <CategoriesList categories={categories} />
    </Layout>
  );
}
