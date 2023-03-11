import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import showNotification from '../../lib/showNotification';

const useCurrentUser = create(
  immer((set) => ({
    currentUser: null,
    loading: true,
    fetchCurrentUser: async (userID) => {
      if (!userID) {
        set((state) => {
          state.loading = false;
        });

        return;
      }

      set((state) => {
        state.loading = true;
      });
      const res = await fetch(`/api/user/${userID}`);
      if (!res.ok) {
        const errorData = await res.json();
        showNotification({ title: 'Failed to fetch', message: errorData.message, color: 'red' });
        return;
      }

      const { user } = await res.json();
      console.log(user);

      set((state) => {
        state.currentUser = user;
        state.loading = false;
      });
    },
    logoutCurrentUser: () =>
      set((state) => {
        state.currentUser = null;
      })
  }))
);

export default useCurrentUser;
