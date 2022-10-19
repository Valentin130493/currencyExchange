import {configureStore} from '@reduxjs/toolkit'
import ratesSlice from "./reducers/rates";
import currSlice from "./reducers/curr";
import priceSlice from "./reducers/price";


export const store = configureStore({
    reducer: {
        rates: ratesSlice,
        curr: currSlice,
        price: priceSlice
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch