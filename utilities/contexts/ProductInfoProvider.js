import React, { createContext, useReducer } from 'react';
import { initialState, productReducer } from '../state/ProductReducer';

export const ProductContext = createContext();

const ProductInfoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const value = { state, dispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductInfoProvider;
