import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOpedia } from "./../action/actions"

const initalState = { count : 10};

export const counterSlice = createSlice({
    name:"counter",
    initialState:initalState,
    reducers: {
        increment : (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1
        },
        decrementMultiplier: (state, action) => {
            state.count -= Number(action.payload);
        },
        incrementMultiplier: (state, action) => {
            state.count += Number(action.payload);
        },
        // resetCounter: (state) => {
        //     state.count = 10;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(resetReduxOpedia,(state) => {
            state.count = 10;
        });
    },
});

export const {
    increment, 
    decrement,
    incrementMultiplier,
    decrementMultiplier,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;