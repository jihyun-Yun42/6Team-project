import React, { useState } from 'react';

export const useFileInput = (initialState, mutate, id) => {
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
  const submitFormHandler = (e) => {
    e.preventDefault();
    const requestDto = new Blob(
      [
        JSON.stringify({
          title: inputValue.title,
          category: inputValue.category,
          price: inputValue.price,
          file: inputValue.file,
        }),
      ],
      {
        type: 'application/json',
      }
    );
    const formData = new FormData();

    if (inputValue.file == null) {
      const emptyImageBlob = new Blob([], { type: 'image/jpg' });
      formData.append('file', emptyImageBlob, 'image');
      formData.append('requestDto', requestDto);
      return mutate({ formData, id });
    }
    formData.append('file', inputValue.file);
    formData.append('requestDto', requestDto);
    mutate({ formData, id });
  };
  return [inputValue, onChangeHandler, fileInputHandler, submitFormHandler];
};
