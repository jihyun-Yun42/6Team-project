import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

const AlertContext = createContext();

export const AlertModalRoot = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <AlertContext.Provider value={{ open, setOpen }}>{children}</AlertContext.Provider>
  );
};

export const AlertModalTrigger = ({ children }) => {
  const { setOpen } = useContext(AlertContext);
  return <Modalonoff onClick={() => setOpen((pre) => !pre)}>{children}</Modalonoff>;
};

const Modalonoff = styled.div`
  display: contents;
`;

export const AlertModalContent = ({ children }) => {
  const { open } = useContext(AlertContext);
  return open && <ContentBox>{children}</ContentBox>;
};

const ContentBox = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  position: fixed;
  top: -70%;
  z-index: 55;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 50%);
  padding: 10%;
  border-radius: 30px;
  box-sizing: border-box;
  font-size: 30px;
`;

export const AlertModalAction = ({ children, ...rest }) => {
  const { setOpen } = useContext(AlertContext);
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
