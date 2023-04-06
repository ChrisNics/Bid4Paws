import { useQuery } from '@tanstack/react-query';

export const getMySwipes = async (currentDog) => {
  const res = await fetch(`/api/match?from.dog=${currentDog._id}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to search for dogs.');
  }

  const { data } = await res.json();

  return data;
};

export const useMySwipes = (currentDog) =>
  useQuery({
    queryKey: ['my-swipes'],
    queryFn: getMySwipes.bind(this, currentDog),
    refetchOnWindowFocus: false,

    onError: (error) => {
      console.log(error.message);
    }
  });
