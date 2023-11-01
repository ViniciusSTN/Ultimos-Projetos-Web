import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '@/domain/posts/posts';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

// SSR
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `sort=id:desc&pagination[start]=0&pagination[limit]=12&filters[category][name][$eq]=${ctx.query.category}`;
  const { data: posts } = await getAllPosts(urlQuery);

  return {
    props: { posts, category: ctx.query.category },
  };
};
