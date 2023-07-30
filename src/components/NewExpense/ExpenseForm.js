import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value); 
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault(); // prevents page from refreshing on form submission
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate) // parses date string and converts it into date object
    };

    setEnteredTitle(""); // overrides what the user entered after the form was submitted and clears the input
    setEnteredAmount("");
    setEnteredDate(""); 
    console.log(expenseData);
  }

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value); 
  // };

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value); 
  // };

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value); 
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" value={enteredTitle} onChange={event => inputChangeHandler("title", event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={event => inputChangeHandler("amount", event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={event => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
