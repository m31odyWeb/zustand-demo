import create from 'zustand';
import { persist } from 'zustand/middleware';

interface ICounterStore {
  count: number;
  migratedCount: number;
  doubledCount: number;
  increment: () => void;
  decrement: () => void;
}

export const usePersistedCounterStore = create<ICounterStore>()(
  persist(
    (set, get) => ({
      count: 0,
      migratedCount: 0,
      doubledCount: 0,
      increment: () => {
        set({ count: get().count + 1 });
        set({ doubledCount: get().count * 2 });
        //migration
        // set({ migratedCount: get().migratedCount + 1 });
        // set({ doubledCount: get().migratedCount * 2 });
      },
      decrement: () => {
        set((state) => ({ count: state.count - 1 }));
        set({ doubledCount: get().count * 2 });
        //migration
        // set((state) => ({ migratedCount: state.migratedCount - 1 }));
        // set({ doubledCount: get().migratedCount * 2 });
      },
    }),
    {
      name: 'count',
      getStorage: () => localStorage,
      // partialize: (state) => ({ count: state.count }),
      // serialize: (state) => btoa(JSON.stringify(state)),
      // deserialize: (string) => JSON.parse(atob(string)),

      // onRehydrateStorage: (state) => {
      // console.log('-----------------------------------');
      // console.log('Your initial state: ', state);
      // console.log('Hydration starts');
      // return (state, error) => {
      // if (error) {
      // console.log('Hydration failed: ', error);
      // console.log('-----------------------------------');
      // } else {
      // console.log('Hydration finished success!\nHydrated state:', state);
      // console.log('-----------------------------------');
      // }
      // };
      // },

      // version: 1, //1
      // migrate: (persistedState: any, version) => {
      // if (version === 0) {
      // persistedState.migratedCount = persistedState.count;
      // delete persistedState.count;
      // }

      // return persistedState;
      // },
    }
  )
);
