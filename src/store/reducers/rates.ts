import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {baseUrl} from "../../constants/api";


interface Rates {
    loading: boolean,
    error: any,
    rates: any
}

const initialState: Rates = {
    loading: false,
    error: null,
    rates: {},
}

export const fetchRates = createAsyncThunk(
    'rates/fetchRates',
    async (_, thunkAPI) => {
        try {
            const res = await fetch(baseUrl);
            return res.json();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error?.message});
        }
    }
)


export const ratesSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchRates.pending, (state) => {
                state.loading = true;
            });
        builder.addCase(
            fetchRates.fulfilled, (state, {payload}) => {
                console.log(payload.rates)
                state.rates = payload.rates;
                state.loading = false;
            });
        builder.addCase(
            fetchRates.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    }
})


export default ratesSlice.reducer