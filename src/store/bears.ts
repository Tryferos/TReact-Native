import {create} from 'zustand';

interface BearState {
  bears: number;
  updateBears: (b: number) => void;
  removeAllBears: () => void;
  increasePopulation: () => void;
}

export const useBearStore = create<BearState>()(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
  updateBears: newBears => set({bears: newBears}),
}));
