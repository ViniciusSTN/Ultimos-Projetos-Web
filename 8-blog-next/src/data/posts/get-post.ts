import { POSTS_URL } from '@/config/app-config';
import { AllPostsData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

// exemplo
// /api/posts?populate=deep&filters[slug][$eq]=um-titulo-qualquer

export const getPosts = async (
  slug: string | string[] | undefined,
): Promise<AllPostsData> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$eq]=${slugString}`;
  const jsonPosts = await fetchJson<AllPostsData>(url);
  return jsonPosts;
};
