const R_SAVE = 'RIPPLE_SAVE';
const R_SELECT = 'RIPPLE_SELECT'
 
export const rippleSave = (inputData) => ({
    type: R_SAVE,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content,
        writer: inputData.writer
    }
})
 
export const rippleselectRow = (id) => (
    console.log('reducer :: id :: ', id),
    {
    type: R_SELECT,
    inputData: {
        id: id,
    }
})

 
const rippleinitialState = {
    lastId: 0,
    inputData: [
        {
            id: '',
            title: '',
            content: '',
            writer: ''
        }
    ],
    rippleselectRowData: {}
}
 
export default function rippleReducer(state = rippleinitialState, action){
    switch(action.type) {
        case R_SAVE:
            console.log(state.inputData)
            return {
                lastId: state.lastId + 1,
                inputData: state.inputData.concat({
                    ...action.inputData,
                    id: state.lastId + 1,
                }), 
            }
        case R_SELECT:
            console.log(action)
            return {
                ...state,
                rippleselectRowData: state.inputData.find(row => row.id === action.inputData.id)
            }
        default:
            return state
    }
}