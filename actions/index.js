import {CHANGE_COUNTER} from '../constants';

export function changeCount(count) {
  return {
    type: CHANGE_COUNTER,
    payload: count,
  };
}
