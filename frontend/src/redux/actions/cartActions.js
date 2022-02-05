import * as actionTypes from '../constants/cartConstants'
import { axios } from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data: { _id: id, name, imageUrl, price, countInStock } } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id,
            name,
            imageUrl,
            price,
            countInStock,
            qty
        }
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = id => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}