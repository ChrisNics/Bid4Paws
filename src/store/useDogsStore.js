import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useDogsStore = create(
  immer((set) => ({
    dogToUpdate: {},
    setDogToUpdate: (dogToUpdate) =>
      set((state) => {
        state.dogToUpdate = dogToUpdate;
      })
  }))
);

export default useDogsStore;
