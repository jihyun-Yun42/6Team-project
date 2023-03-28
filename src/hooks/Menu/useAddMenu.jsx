import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { apis } from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useAddMenu = () => {
  const queryClinet = useQueryClient();

  const { mutate: addMenu, isLoading: addMenuIsLoding } = useMutation({
    mutationFn: async (payload) => {
      console.log(payload);
      const { data } = await apis.post('/api/upload', payload.formData, {
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
  return { addMenu, addMenuIsLoding };
};
