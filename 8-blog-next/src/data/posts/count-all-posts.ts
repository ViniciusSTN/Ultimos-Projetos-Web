import { POSTS_URL } from '@/config/app-config';
import { AllPostsData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  // const url = `${POSTS_URL}/count?${query}`;
  // const numberOfPosts = await fetchJson<string>(url);
  // return numberOfPosts;
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchJson<AllPostsData>(url);
  return String(posts.meta.pagination.total);
};
