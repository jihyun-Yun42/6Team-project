import React, { useState } from 'react';

export const useFileInput = (initialState) => {
  const [inputValue, setInputValue] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    name === 'price'
      ? setInputValue({
          ...inputValue,
          [name]: value
            .replace(/[^0-9]/g, '')
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        })
      : setInputValue({ ...inputValue, [name]: value });
  };

  const fileInputHandler = (e) => {
    setInputValue({ ...inputValue, file: e.target.files[0] });
  };

  return [inputValue, onChangeHandler, fileInputHandler];
};
