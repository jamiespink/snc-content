import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import CategoriesList from "../components/CategoriesList";
import { getHomeData, getCategories } from "../lib/api";

// const categories = ["web", "email", "social", "editorial"];

export default function Home({ hero, homeData, categoriesBase64 }) {
  return (
    <Layout>
      <Hero image={hero} />
      <About content={homeData.acf.about} />
      <CategoriesList categories={categoriesBase64} />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const { base64, img } = await getPlaiceholder(
    "/snc-content__hero.png"
  );
  const homeData = await getHomeData();
  const categories = await getCategories();
  const categoriesBase64 = await Promise.all(
    categories.map(async (category) => {
      const { base64, img } = await getPlaiceholder(category.acf.image);

      return {
        ...category,
        plaiceholder: {
          ...img,
          blurDataURL: base64,
        },
      };
    })
  ).then((values) => values);

  return {
    props: {
      hero: {
        blurDataURL: base64,
        ...img,
      },
      homeData,
      categoriesBase64,
    },
  };
}
