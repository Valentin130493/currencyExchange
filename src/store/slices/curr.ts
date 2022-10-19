import {createSlice} from "@reduxjs/toolkit";


interface Curr {
    fromCurr: string;
    toCurr: string;
}

const initialState: Curr = {
    fromCurr: "UAH",
    toCurr: "UAH"
}


export const currSlice = createSlice({
    name: 'curr',
    initialState,
    reducers: {
        setCurrFrom(state, action) {
            state.fromCurr = action.payload
        },
        setCurrTo(state, action) {
            state.toCurr = action.payload
        }
    },

})

export const {setCurrTo, setCurrFrom} = currSlice.actions
export default currSlice.reducer