import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "../../interfaces";


const initialState: CounterState = {
    value: 0,
};
const CounterReducer = createSlice({
    name: "counter", initialState, reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        },
    }
})

export const { increment, decrement, reset } = CounterReducer.actions;
export default CounterReducer.reducer