import React from "react";
import "../newExpense/NewExpense.css";
import ExpenseForm from "../newExpense/ExpenseForm";
const NewExpense = (props) => {
  const getFormInput = (allInputs) => {
    const items = {
      ...allInputs,
      id: Math.floor(Math.random() * (10 - 5 + 1) + 5),
    };
    props.onAddExpense(items);
  };
  return (
    <div>
      <ExpenseForm onGetFormInput={getFormInput} />
    </div>
  );
};

export default NewExpense;
