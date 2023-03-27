import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import showNotification from '../../lib/showNotification';

const useCurrentUser = create(
  immer((set) => ({
    currentUser: {},
    setCurrentUser: (currentUser) =>
      set((state) => {
        state.currentUser = currentUser;
      })
  }))
);

export default useCurrentUser;
