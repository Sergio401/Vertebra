export const elementTypeRequest = payload => ({
    type: 'ELEMENT_TYPE_REQUEST',
    payload
});

export const addItem = payload => {
    return {
        type: "LIST_ITEM_ADD",
        payload
    };
};

export const editItem = payload => {
    return {
        type: "LIST_ITEM_EDIT",
        payload
    };
};

export const deleteItem = payload => {
    return {
        type: "LIST_ITEM_DELETE",
        payload
    };
};
