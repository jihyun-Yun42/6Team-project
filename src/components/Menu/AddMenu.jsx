import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import api, { apis } from '../../axios/api';
import { keys } from '../../utils/createQueryKey';
import { ModalRoot, ModalTrigger } from '../Modal';

export const AddMenu = () => {
  const queryClinet = useQueryClient();
  const [newMenu, setNewMenu] = useState({
    title: '',
    category: '',
    price: '',
    file: null,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    name === 'price'
      ? setNewMenu({
          ...newMenu,
          price: value
            .replace(/[^0-9]/g, '')
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        })
      : setNewMenu({ ...newMenu, [name]: value });
  };

  const addFileHandler = (e) => {
    setNewMenu({ ...newMenu, file: e.target.files[0] });
  };

  const mutation = useMutation({
    mutationFn: async (payload) => {
      console.log(payload);
      const { data } = await apis.post('/api/upload', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: keys.GET_MENU }); // GET 요청을 다시함
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
          price: '',
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
      <input
        type="text"
        name="title"
        value={newMenu.title}
        onChange={onChangeHandler}
        placeholder="버거 이름을 입력해주세요"
      />
      <input
        type="text"
        name="price"
        value={newMenu.price}
        onChange={onChangeHandler}
        placeholder="가격을 입력해주세요"
      />
      <select
        name="category"
        defaultValue={'DEFAULT'}
        value={this}
        onChange={onChangeHandler}
      >
        <option value="DEFAULT" disabled>
          카테고리를 선택해주세요
        </option>
        <option value="NEW">신제품</option>
        <option value="premium">프리미엄</option>
        <option value="Whopper">와퍼&주니어</option>
        <option value="chicken">치킨&슈림프버거</option>
        <option value="side">사이드</option>
        <option value="drink">음료&디저트</option>
        <option value="dog">독퍼</option>
      </select>
      <ModalRoot>
        <ModalTrigger>
          <button type="submit">제출</button>
        </ModalTrigger>
      </ModalRoot>
    </form>
  );
};
