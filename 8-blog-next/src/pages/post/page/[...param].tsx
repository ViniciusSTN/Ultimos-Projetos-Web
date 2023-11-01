// [...param] pega um array de parâmetros

import { GetStaticPaths, GetStaticProps } from 'next';
import { PostData } from '@/domain/posts/posts';
import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { useRouter } from 'next/router';
import { PaginationData } from '@/domain/posts/paginations';
import { countAllPosts } from '@/data/posts/count-all-posts';

export type CategoryProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: CategoryProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

// SSG -> OBS: Normalmente usa-se SSR para fazer paginação
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // tentar carregar
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // TESTAR: http://localhost:3000/post/page/1/TypeScript
  // console.log(ctx); // params: { param: [ '1', 'TypeScript' ] },

  if (!ctx.params || !ctx.params.param) {
    return {
      notFound: true,
    };
  }

  const page = Number(ctx.params.param[0]);
  const category = ctx.params.param[1] || '';

  console.log(category);

  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category
    ? `&filters[category][name][$eq]=${category}`
    : '';

  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  const { data: posts } = await getAllPosts(urlQuery);

  const numberOfPosts = Number(await countAllPosts(categoryQuery));
  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return {
    props: { posts, pagination, category },
    revalidate: 600,
  };
};
