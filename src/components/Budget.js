
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses,currency } = useContext(AppContext);
    const [budgetValue, setBudgetValue] = useState(budget)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChange = (val) => {
        if(val>20000) {
            alert('The upper limit value is 20,000')
            return;
        }

        if (val > totalExpenses) {
            setBudgetValue(val)
            dispatch({
                type: 'SET_BUDGET',
                payload: budgetValue,
            });
        } else {
            alert('The budget is lower than the spending')
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}<input step="10" max="20000" value={budgetValue} type="number" onChange={(e) => handleChange(e.target.value)} /></span>
        </div>
    );
};
export default Budget;