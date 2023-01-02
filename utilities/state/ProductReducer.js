import actionTypes from './Actiontypes';

export const initialState = {
  cart: { cartItems: [] },
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let newItem = action.payload;

      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );

      const cartItems = existItem
        ? state.cart.cartItems.map((i) =>
            i.name === existItem.name ? newItem : i
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      return state;
  }
};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CART_ADD_ITEM': {
//       const newItem = action.payload;
//       const existItem = state.cart.cartItems.find(
//         (item) => item._id === newItem._id
//       );
//       const cartItems = existItem
//         ? state.cart.cartItems.map((item) =>
//             item.name === existItem.name ? newItem : item
//           )
//         : [...state.cart.cartItems, newItem];
//       return { ...state, cart: { ...state.cart, cartItems } };
//     }
//     default:
//       return state;
//   }
// }

// { ...state, car : [...state,cartItems]};
//   switch (action.type) {
//           case actionTypes.ADD_TO_CART:{
//             const  newItem = action.payload,
//             const existItem = state.cart.find(item => item?._id === newItem?._id),
//             const cartItems =
//           }

//       };
