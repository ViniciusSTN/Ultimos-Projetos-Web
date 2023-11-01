import { Container } from './styled';

export type PostContainerProps = {
  content: string;
};

export const PostContainer = ({ content }: PostContainerProps) => {
  return <Container>{content}</Container>;
};
