import React from "react";
import {useCounterStore} from "../../store";

export default function CounterView() {
    const [count] = useCounterStore();

    return (
        <p>You clicked {count} times</p>
    );
}
