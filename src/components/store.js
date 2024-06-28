
import {createStore} from "redux";
import {omit} from "lodash";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}
function cartReducer(state={items:{}},action) {
    switch(action.type) {
        case "ADD_TO_CART": {
            const products = action.payload;
            if(state.items[products.id]) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [products.id]: {
                            ...state.items[products.id],
                            quantity: state.items[products.id].quantity + 1
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [products.id]: {
                            ...products,
                            quantity: 1
                        }
                    }
                
                }
            }
        }
        case "REMOVE_FROM_CART": {
            const products = action.payload;
            if(state.items[products.id].quantity > 1) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [products.id]: {
                            ...state.items[products.id],
                            quantity: state.items[products.id].quantity - 1
                        }
                    }
                }
            }
            else {
                return {
                    ...state,
                    items: omit(state.items, products.id)
                }
            }
        }
        default: return state;
    }
}
const store = createStore(cartReducer);
export default store;
//action is an object that has two keys - type and payload(products in our case)