
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const currencyList = ["$ Dollar", "£ Pound", "€ Euro", "₹ Ruppee"];

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [currencyValue, setCurrency] = useState(currencyList.filter(c => c.includes(currency)))

    const handleCurrency = (val) => {
        setCurrency(val)
        dispatch({
            type: "CHG_CURRENCY",
            payload: val.split(' ')[0]
        })
    }

    return (
        <div className='alert alert-secondary'>
            Currency ({currencyValue})
            <select className="form-select currency"
                value={currencyValue}
                onChange={(event) => handleCurrency(event.target.value)}>
                {currencyList.map(c => (<option style={{ backgroundColor: "#93e499" }} value={c} name={c}>{c}</option>))}
            </select>
        </div>
    );
};
export default Currency;