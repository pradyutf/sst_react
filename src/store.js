import {createStore} from "redux";
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
        }
        default: return state;
    }
}
const store = createStore(cartReducer);
export default store;
//action is an object that has two keys - type and payload(products in our case)