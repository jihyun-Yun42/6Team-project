import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../axios/api';
import { keys } from '../../utils/createQueryKey';

export const useUpdateMenu = () => {
  const queryClinet = useQueryClient();

  const { mutate: updateMenu } = useMutation({
    // mutationFn: async ({ formData, title, category, price, id }) => {
    mutationFn: async ({ formData, id }) => {
      const { data } = await api.patch(
        `/api/update/${id}`,
        // { formData, title, category, price },
        formData,
        {
          headers: {
            'Content-enctype': 'multipart/form-data',
            'Content-Disposition': 'form-data; name="fieldName"',
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
