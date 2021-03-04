import { reducer as modal } from 'redux-modal'
import state from '../../initialState.json'

const reducer = (state = state, action) => {

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

        case "LIST_ITEM_ADD":
            return {
                ...state,
                item: action.payload,
            }

        default:
            return state;
    }

}

export default reducer;