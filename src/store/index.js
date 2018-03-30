import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware = process.env.NODE_ENV !== 'production' ?
//   [require('redux-immutable-state-invariant').default(), thunk] :
//   [thunk];

const initialState = {};

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default()] :
  [];

// We could export this as well to unit test passing in the initial state and reducers. 
const store = createStore(
    rootReducer, 
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;