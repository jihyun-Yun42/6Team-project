import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

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
  width: 100%;
  height: 100%;
  z-index: 50;
`;

export const ModalTrigger = ({ children }) => {
  const { open, setOpen } = useContext(Context);
  console.log('Modal', open);
  return <div onClick={() => setOpen((pre) => !pre)}>{children}</div>;
};

export const ModalContent = ({ children }) => {
  const { open } = useContext(Context);
  return open && <ContentBox>{children}</ContentBox>;
};

const ContentBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  position: absolute;
  top: 0%;
  z-index: 51;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 50%);
  padding: 5%;
  border-radius: 50px;
  box-sizing: border-box;
`;
