import {configureStore} from '@reduxjs/toolkit'
import ratesSlice from "./slices/rates";
import currSlice from "./slices/curr";
import priceSlice from "./slices/price";


export const store = configureStore({
    reducer: {
        rates: ratesSlice,
        curr: currSlice,
        price: priceSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch