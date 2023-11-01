import { useRouter } from 'next/router';
import { Post } from '@/containers/Post';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPosts } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';

export type DynamicPostsProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostsProps) {
  const router = useRouter();

  // se a página já foi criada no back mas ainda não foi atualizado no front por conta do fallback, renderiza Página carregando...
  // necessário testar em npm start e não em dev
  if (router.isFallback) {
    return <div>Página carregando...</div>;
  }

  if (!post?.attributes?.title) {
    return <Error statusCode={404} />; // pode criar um componente
  }

  return <Post post={post} />;
}

// SSG
export const getStaticPaths: GetStaticPaths = async () => {
  const numbersOfPosts = await countAllPosts();
  const { data } = await getAllPosts(`pagination[limit]=${numbersOfPosts}`);

  return {
    // parâmetros de cada post (no caso o parâmetro do post é o slug)
    paths: data.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    fallback: true, // false: qualquer caminho não incluso em paths retorna uma página 404
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await getPosts(context.params?.slug);
  const post = data.length > 0 ? data[0] : {};

  return {
    props: { post },
    revalidate: 600, // para isso é preciso de um servidor rodando em produção
  };
};
