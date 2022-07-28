import axios from "axios";

const API_URL = process.env.WORDPRESS_API_URL;

export async function getHomeData() {
  try {
    const request = await axios.get(
      `${API_URL}wp/v2/pages/2`
    );
    return request.data;
  } catch {
    return [];
  }
}

export async function getCategories() {
  try {
    const request = await axios.get(
      `${API_URL}wp/v2/categories?acf_format=standard`
    );
    return request.data;
  } catch {
    return [];
  }
}

export async function getPostsByCategory(categorySlug) {
  try {
    const request = await axios.get(
      `${API_URL}wp/v2/posts?category_slug=${categorySlug}&_embed`
    );
    return request.data;
  } catch {
    return [];
  }
}

export async function getPostBySlug(postSlug) {
  try {
    const request = await axios.get(
      `${API_URL}wp/v2/posts?slug=${postSlug}&_embed`
    );
    return request.data;
  } catch {
    return [];
  }
}

export async function getAllPosts() {
  try {
    const request = await axios.get(
      `${API_URL}wp/v2/posts?_embed`
    );
    return request.data;
  } catch {
    return [];
  }
}
