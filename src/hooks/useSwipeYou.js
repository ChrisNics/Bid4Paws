import { useQuery } from '@tanstack/react-query';

export const getSwipeYou = async (currentDog) => {
  const res = await fetch(`/api/match?to.dog=${currentDog._id}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to search for dogs.');
  }

  const { data } = await res.json();
  return data;
};

export const useSwipeYou = (currentDog) =>
  useQuery({
    queryKey: ['swipe-you'],
    queryFn: getSwipeYou.bind(this, currentDog),
    refetchOnWindowFocus: false,

    onError: (error) => {
      console.log(error.message);
    }
  });
