import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

// @todo: react/prop-types
// eslint-disable-next-line react/prop-types
export const StateProvider = ({ reducer, initialState, children }) => (
  // https://www.w3schools.com/react/react_usereducer.asp
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
