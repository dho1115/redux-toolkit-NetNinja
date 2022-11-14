import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../App.css'
import '../index.css'
import { decrement, increment, incrementByAmount } from './counter';

const Application = () => {
    //https://www.youtube.com/watch?v=iBUJVy8phqw
    //16:03

    //useSelector is similar to mapStateToProps where we get the state (or a certain part of it).
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();
    //To call an action: dispatch(action());
    return (
        <div>
            <h1>Redux Tutorial (with Redux Toolkit)</h1>
            <h3>The Net Ninja.</h3>
            <div className='App'>
                <h1>The count is: { JSON.stringify(count) }.</h1>
                <button onClick={() => dispatch(increment())}>INCREMENT.</button>
                <button onClick={() => dispatch(decrement())}>DECREMENT.</button>
                <button onClick={() => dispatch(incrementByAmount(3))}>INCREMENT BY 3.</button>
            </div>
        </div>
    )
}

export default Application
