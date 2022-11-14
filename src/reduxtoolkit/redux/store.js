import { configureStore } from "@reduxjs/toolkit";

//Reducers.
import counterReducer from "../counter"; //This was the export default counterSlice.reducer.

//For now, we will only have 1 store designed to hold the count.

//Any reducer that you create should be added to the store below so it will be made available to all the components.
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store;