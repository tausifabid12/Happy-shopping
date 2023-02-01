import actionTypes from './Actiontypes';
import Cookies from 'js-cookie';

export const initialState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [] },
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let newItem = action.payload;

      const existItem = state.cart.cartItems.find(
        (item) => item.id === newItem.id
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((i) =>
            i.name === existItem.name ? newItem : i
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case actionTypes.REMOVE_FROM_CART: {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
};
