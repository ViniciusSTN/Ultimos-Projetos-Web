import { PaginationData } from '@/domain/posts/paginations';
import { Container, NextLink, PreviousLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationData;

// testar: http://localhost:3000/post/page/1/Python ou TypeScript -> filtra
// testar: http://localhost:3000/post/page/1 -> sem filtro

export const Pagination = ({
  nextPage,
  previousPage,
  numberOfPosts,
  postsPerPage,
  category,
}: PaginationProps) => {
  const categoryName = category || '';
  const nextLink = `/post/page/${nextPage}/${categoryName}`;
  const previousLink = `/post/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;
  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/post/page/[...param]">
            Previous
          </Link>
        </PreviousLink>
      )}
      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/post/page/[...param]">
            Next
          </Link>
        </NextLink>
      )}
    </Container>
  );
};
