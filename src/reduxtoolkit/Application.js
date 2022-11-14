import React from 'react';
import { useSelector } from 'react-redux';

import '../App.css'
import '../index.css'

const Application = () => {
    //https://www.youtube.com/watch?v=iBUJVy8phqw
    //15:51

    //useSelector is similar to mapStateToProps where we get the state (or a certain part of it).
    const { count } = useSelector(state => state.counter);

    return (
        <div>
            <h1>Redux Tutorial (with Redux Toolkit)</h1>
            <h3>The Net Ninja.</h3>
            <div className='App'>
                <h1>The count is: { JSON.stringify(count) }.</h1>
                <button onClick={() => {}}>INCREMENT.</button>
                <button onClick={() => {}}>DECREMENT.</button>
            </div>
        </div>
    )
}

export default Application
