import { useQuery } from '@tanstack/react-query';
import baseUrl from '../../dev-data/baseUrl';

export const getCurrentUser = async (userId) => {
  if (!userId) {
    return null; // Return empty object if session is not defined
  }
  const res = await fetch(`${baseUrl}/api/user/${userId}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to get current user.');
  }

  const { data } = await res.json();
  return data;
};

const useCurrentUser = (userId) => {
  return useQuery({
    queryKey: ['currentUser', userId],
    queryFn: () => getCurrentUser(userId)
  });
};

export default useCurrentUser;
