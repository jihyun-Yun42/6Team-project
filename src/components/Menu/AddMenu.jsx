import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import api from '../../axios/api';

export const AddMenu = () => {
  const queryClinet = useQueryClient();
  const [newMenu, setNewMenu] = useState({
    title: '',
    category: '',
    price: 0,
    file: null,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewMenu({ ...newMenu, [name]: value });
  };

  const addFileHandler = (e) => {
    setNewMenu({ ...newMenu, file: e.target.files[0] });
  };

  const mutation = useMutation({
    mutationFn: async (payload) => {
      const { data } = await api.post('/api/upload', payload);
      return data;
    },
    onSuccess: () => {
      queryClinet.invalidateQueries('addMenu'); // GET 요청을 다시함
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newMenu.title);
    formData.append('category', newMenu.category);
    formData.append('price', newMenu.price);
    formData.append('file', newMenu.file);

    console.log(newMenu);
    mutation.mutate(formData, {
      onSuccess: () =>
        setNewMenu({
          title: '',
          category: '',
          price: 0,
          file: null,
        }),
    });
  };
  return (
    <form onSubmit={submitFormHandler}>
      <input
        type="file"
        onChange={addFileHandler}
        accept="image/png, image/jpeg, image/jpg"
      />
      <input type="text" name="title" value={newMenu.title} onChange={onChangeHandler} />
      <input
        type="number"
        name="price"
        value={newMenu.price}
        onChange={onChangeHandler}
      />
      <select name="category" onChange={onChangeHandler}>
        <option value="NEW">신제품</option>
        <option value="premium">프리미엄</option>
        <option value="Whopper">와퍼&주니어</option>
        <option value="chicken">치킨&슈림프버거</option>
        <option value="side">사이드</option>
        <option value="drink">음료&디저트</option>
        <option value="dog">독퍼</option>
      </select>
      <button type="submit">제출</button>
    </form>
  );
};
