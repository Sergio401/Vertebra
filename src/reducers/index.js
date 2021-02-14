import { reducer as modal } from 'redux-modal'

const reducer = (state, action) => {
    switch (action.type){
        case 'ELEMENT_TYPE_REQUEST':
            return {
                ...state,
                option: action.payload,
            }

        case 'TOGGLE_MODAL':
            return {
                modal,
            }

        case 'NEW_ELEMENT':
            return {
                ...state,
                newElement: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;