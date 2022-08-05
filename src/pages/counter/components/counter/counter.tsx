import { useCounterStore } from '../../counter.store';
import { usePersistedCounterStore } from '../../counter.persisted-store';
import { useCounterStoreWithDevTools } from '../../counter.store-with-devtools';

import './index.scss';

export const Counter = () => {
  const [count] = useCounterStore((state) => [state.count]);

  // console.log('counter rerendered');

  //Persist
  // const { migratedCount: count } = usePersistedCounterStore();

  //Devtools
  // const { count } = useCounterStoreWithDevTools();
  return (
    <div className="counter">
      <p className="counter__title">Count:</p>
      <p className="counter__text">{count}</p>
    </div>
  );
};
