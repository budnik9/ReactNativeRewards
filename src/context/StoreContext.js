import React, {useReducer} from 'react';

import reducer, {INITIAL_STATE} from '../reducer';

export const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <StoreContext.Provider value={{state, dispatch}}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
