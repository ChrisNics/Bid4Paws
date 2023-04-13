import { useQuery } from '@tanstack/react-query';

export const getMutualSwipes = async (currentDog) => {
  const res = await fetch(`/api/match?status=accept&currentDogID=${currentDog._id}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to search for dogs.');
  }

  const { data } = await res.json();
  return data;
};

export const useMutualSwipes = (currentDog) =>
  useQuery({
    queryKey: ['mutual-swipes'],
    queryFn: getMutualSwipes.bind(this, currentDog),
    refetchOnWindowFocus: false,

    onError: (error) => {
      console.log(error.message);
    }
  });
