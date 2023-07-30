import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css" 

export default function NewExpense({onNewExpenseData}) {

    const saveExpenseDataHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense, 
            id: Math.random().toString()
        };
        onNewExpenseData(expenseData); 
    }

    

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );



};