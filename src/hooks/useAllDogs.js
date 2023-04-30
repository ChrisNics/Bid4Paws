import { useQuery } from '@tanstack/react-query';

export const getAllDogs = async () => {
  const res = await fetch('/api/dog');

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to get all dogs.');
  }

  const { data } = await res.json();
  return data;
};

export const useAllDogs = () =>
  useQuery({
    queryKey: ['all-dogs'],
    queryFn: getAllDogs,
    refetchOnWindowFocus: false,

    onError: (error) => {
      console.log(error.message);
    }
  });
