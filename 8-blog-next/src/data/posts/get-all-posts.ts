import { POSTS_URL } from '@/config/app-config';
import { AllPostsData } from '@/domain/posts/posts';
import { fetchJson } from '@/utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<AllPostsData> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchJson<AllPostsData>(url);
  return posts;
};
