import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const FilterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log("expenses " + filterYear);
  };

  const filterExpenses = props.expensesData.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div className="_expenses">
      <ExpenseFilter
        selected={filterYear}
        onFilterYearHandler={FilterYearHandler}
      />
      {filterExpenses.length === 0 ? (
        <p className="warning">NO EXPENSE FOUND</p>
      ) : (
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
      ;
    </div>
  );
}
export default Expenses;
