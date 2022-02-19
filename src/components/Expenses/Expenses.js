import React, { Component, useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setSelectedYear] = useState();
    console.log(props.item);

    const filterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
        console.log(selectedYear);
    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() == filteredYear;
    });
    
    return (
        
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expense={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );

}

export default Expenses;