import { useQuery } from '@tanstack/react-query';

const useCurrentUser = (userId) => {
  return useQuery({
    queryKey: ['currentUser', userId],
    queryFn: async () => {
      if (!userId) {
        return null; // Return empty object if session is not defined
      }
      const res = await fetch(`/api/user/${userId}`);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to get current user.');
      }

      const { data } = await res.json();
      return data;
    }
  });
};

export default useCurrentUser;
