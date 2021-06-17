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

    // const ShowIndex = () => {
    // return getIndex.data.data.map(el =>{
    //     return <aside key={el.attributes.id}>
    //         <ul>
    //             <a href={el.attributes.title}></a>
    //             <li>{el.attributes.date}</li>
    //         </ul>
    //     </aside>
    // });
    // }

