import "./ExpenseFilter.css";
import React from "react";

const ExpenseFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onFilterYearHandler(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="filter">
      <div>
        <label className="filterlabel">Expense per Year</label>
        <select
          className="dropdown"
          value={props.selected}
          onChange={dropdownHandler}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
