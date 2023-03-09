import { signOut as logout } from 'next-auth/react';

import useCurrentUser from '@/store/useCurrentUser';

const signOut = () => {
  const { logoutCurrentUser } = useCurrentUser.getState();

  logoutCurrentUser();
  logout();
};

export default signOut;
