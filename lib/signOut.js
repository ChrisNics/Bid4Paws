import { signOut as logout } from 'next-auth/react';
import { QueryClient } from '@tanstack/react-query';

const signOut = (session) => {
  const queryClient = new QueryClient();

  queryClient.setQueryData(['currentUser', session?.id], {});
  logout();
};

export default signOut;
