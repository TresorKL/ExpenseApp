import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setPrice] = useState(props.amount);
  const [date, setDate] = useState(props.date);

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">
        <h1 className="expense-item__price__txt">${amount}</h1>
      </div>
    </div>
  );
}

export default ExpenseItem;
