const reducer = (state, action) => {
    switch (action.type){
        case 'ELEMENT_TYPE_REQUEST':
            return {
                ...state,
                option: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;