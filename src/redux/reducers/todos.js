import { ADD_TODO } from "../actionTypes"

const initialState = {
    allIds:[],
    byIds:{}
}

export default function(state = initialState, action) {
    if(action == ADD_TODO) {
        const {id, content} = action.payload;
        
        return {
            ...state,
            allIds: [...state.allIds, id],
            byIds: {
                ...state.byIds,
                [id]: {
                    content,
                    completed: false
                }
            }
        }
    }
}