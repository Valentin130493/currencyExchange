import React, {useEffect, useRef, useState} from 'react';
import {defaultCurrencies} from "./constants/currency";

import './App.css';
import {fetchData} from "./utils/fetchData";


function App() {
    const [fromCurrency, setFromCurrency] = useState("UAH")
    const [toCurrency, setToCurrency] = useState("UAH")
    const [fromPrice, setFromPrice] = useState(1)
    const [toPrice, setToPrice] = useState(1)

    const ratesRef = useRef({});

    useEffect(() => {
        fetchData().then(({rates}) => {
            ratesRef.current = rates
            onChangeToPrice(1)
        })

    }, [])

    const onChangeFromPrice = (value) => {
        console.log(value, "1")
        const price = value / ratesRef.current[fromCurrency];
        const result = (price * ratesRef.current[toCurrency]).toFixed(2);
        setFromPrice(value);
        setToPrice((prev) => result);
    }

    const onChangeToPrice = (value) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency] * value).toFixed(3)
        setFromPrice((prev) => result);
        setToPrice(value);
    }

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency])

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrency])

    return (
        <div className="App">
            <div className="block">
                <select onChange={(e) => setFromCurrency(e.target.value)}>
                    {defaultCurrencies.map((cur) =>
                        (<option
                                key={cur}
                            >
                                {cur}
                            </option>
                        ))}
                </select>
                <input
                    onChange={(e) => onChangeFromPrice(parseInt(e.target.value))}
                    value={fromPrice}
                    type="number"
                />
            </div>
            <div className="block">
                <select onChange={(e) => setToCurrency(e.target.value)}>
                    {defaultCurrencies.map((cur) =>
                        (<option
                                key={cur}
                            >
                                {cur}
                            </option>
                        ))}
                </select>
                <input
                    onChange={(e) => onChangeToPrice(parseInt(e.target.value))}
                    value={toPrice}
                    type="number"
                />
            </div>
        </div>
    );
}

export default App;
