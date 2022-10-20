import React from 'react';


interface InputProps {
    changePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number
}

const Input: React.FC<InputProps> = ({changePrice, value}) => {
    return (
        <>
            <input
                onChange={(e) => changePrice(e)}
                value={value}
                type="number"
            />
        </>
    );
};

export default Input;