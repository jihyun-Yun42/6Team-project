import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { apis } from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useUpdateMenu = () => {
  const queryClinet = useQueryClient();

  const { mutate: updateMenu } = useMutation({
    mutationFn: async (payload) => {
      const { data } = await apis.patch(`/api/list${payload.id}`, payload, {
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

  return { updateMenu };
};
