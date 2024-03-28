// MyContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  drink: {},
};

// Create Context
const MyContext = createContext(initialState);

// Actions
const ACTIONS = {
  UPDATE_drink: 'UPDATE_DRINK',
};

// Reducer function
const reducer = (state, action) => {
    console.log(action.payload)
  switch (action.type) {
    case ACTIONS.UPDATE_drink:
      return { ...state, drink: { ...state.drink, ...action.payload } };
    default:
      return state;
  }
};

// Context Provider
export const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => useContext(MyContext);
