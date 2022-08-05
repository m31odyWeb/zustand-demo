import shallow from 'zustand/shallow';
import { usePersistedCounterStore } from '../../counter.persisted-store';
import { useCounterStore } from '../../counter.store';
import { useCounterStoreWithDevTools } from '../../counter.store-with-devtools';
import './index.scss';

export const CounterControls = () => {
  // const { increment, decrement } = useCounterStore();

  // console.log('controls rerendered');

  // const { increment, decrement } = useCounterStore(
  // (state) => ({ increment: state.increment, decrement: state.decrement }),
  // shallow
  // (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
  // );

  //Persist
  // const { increment, decrement } = usePersistedCounterStore();

  //Devtools
  const { increment, decrement } = useCounterStoreWithDevTools();
  return (
    <div className="counter-controls">
      <button className="counter-controls__btn" onClick={increment}>
        +
      </button>
      <button className="counter-controls__btn" onClick={decrement}>
        -
      </button>
    </div>
  );
};
