import { fromJS } from 'immutable';

export const SET_SELECTION = '@@multiSelect/SET_SELECTION';
export const CLEAR_SELECTION = '@@multiSelect/CLEAR_SELECTION';
export const CLEAR_CATEGORY = '@@multiSelect/CLEAR_CATEGORY';

const INITIAL_STATE = fromJS({});

function estimationReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case CLEAR_CATEGORY:
      return state.update(action.payload.category, i => i.clear());

    case SET_SELECTION:
      return state.setIn([
        action.payload.category,
        action.payload.id,
      ], action.payload.value);

    case CLEAR_SELECTION:
      return state.deleteIn([
        action.payload.category,
        action.payload.id,
      ]);

    default:
      return state;
  }
}

export function toggleSelection({ id, category, value, selectType }) {
  return (dispatch, getState) => {
    if (
      getState().estimation.has(category) &&
      selectType === 'single'
    ) {
      dispatch({
        type: CLEAR_CATEGORY,
        payload: { category },
      });
    }

    if (getState().estimation.hasIn([category, id])) {
      return dispatch({
        type: CLEAR_SELECTION,
        payload: { id, category },
      });
    }

    return dispatch({
      type: SET_SELECTION,
      payload: { id, category, value },
    });
  };
}

export function clearCategory({ id }) {
  return { type: CLEAR_CATEGORY, payload: { category } };
}

export function clearSelection({ id, category, value }) {
  return { type: CLEAR_SELECTION, payload: { id, category, value } };
}

export default estimationReducer;
