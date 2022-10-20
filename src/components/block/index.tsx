import React, {useEffect} from 'react';
import {defaultCurrencies} from "../../constants/currency";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {fetchRates} from "../../store/slices/rates";

import Input from "../input";
import {setCurrFrom, setCurrTo} from "../../store/slices/curr";
import {setPriceFrom, setPriceTo} from "../../store/slices/price";

interface BlockProps {
    from: boolean
}

export const Block: React.FC<BlockProps> = ({from}) => {
    const dispatch = useDispatch()
    const {loading, rates} = useSelector((state: RootState) => state.rates);
    const {fromPrice, toPrice} = useSelector((state: RootState) => state.price)
    const {fromCurr, toCurr} = useSelector((state: RootState) => state.curr)


    useEffect(() => {
        // @ts-ignore
        dispatch(fetchRates())
    }, [])

    useEffect(() => {
        handleChangeFromPrice(fromPrice)
    }, [fromCurr])

    useEffect(() => {
        handleChangeToPrice(toPrice)
    }, [toCurr])


    const handleChangeCurr = (value: string) => {
        from ? dispatch(setCurrFrom(value)) : dispatch(setCurrTo(value))
    }

    const handleChangeFromPrice = (value: number = 1) => {
        const price = value / rates[fromCurr];
        const result: string = (price * rates[toCurr]).toFixed(1);
        dispatch(setPriceFrom(value))
        dispatch(setPriceTo(parseInt(result)))
    }

    const handleChangeToPrice = (value: number) => {
        const result: string = (rates[fromCurr] / rates[toCurr] * value).toFixed(1)
        dispatch(setPriceFrom(parseInt(result)))
        dispatch(setPriceTo(value))
    }

    return (

        loading ? <p>Data is loading...</p> :
            <div className="block">
                <select
                    onChange={(e) => handleChangeCurr(e.target.value)}
                    value={from ? fromCurr : toCurr}>
                    {defaultCurrencies.map((cur) =>
                        (<option
                                key={cur}
                            >
                                {cur}
                            </option>
                        ))}
                </select>
                <Input
                    changePrice={(e) => from ? handleChangeFromPrice(parseInt(e.target.value)) : handleChangeToPrice(parseInt(e.target.value))}
                    value={from ? fromPrice : toPrice}/>
            </div>

    );
};

