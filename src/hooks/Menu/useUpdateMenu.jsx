import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useUpdateMenu = () => {
  const queryClinet = useQueryClient();

  const { mutate: updateMenu } = useMutation({
    mutationFn: async ({ formData, title, category, price, id }) => {
      const { data } = await api.patch(
        `/api/update/${id}`,
        { file: formData, title, category, price },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
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
