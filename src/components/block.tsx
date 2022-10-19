import React, {useEffect} from 'react';
import {defaultCurrencies} from "../constants/currency";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {fetchRates} from "../store/slices/rates";
import {setCurrFrom, setCurrTo} from "../store/slices/curr";
import {setPriceFrom, setPriceTo} from "../store/slices/price";

interface BlockProps {
    from: boolean
}

const Block: React.FC<BlockProps> = ({from}) => {
    const dispatch = useDispatch()
    const rates = useSelector((state: RootState) => state.rates.rates);
    const {toPrice, fromPrice} = useSelector((state: RootState) => state.price)
    const {fromCurr, toCurr} = useSelector((state: RootState) => state.curr)


    useEffect(() => {
        // @ts-ignore
        dispatch(fetchRates())
    }, [])


    const handleChangeCurr = (e: React.ChangeEvent<HTMLSelectElement>) => {
        from ? dispatch(setCurrFrom(e.target.value)) : dispatch(setCurrTo(e.target.value))
    }

    const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        from ? dispatch(setPriceFrom(parseInt(e.target.value))) : dispatch(setPriceTo(parseInt(e.target.value)))
    }

    return (
        <div className="block">
            <select
                onChange={(e) => handleChangeCurr(e)}
                value={from ? fromCurr : toCurr}>
                {defaultCurrencies.map((cur) =>
                    (<option
                            key={cur}
                        >
                            {cur}
                        </option>
                    ))}
            </select>
            <input
                onChange={(e) => handleChangePrice(e)}
                value={from ? fromPrice : toPrice}
                type="number"
            />
        </div>
    );
};

export default Block;