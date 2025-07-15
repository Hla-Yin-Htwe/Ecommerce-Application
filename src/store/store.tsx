import {create} from 'zustand'

type counterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounterStore = create<counterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 10})),
  decrement: () => set((state) => ({count: state.count - 10})),
}));