import axios from "axios";

const API_URL = process.env.WORDPRESS_API_URL;

export async function getCategories() {
  const request = await axios.get(
    `${API_URL}wp/v2/categories?acf_format=standard`
  );
  return request.data;
}

export async function getPostsByCategory(categorySlug) {
  const request = await axios.get(
    `${API_URL}wp/v2/posts?category_slug=${categorySlug}`
  );
  return request.data;
}
