
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select'



const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [currencyValue, setCurrency] = useState(currency)

    const options = [
        { value: "$", label: "$ Dollar" },
        { value: '£', label: '£ Pound' },
        { value: '€', label: '€ Euro' },
        { value: '₹', label: '₹ Ruppee"' }
    ]

    const handleCurrency = (val) => {
        setCurrency(val.value)
        dispatch({
            type: "CHG_CURRENCY",
            payload: val.value
        })
    }

    const colourStyles = {
        menu: (styles) => ({ ...styles, backgroundColor: '#93e499', color: "#fff", }),
        dropdownIndicator: (styles) => ({ ...styles, backgroundColor: '#93e499', color: "#fff", }),
        indicatorSeparator: (styles) => ({ ...styles, backgroundColor: '#93e499', color: "#fff", }),
        placeholder: (styles) => ({ ...styles, backgroundColor: '#93e499', color: "#fff", }),
        control: (styles) => {
            return {

                ...styles, 
                backgroundColor: '#93e499', 
                color: "#fff", 
                borderColor: "#93e499",

                ':hover': {
                    backgroundColor: "#93e499"
                },
            }
        },
        option: (styles) => {
            return {
                ...styles,
                backgroundColor: "#93e499",
                color: "#000",
                cursor: 'pointer',
                ':active': {
                    backgroundColor: "#fff"
                },
                ':hover': {
                    backgroundColor: "#fff"
                },
            };
        }
    };

    const getCurrencyLabel = (c) => options.filter(option => option.value === c)[0].label;

    return (
        <div className='alert alert-secondary'>
            <Select
                placeholder={`Currency (${getCurrencyLabel(currencyValue)})`}
                value={`Currency (${getCurrencyLabel(currencyValue)})`}
                styles={colourStyles}
                options={options}
                onChange={handleCurrency}
            />

        </div>
    );
};
export default Currency;