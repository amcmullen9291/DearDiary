import { combineReducers } from 'redux';
import { IndexReducer } from './IndexReducer';

const RootReducer = combineReducers({
    Index :IndexReducer,
});

export default RootReducer;