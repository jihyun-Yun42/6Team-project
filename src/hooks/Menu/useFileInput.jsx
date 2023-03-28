import React, { useState } from 'react';

export const useFileInput = ({ initialState, mutate, id }) => {
  const [inputValue, setInputValue] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    name === 'price'
      ? setInputValue({
          ...inputValue,
          price: value
            .replace(/[^0-9]/g, '')
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        })
      : setInputValue({ ...inputValue, [name]: value });
  };

  const fileInputHandler = (e) => {
    setInputValue({ ...inputValue, file: e.target.files[0] });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', inputValue.title);
    formData.append('category', inputValue.category);
    formData.append('price', inputValue.price);
    formData.append('file', inputValue.file);

    mutate(
      { formData, id },
      {
        onSuccess: () =>
          setInputValue({
            title: '',
            category: '',
            price: '',
            file: null,
          }),
      }
    );
  };
  return [inputValue, onChangeHandler, fileInputHandler, submitFormHandler];
};
