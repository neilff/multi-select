import { Iterable } from 'immutable';
import createLogger from 'redux-logger';

function immutableToJS(state) {
  return Object.keys(state).reduce((newState, key) => {
    const val = state[key];
    newState[key] = Iterable.isIterable(val) ? val.toJS() : val;
    return newState;
  }, {});
}

// Configure logging middleware
const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    return immutableToJS(state);
  },
  predicate: (getState, { type }) => {
    // List of actions we want to ignore
    const blacklist = [];

    return blacklist.every(i => type !== i);
  },
});

export default logger;
