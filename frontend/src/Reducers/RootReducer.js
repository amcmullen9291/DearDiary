import { combineReducers } from 'redux';
import { IndexReducer, EntryContentReducer } from './IndexReducer';

const RootReducer = combineReducers({
    Index: IndexReducer,
    entry: EntryContentReducer
});

export default RootReducer;