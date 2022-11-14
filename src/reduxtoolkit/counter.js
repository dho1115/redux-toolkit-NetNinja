import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 }

export const counterSlice = createSlice({
    name: 'counter', //The name is used to distinguish between different redux stores.
    initialState,
    reducers: {
        increment: state => { state.count += 1 },
        decrement: state => { state.count -= 1 },
        incrementByAmount: (state, action) => { state.count += action.payload }
    }
})

//Action Creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions

console.log({counterSliceReducer: counterSlice.reducer, counterSliceActions: counterSlice.actions});

export default counterSlice.reducer;