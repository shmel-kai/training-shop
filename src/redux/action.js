export const ADD_ORDER = 'ADD_ORDER';
export const CLEAR_ORDERS = 'CLEAR_ORDERS';
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY';
export const TOGGLE_CART = 'TOGGLE_CART ';


export const addOrder = (payload) => ({
    type: ADD_ORDER,
    payload,
});

export const changeQuantity = (id, add = true) => ({
    type: CHANGE_QUANTITY,
    id,
    add,
});

export const clearOrders = (id) => ({ 
    type: CLEAR_ORDERS,
    id,
});

export const toggleCart = () => ({ type: TOGGLE_CART }); 