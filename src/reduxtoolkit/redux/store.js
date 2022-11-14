import { configureStore } from "@reduxjs/toolkit";

//For now, we will only have 1 store designed to hold the count.
const store = configureStore({
    reducer: {}
})

export default store;