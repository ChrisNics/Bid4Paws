import { useQuery } from '@tanstack/react-query';

export const getAllMatches = async () => {
  const res = await fetch('/api/match');

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to get all matches.');
  }

  const { data } = await res.json();
  return data;
};

export const useAllMatches = () =>
  useQuery({
    queryKey: ['all-matches'],
    queryFn: getAllMatches,
    refetchOnWindowFocus: false,

    onError: (error) => {
      console.log(error.message);
    }
  });
