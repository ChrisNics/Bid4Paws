import { useQuery } from '@tanstack/react-query';

export const getRandomDogs = async (currentUser) => {
  const res = await fetch(
    `/api/match/search?lng=${currentUser?.address?.geocoding?.coordinates[0]}&lat=${currentUser?.address?.geocoding?.coordinates[1]}&radius=${currentUser?.address?.geocoding?.radius}&userID=${currentUser?._id}`
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to search for dogs.');
  }

  const { data } = await res.json();

  return data?.randomDog;
};

export const useRandomDogs = (currentUser) =>
  useQuery({
    queryKey: ['random-dogs'],
    queryFn: getRandomDogs.bind(this, currentUser),
    refetchOnWindowFocus: false
  });
