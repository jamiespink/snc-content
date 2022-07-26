import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import CategoriesList from "../components/CategoriesList";
import { getHomeData, getCategories } from "../lib/api";

// const categories = ["web", "email", "social", "editorial"];

export default function Home({ homeData, categoriesWithBase64 }) {
  return (
    <Layout>
      <Hero />
      <About content={homeData.acf.about} />
      <CategoriesList categories={categoriesWithBase64} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const homeData = await getHomeData();
  const categories = await getCategories();
  const categoriesWithBase64 = await Promise.all(
    categories.map(async (category) => {
      const { base64, img } = await getPlaiceholder(category.acf.image);

      return {
        ...category,
        plaiceholder: {
          ...img,
          blurDataURL: base64,
        }
      };
    })
  ).then((values) => values);

  return {
    props: { homeData, categoriesWithBase64 },
  };
}
