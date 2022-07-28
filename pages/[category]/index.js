import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import Layout from "../../components/Layout";
import CategoryHeader from "../../components/CategoryHeader";
import PostsList from "../../components/PostsList";
import { getPostsByCategory, getCategories } from "../../lib/api";

export default function Category({ categoryWithBase64, posts }) {
  return (
    <Layout>
      <CategoryHeader category={categoryWithBase64} />
      <PostsList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // todo: commit to store and only fetch category when its not set
  const categories = await getCategories();
  let category;
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].slug === params.category) {
      category = categories[i];
      break;
    }
  }
  const { base64, img } = await getPlaiceholder(category.acf.image);
  const categoryWithBase64 = {
    ...category,
    plaiceholder: {
      ...img,
      blurDataURL: base64,
    },
  };

  let posts = await getPostsByCategory(params.category);
  posts = await Promise.all(
    posts.map(async (post) => {
      try {
        console.log(post._embedded);
        const { base64, img } = await getPlaiceholder(
          post._embedded["wp:featuredmedia"][0].source_url
        );
        return {
          ...post,
          plaiceholder: {
            ...img,
            blurDataURL: base64,
          },
        };
      } catch (err) {
        console.log(err);
        return post;
      }
    })
  );
  if (posts.length) {
    return {
      props: { categoryWithBase64, posts },
    };
  }
  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  const paths = categories.map((category) => {
    const slug = category.slug;
    return {
      params: {
        category: slug,
      },
    };
  });
  return { paths, fallback: false };
}
