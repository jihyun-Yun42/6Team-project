import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import api, { apis } from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useDeleteMenu = () => {
  const queryClinet = useQueryClient();

  const { mutate: deleteMenu } = useMutation({
    mutationFn: async (id) => {
      console.log(id);
      await api.delete(`/api/delete/${id}`);
    },
    onSuccess: () => {
      queryClinet.invalidateQueries({ queryKey: keys.GET_MENU });
    },
  });
  return { deleteMenu };
};
