import { configureStore, createAction, createSlice } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk from 'redux-thunk';

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
const increment = createAction(ActionTypes.INCREMENT);
const decrement = createAction(ActionTypes.DECREMENT);

export const counterActions = {
  increment,
  decrement,
};

//Slice creating
const counterSlice = createSlice({
  name: 'COUNTER',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(increment, (state) => {
      state.count = state.count + 1;
    });
    builder.addCase(decrement, (state) => {
      state.count = state.count - 1;
    });
  },
});

const counterReducer = counterSlice.reducer;

// Store initializing
export const store = configureStore({
  devTools: true,
  middleware: [thunk],
  reducer: {
    counter: counterReducer,
  },
});

//Helper types and functions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
