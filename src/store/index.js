import React, {useState, createContext, useContext} from "react";

export const CounterContext = createContext();

// Create a provider for its descendants to consume and subscribe to changes
export const CounterProvider = props => {
    const [count, setCount] = useState(0);

    return <CounterContext.Provider value={[count, setCount]} {...props} />;
};
export const useCounterStore = () => useContext(CounterContext);
