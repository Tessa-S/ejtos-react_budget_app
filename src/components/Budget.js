import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { totalExpenses } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
    const MAX_BUDGET = 20000
    const handleBudgetChange = (event) => { 
        var b = event.target.value;
        var spending = totalExpenses;

        console.log("Current Expenses: " + spending + "\n")

        if (b <= MAX_BUDGET && b >= spending) {
            setNewBudget(b);
        }
        else if (b < spending) {
            alert("You cannot reduce the budget value lower then the spending");
        }
        else if (b > MAX_BUDGET) {
            alert("The value cannot exceed $20000");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

