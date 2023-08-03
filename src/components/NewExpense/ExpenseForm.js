import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevents page from refreshing on form submission
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // parses date string and converts it into date object
    };

    onSaveExpenseData(expenseData); // passes object containing states into parent function, passing data upwards
    setEnteredTitle(""); // overrides what the user entered after the form was submitted and clears the input
    setEnteredAmount("");
    setEnteredDate("");
    cancelHandler();
  };

  const cancelHandler = () => {
    setShowExpenseForm(false);
  }

  const addNewExpenseHandler = () => {
    setShowExpenseForm(true);
  }

  if (!showExpenseForm) {
    return (
      <div>
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    )
  }



  // add "add new expense button"
  // collapose form, only show new expense button
  //

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
