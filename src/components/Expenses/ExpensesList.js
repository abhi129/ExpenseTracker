import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return (
        <h2 className='expenses-list__fallback'>No Item Found</h2>
        );       
    }

    return (
        <ul className="expense-list">
            expenseContent = props.items.map(expense => <ExpenseItems 
            key={props.items.id}
            title={props.items.title} 
            date={props.items.date} 
            price={props.items.price}/>);
        </ul>
    );

}

export default ExpensesList;