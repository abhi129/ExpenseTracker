import React, { Component, useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css';

const ExpenseItems = (props) => {
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle("Updated");
        console.log(title);
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <h2>{title}</h2>
                <div className='expense-item_description'>
                    <div className='expense-item__price'>${props.price}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );
}

export default ExpenseItems;