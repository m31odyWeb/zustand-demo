import { CounterControls } from './components/counter-controls/counter-controls';
import { Counter } from './components/counter/counter';

import './index.scss';

export const CounterPage = () => {
  return (
    <div className="counter-container">
      <Counter />
      <CounterControls />
    </div>
  );
};
