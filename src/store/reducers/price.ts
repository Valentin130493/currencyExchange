import {createSlice} from "@reduxjs/toolkit";


interface Price {
    fromPrice: number;
    toPrice: number;
}

const initialState: Price = {
    fromPrice: 1,
    toPrice: 1
}


export const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setPriceFrom(state, action) {
            state.fromPrice = action.payload
        },
        setPriceTo(state, action) {
            state.toPrice = action.payload
        }
    },

})

export const {setPriceTo, setPriceFrom} = priceSlice.actions

export default priceSlice.reducer