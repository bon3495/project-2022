import React, { createContext, useContext, useReducer } from 'react';
import { CONTEXT_TYPE } from '~/constants/common-values';
import useLocalStorageState from '~/hooks/useLocalStorageState';

const StateContext = createContext();

const initialState = {
  isShowSideBar: true,
  currentMode: 'Light',
  currentColor: '#FFFFFF',
};

const reducer = (state, { type }) => {
  switch (type) {
    case CONTEXT_TYPE.DARK_MODE:
      return {
        ...state,
        currentMode: CONTEXT_TYPE.DARK_MODE,
        currentColor: '#242731',
      };
    case CONTEXT_TYPE.LIGHT_MODE:
      return {
        ...state,
        currentMode: CONTEXT_TYPE.LIGHT_MODE,
        currentColor: '#FFFFFF',
      };
    default:
      return { ...state };
  }
};

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }} {...props} />;
};

export default ContextProvider;

export const useStateContext = () => {
  const states = useContext(StateContext);
  if (!states) {
    throw new Error('useStateContext must be used within a ContextProvider');
  }
  return states;
};
