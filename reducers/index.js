import {CHANGE_COUNTER} from '../constants';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COUNTER:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
