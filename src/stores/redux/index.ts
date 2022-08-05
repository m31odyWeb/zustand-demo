import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, createStore, Reducer } from 'redux';

//Initial state
interface ICounterState {
  count: number;
}
const initialState: ICounterState = {
  count: 0,
};

//Action types
enum ActionTypes {
  'INCREMENT' = 'COUNTER/INCREMENT',
  'DECREMENT' = 'COUNTER/DECREMENT',
}
interface IIncrementAction {
  type: ActionTypes.INCREMENT;
}
interface IDecrementAction {
  type: ActionTypes.DECREMENT;
}
type IActions = IIncrementAction | IDecrementAction;

const increment = (): IIncrementAction => ({ type: ActionTypes.INCREMENT });
const decrement = (): IDecrementAction => ({ type: ActionTypes.DECREMENT });

export const counterActions = {
  increment,
  decrement,
};

//Reducer
const counterReducer: Reducer<ICounterState, IActions> = (
  state = initialState,
  { type }
) => {
  switch (type) {
    case ActionTypes.INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case ActionTypes.DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    default:
      return initialState;
  }
};

//Reducers combining
const rootReducer = combineReducers({
  counter: counterReducer,
});

//Store initialization
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
