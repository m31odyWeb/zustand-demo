import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface ICounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStoreWithDevTools = create<ICounterStore>()(
  devtools(
    (set, get) => ({
      count: 0,
      increment: () => {
        set({ count: get().count + 1 }, false, 'INCREMENT');
      },
      decrement: () => {
        set((state) => ({ count: state.count - 1 }), false, 'DECREMENT');
      },
    }),
    {
      name: 'COUNTER',
      enabled: true,
      anonymousActionType: 'unknown',
    }
  )
);
