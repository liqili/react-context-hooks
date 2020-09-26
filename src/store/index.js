import React, {createContext, useContext, useReducer} from "react";
import {CounterReducer} from "../reducers";

export const CounterContext = createContext();

// Create a provider for its descendants to consume and subscribe to changes
export const CounterProvider = props => {
    const [state, dispatch] = useReducer(...CounterReducer);

    return <CounterContext.Provider value={[state, dispatch]} {...props} />;
};
export const useCounterStore = () => useContext(CounterContext);
