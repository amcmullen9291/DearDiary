import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    entries: [],
};

export const IndexReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ENTRIES:
            return { ...state, entries: payload};
        default:
            return state
    }
};

export const EntryContentReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_ENTRY:
            return { ...state, ...payload};
        default:
            return state;
    }
}

export const CreateEntryReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.CREATE_ENTRY:
            return { ...state, ...payload};
        default:
            return state;
    }
}