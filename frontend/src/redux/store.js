import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { cartReducer } from './reducers/cartReducers';
import { getItemReducer, getProductsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getItem: getItemReducer
});

const middleware = [thunk];

const cartCache = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const INITIAL_STATE = {
    cart: {
        cartItems: cartCache
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;