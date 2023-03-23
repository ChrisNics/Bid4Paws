import { create } from 'zustand';
import createDropzoneSlice from './dropZoneSlice';

const useMyDogs = create((...a) => ({
  ...createDropzoneSlice(...a)
}));

export default useMyDogs;
