import React from 'react'
import { useSelector } from 'react-redux'

const CounterFunc = () => {
    const counter = useSelector(state => state.counter);
    const multi = useSelector(state=>state.multi);
    return (
        <div>
            <h4>{counter}</h4>
            <h5>{multi}</h5>
        </div>
    )
}

export default CounterFunc;
