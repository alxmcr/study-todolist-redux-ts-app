import { IRootState, rootReducer } from "./reducers";
import { createStore, Store } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

export const store: Store<IRootState> = createStore(rootReducer, composeWithDevTools())