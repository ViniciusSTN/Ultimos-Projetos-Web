import styled from 'styled-components';

export const Container = styled.article`
  img {
    max-width: 100%;
  }
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }
`;
