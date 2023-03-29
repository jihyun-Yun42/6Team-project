import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

const Context = createContext();

export const ModalRoot = ({ children }) => {
  const [open, setOpen] = useState(false);
  return <Context.Provider value={{ open, setOpen }}>{children}</Context.Provider>;
};

export const ModalBackground = ({ children }) => {
  const { open } = useContext(Context);
  return open && <Background>{children}</Background>;
};

const Background = styled.div`
  position: fixed;
  background-color: gray;
  opacity: 0.7;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
`;

export const ModalTrigger = ({ children }) => {
  const { setOpen } = useContext(Context);
  return <Modalonoff onClick={() => setOpen((pre) => !pre)}>{children}</Modalonoff>;
};

const Modalonoff = styled.div`
  display: contents;
`;

export const ModalContent = ({ children }) => {
  const { open, setOpen } = useContext(Context);
  return open && <ContentBox>{children}</ContentBox>;
};

const ContentBox = styled.div`
  width: 400px;
  /* height: 400px; */
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 51;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 50%);
  padding: 5%;
  border-radius: 30px;
  box-sizing: border-box;
`;

export const ModalCloseBtn = ({ children, ...rest }) => {
  const { setOpen } = useContext(Context);
  return (
    <BtnCard onClick={() => setOpen((pre) => !pre)} {...rest}>
      <FiX />
    </BtnCard>
  );
};
const BtnCard = styled.button`
  position: absolute;
  border: 0;
  top: 8px;
  right: 8px;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
`;

export const ModalAction = ({ children, ...rest }) => {
  const { setOpen } = useContext(Context);
  return (
    <div
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        rest.onClick();
        setOpen((pre) => !pre);
      }}
    >
      {children}
    </div>
  );
};
