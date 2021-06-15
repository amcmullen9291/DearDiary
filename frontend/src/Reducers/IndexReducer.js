import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    entries: [
        {
        id: 1,
        title: "Welcome",
        content: "Welcome to DearDiary- Default",
    }
    ]
}

export const IndexReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ENTRIES:
            return state
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

    // const getAllEntries = () => {
    //     axios.get('http://[::1]:3001')
    //     .then((response) => {
    //         const totalEntries = response.data.entries;
    //         console.log(totalEntries);
    //     })
    //     .catch(error => console.log("Error:", error));
    // }

