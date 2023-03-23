import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import showNotification from '../../lib/showNotification';

const useCurrentUser = create(
  immer((set) => ({
    currentUser: null,
    loading: true,

    setCurrentUser: (currentUser) =>
      set((state) => {
        state.currentUser = currentUser;
      }),

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

      const { data } = await res.json();

      set((state) => {
        state.currentUser = data;
        state.loading = false;
      });
    },

    updateCurrentUser: (fn) => {
      set((state) => {
        state.currentUser = fn(state.currentUser);
      });
    },

    logoutCurrentUser: () =>
      set((state) => {
        state.currentUser = null;
      })
  }))
);

export default useCurrentUser;
