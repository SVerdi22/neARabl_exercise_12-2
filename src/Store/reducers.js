import { combineReducers, createStore } from 'redux';
function rootReducer(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_STORE_TEST1':
            return { ...state, testKey1: action.testArg1 }
        case 'ADD_DATA_TO_STORE':
            return { ...state, data: action.data }
        case 'UPDATE_FIELD_SELECTION':
            return { ...state, field: parseInt(action.field) }
        case 'UPDATE_CURRENTLY_DISPLAYING':
            return { ...state, currentlySelected: parseInt(action.currentlySelected) }    
        default: return state
    }
}
// const rootReducer = combineReducers({
//     reducer1
// })
export default rootReducer