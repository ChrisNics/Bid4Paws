import { useQuery } from '@tanstack/react-query';

export const getAllUsers = async () => {
  const res = await fetch('/api/user?role=owner');

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to get all dogs.');
  }

  const { data } = await res.json();
  return data;
};

export const useAllUsers = () =>
  useQuery({
    queryKey: ['all-users'],
    queryFn: getAllUsers,
    refetchOnWindowFocus: false,

    onError: (error) => {
      console.log(error.message);
    }
  });
