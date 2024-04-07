import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { increment,decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
    const counts = useSelector((state) => state.counter.count);
    const dispatcher = useDispatch();
    const [incrementAmount, setIncAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll =() => {
        setIncAmount(0);
        dispatcher(reset());
    }
  return (
    <section>
        <p>{counts}</p>
        <button onClick={()=> dispatcher(increment())}>+</button>
        <button onClick={()=>dispatcher(decrement())}>-</button>
        <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncAmount(e.target.value)}
            />
        <div>
                <button onClick={() => dispatcher(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
    </section>
  )
}

export default Counter