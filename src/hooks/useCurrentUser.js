import useCurrentUserStore from '@/store/useCurrentUser';
import { useQuery } from '@tanstack/react-query';

export const getCurrentUser = async (session) => {
  if (!session) return {};
  const res = await fetch(`/api/user/${session.id}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to get current user.');
  }

  const { data } = await res.json();
  return data;
};

export const useCurrentUser = (status, session) =>
  useQuery({
    queryKey: ['currentUser', session?.id],
    enabled: status !== 'loading',
    queryFn: getCurrentUser.bind(this, session),
    onSettled: (data) => {
      console.log({ data });
      useCurrentUserStore.getState().setCurrentUser(data);
    },
    onError: (error) => {
      useCurrentUserStore.getState().setCurrentUser({});
    }
  });
