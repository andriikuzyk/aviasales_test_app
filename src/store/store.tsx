import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

//reducers
import tickets from "./reducers/tickets";

const INITIAL_STATE = {};

const middleware = [thunk];

const rootReducer = combineReducers({
    tickets
});

export type RootState = ReturnType<typeof rootReducer>;

const composeEnhancers =
  typeof window === 'object' &&
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    //@ts-ignore
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);




const store = createStore(
    rootReducer,
    INITIAL_STATE,
    //@ts-ignore
    enhancer
);

export default store;