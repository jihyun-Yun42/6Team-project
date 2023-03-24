import styled from 'styled-components';

export const Flex = ({ children, fd, ai, ac, fw }) => {
  return <Div {...rest}>{children}</Div>;
};

const Div = styled.div`
  display: flex;
  justify-content: ${({ jc }) => jc};
  flex-direction: ${({ fd }) => fd};
  align-items: ${({ ai }) => ai};
  align-content: ${({ ac }) => ac};
  flex-wrap: ${({ fw }) => fw};
`;
