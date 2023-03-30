import styled from 'styled-components';

export const Flex = ({ children, fd, ai, ac, fw, jc, gap, ...rest }) => {
  return (
    <Div fd={fd} ai={ai} ac={ac} fw={fw} jc={jc} gap={gap} {...rest}>
      {children}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: ${({ jc }) => jc};
  flex-direction: ${({ fd }) => fd};
  align-items: ${({ ai }) => ai};
  align-content: ${({ ac }) => ac};
  flex-wrap: ${({ fw }) => fw};
  gap: ${({ gap }) => gap}px;
`;
