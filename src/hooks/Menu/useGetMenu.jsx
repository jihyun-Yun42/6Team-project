import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { apis } from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useGetMenu = () => {
  const { data, isLoading } = useQuery({
    queryKey: keys.GET_MENU,
    queryFn: async () => {
      const data = await apis.get('/api/menus/list');
      return data.data;
    },
  });

  return { menuData: data, getMenuIsLoading: isLoading };
};
