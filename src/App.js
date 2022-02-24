import logo from "./logo.svg";
//import ExpenseIterm from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
import NewExpense from "./components/newExpense/NewExpense.js";
import React, { useState } from "react";
import "./App.css";
const UNITIAL_EXPENSES = [
  {
    id: 1,
    title: "Car assurance",
    amount: 450,
    date: new Date(2020, 2, 28),
  },
  {
    id: 2,
    title: "Health care",
    amount: 600,
    date: new Date(2021, 7, 2),
  },
  {
    id: 3,
    title: "School fees",
    amount: 230,
    date: new Date(2019, 4, 12),
  },
  {
    id: 4,
    title: "Housing",
    amount: 230.5,
    date: new Date(2020, 6, 3),
  },
  {
    id: 5,
    title: "School fees",
    amount: 504,
    date: new Date(2020, 2, 1),
  },
];

function App() {
  const [expensesData, setExpensesData] = useState(UNITIAL_EXPENSES);
  const addNewExpenseData = (expense) => {
    setExpensesData((preExpenseData) => {
      return [expense, ...preExpenseData];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addNewExpenseData} />
      <Expenses expensesData={expensesData} />
    </div>
  );
}

export default App;
