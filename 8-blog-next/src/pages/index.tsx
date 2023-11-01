// o index é o padrão da rota

import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/posts';
import { GetStaticProps } from 'next';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=6',
  );

  return {
    props: { posts },
    // revalidate: 60,
  };
};
