import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { apis } from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useDeleteMenu = () => {
  const queryClinet = useQueryClient();

  const { mutate: deleteMenu } = useMutation({
    mutationFn: async (id) => {
      await apis.delete(`/api/menus/${id}`);
    },
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: keys.GET_MENU });
    },
  });
  return { deleteMenu };
};
