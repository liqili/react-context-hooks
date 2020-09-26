import React from "react";
import {useCounterStore} from "../../store";

export default function CounterView() {
    const [state] = useCounterStore();

    return (
        <p>You clicked {state.count} times</p>
    );
}
