import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        showFormHandler();
    };

    const showFormHandler = () => {
        setShowForm((prevShow) => !prevShow);
    }

    let NewExpenseForm = <button onClick={showFormHandler}>Add New Expense</button>;

    if (showForm)
    {
        NewExpenseForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={showFormHandler}/>
    }

    return <div className="new-expense">
        {NewExpenseForm}
    </div>
};

export default NewExpense;