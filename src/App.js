import React, { Component, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_EXPENSE = [
    {
      id:Math.random().toString(),
      title: "Car Insurance", 
      date: new Date(2020, 2, 28), 
      price: 232.23
  },
  {
    id:Math.random().toString(),
    title: "Toilet", 
    date: new Date(2021, 2, 28), 
    price: 233.23
  },
  {
    id:Math.random().toString(),
    title: "Room", 
    date: new Date(2021, 2, 28), 
    price: 34.34
  },
  {
    id:Math.random().toString(),
    title: "Truck", 
    date: new Date(2021, 2, 28), 
    price: 3434.44
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses]
    });
    console.log("App.js");
    console.log(expense);
  }
  
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
