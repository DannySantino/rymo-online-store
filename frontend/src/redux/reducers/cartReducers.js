import * as actionTypes from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const foundItem = state.cartItems.find(e => e._id === item._id);
            if (foundItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(e => e._id === foundItem._id ? item : e)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(e => e._id !== action.payload)
            }
        default:
            return state;
    }
}