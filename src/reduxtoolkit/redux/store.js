import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter";

//For now, we will only have 1 store designed to hold the count.
const store = configureStore({
    reducer: {
        counterReducer //This was the export default counterSlice.reducer.
    }
})

export default store;