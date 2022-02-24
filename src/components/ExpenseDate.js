import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date?.toLocaleString("en-US", { month: "long" }) || "";
  const day = props.date?.toLocaleString("en-US", { day: "2-digit" }) || "";
  const year = props.date?.getFullYear() || "";

  return (
    <div className="expense-item__date">
      <div className="expense-item__date__divs">{month}</div>
      <div className="expense-item__date__divs">{day}</div>
      <div className="expense-item__date__divs">{year}</div>
    </div>
  );
}

export default ExpenseDate;
