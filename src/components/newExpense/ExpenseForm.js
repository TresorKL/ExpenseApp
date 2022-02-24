import "../newExpense/ExpenseForm.css";
import React, { useState, event } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();
    const allInputs = {
      title: title,
      amount: amount,
      date: new Date(),
    };
    props.onGetFormInput(allInputs);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submissionHandler} className="form">
      <div className="input_">
        <label className="label">Title</label>
        <br />
        <input
          className="input"
          type="text"
          value={title}
          onChange={titleHandler}
        ></input>
      </div>
      <div className="input_">
        <label className="label">Amount</label>
        <br />
        <input
          className="input"
          value={amount}
          onChange={amountHandler}
          type="number"
        ></input>
      </div>
      <div className="input_date">
        <label className="label">Date</label>
        <br />
        <input
          className="input"
          value={date}
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateHandler}
        ></input>
      </div>
      <button className="submit" type="submit">
        <h2>Add Expense</h2>
      </button>
    </form>
  );
};

export default ExpenseForm;
