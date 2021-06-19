import React from 'react';
import MyInputForm from './MyInputForm';
import './MyInput.css'

const MyInput = (props) => {

    const saveExpenseDataHandler = (enterExpenseData) => {
        const expenseData = {
                ...enterExpenseData,
                id: Math.random().toString()
            };
            console.log(expenseData);
            props.onAddexpense(expenseData);
        };

    return (
        <div className="inputparentdiv">
            <MyInputForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default MyInput
