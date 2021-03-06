import * as actionTypes from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    qty = Number(qty);
    const { data: { _id, name, imageUrl, price, countInStock } } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            _id,
            name,
            imageUrl,
            price,
            countInStock,
            qty
        }
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
    return name;
}

export const removeFromCart = id => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}