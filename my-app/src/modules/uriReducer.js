const URI_SAVE = 'URI_SAVE';
 
export const uriSave = (inputData) => ({
    type: URI_SAVE,
    inputData: inputData
})
 
const initialState = {
    inputData: '/'
}

export default function uriReducer(state = initialState, action){
    switch(action.type) {
        case URI_SAVE:
            return Object.assign({}, state, {
                inputData: action.inputData
            })
 
        default:
            return state
    }
}