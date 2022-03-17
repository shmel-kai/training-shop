import { 
    ADD_ORDER, 
    CHANGE_QUANTITY,
    CLEAR_ORDERS,
    TOGGLE_CART,
} from './action';


const defaultState = {
    orders: [],
    isCartOpen : false,
};

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_CART: {
            return {
                ...state,
                isCartOpen: !state.isCartOpen,
            }
        }

        case ADD_ORDER: {
            return {
                ...state,
                orders: [...state.orders, { ...action.payload }],
            }
        }

        case CHANGE_QUANTITY: {
            let newOrders = [...state.orders];
            const order = newOrders.find((item) => item.customId === action.id);
            if (action.add) {
                order.quantity += 1;
            } else {
               const newQantity =  order.quantity - 1;
               if (newQantity <= 0) {
                   newOrders = newOrders.filter((item) => item.customId !== order.customId);
               } else {
                   order.quantity -= 1;
               }
            }   
            

            return {
                ...state,
                orders: newOrders,
            }
        }

        case CLEAR_ORDERS:{
            let newOrders = [...state.orders];
            const order = newOrders.find((item) => item.customId === action.id);
            newOrders = newOrders.filter((item) => item.customId !== order.customId);

            return {
                ...state,
                orders: newOrders,
            }
        }



        default: return state;
    }

};

