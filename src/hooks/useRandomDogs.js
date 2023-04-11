import { useQuery } from '@tanstack/react-query';
import baseUrl from '../../dev-data/baseUrl';
import useCurrentUser from '@/store/useCurrentUser';

export const getRandomDogs = async (currentUser, currentDog) => {
  const res = await fetch(
    `${baseUrl}/api/match/search?lng=${currentUser?.address?.geocoding?.coordinates[0]}&lat=${currentUser?.address?.geocoding?.coordinates[1]}&radius=100&userID=${currentUser?._id}&dogID=${currentDog?._id}`
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to search for dogs.');
  }

  const { data } = await res.json();

  return data?.randomDog;
};

export const useRandomDogs = (currentUser, currentDog) =>
  useQuery({
    queryKey: ['random-dogs'],
    queryFn: getRandomDogs.bind(this, currentUser, currentDog),
    refetchOnWindowFocus: false
  });
