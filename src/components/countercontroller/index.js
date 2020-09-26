import React from "react";
import {useCounterStore} from "../../store";
import {increase, decrease} from "../../actions";

export default function CounterController() {
    const [, dispatch] = useCounterStore();

    return (
        <div>
            <button onClick={() => dispatch(increase(1))}>
                Increase me
            </button>
            <button onClick={() => dispatch(decrease(1))}>
                Decrease me
            </button>
        </div>
    );
}
