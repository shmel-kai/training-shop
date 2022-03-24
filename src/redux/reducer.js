import { combineReducers } from 'redux';
import { 
    ADD_ORDER, 
    CHANGE_QUANTITY,
    CLEAR_ORDERS,
    TOGGLE_CART,
} from './action';
import { 
    PRODUCTS_REQUEST_STARTED,
    PRODUCT_REQUEST_SUCCESS, 
    PRODUCT_REQUEST_ERROR,
    CURR_PRODUCT_REQUEST_SUCCESS,
    MEN_PRODUCT_REQUEST_SUCCESS
} from '../saga/productSaga';


const cartReducerDefaultState = {
    orders: [],
    isCartOpen : false,
};

const productsSliceDefaultState = {
    products: {
        men: [],
        women: [],
    },
    currentProduct: null,
    isLoading: false,
    isError: false,
    errorMessage: null,
};

const cartReducer = (state = cartReducerDefaultState, action) => {
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

const productsSliceReducer = (state = productsSliceDefaultState, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST_STARTED: {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        }

        case PRODUCT_REQUEST_SUCCESS: {
            return {
                ...state,
                products: action.data,
                isLoading: false,
                isError: false,
            }
        }

        case MEN_PRODUCT_REQUEST_SUCCESS: {
            return {
                ...state,
                products: {
                    ...state.products,
                    men: action.data,
                },
                isLoading: false,
                isError: false,
            }
        }


        case PRODUCT_REQUEST_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.errorMessage
            }
        }

        case CURR_PRODUCT_REQUEST_SUCCESS: {
            return {
                ...state,
                currentProduct: action.data,
                isLoading: false,
                isError: false,
            }
        }

        default: return state;
    }
};

export const rootReducer = combineReducers({
    cart: cartReducer,
    productsSlice: productsSliceReducer,
})