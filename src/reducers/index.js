const reducer = (state, action) => {
    switch (action.type){
        case 'ELEMENT_TYPE_REQUEST':
            return {
                ...state,
                option: action.payload,
            }
        case 'SHOW_MODAL':
            return {
                ...state,
                modalType: action.payload,
                modalProps: action.payload,
                type: action.type
            }
        case 'HIDE_MODAL':
            return {
                ...state,
                modalType: null,
                modalProps: {
                    open: false
                }
            }
        default:
            return state;
    }
}

export default reducer;