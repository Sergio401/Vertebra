export const elementTypeRequest = payload => ({
    type: 'ELEMENT_TYPE_REQUEST',
    payload,
});

export const hideModal = payload => ({
    type: 'HIDE_MODAL',
    payload,
});

export const showModal = payload => ({
    type: 'SHOW_MODAL',
    payload,
});
