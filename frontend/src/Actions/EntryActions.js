import { ActionTypes } from '../Constants/Action.type';
export const setEntries = (entries) => {
    return {
        type: ActionTypes.SET_ENTRIES,
        payload: entries,
    }
}

export const selectedEntry = (entries) => {
    return {
        type: ActionTypes.SELECTED_ENTRY,
        payload: entry,
    }
}