import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses(props) {
  const [expenseYear, setExpenseYear] = useState("2020");

  // let filterInfoText = "2019, 2021, 2022";

  // if (expenseYear === "2019") {
  //   filterInfoText = "2020, 2021, 2022";
  // } else if (expenseYear === "2020") {
  //   filterInfoText = "2019, 2021, 2022";
  // } else if (expenseYear === "2021") {
  //   filterInfoText = "2019, 2020, 2022";
  // } else {
  //   filterInfoText = "2019, 2020, 2021";
  // }

  const filterHandler = (year) => {
    setExpenseYear(year);
  };

  // useEffect(() => {
  //   console.log("From expenses.js:");
  //   console.log(expenseYear);
  // }, [expenseYear]);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter handler={filterHandler} selectedYear={expenseYear}/>
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}
