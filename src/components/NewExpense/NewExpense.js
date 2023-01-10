import React from "react"
import  "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = props => {
    const receiveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData ={
            ...enteredExpenseData,
            id:  Math.random().toString()
        }

        props.enteredDataTexts(expenseData)
    }
    
    return (
     <div className="new-expense">
         <ExpenseForm onSaveExpenseData = {receiveExpenseDataHandler}/> 
     </div>
    )
}

export default NewExpense