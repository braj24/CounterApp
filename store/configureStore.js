import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/index';

const rootReducer = combineReducers({
  countValue: countReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
