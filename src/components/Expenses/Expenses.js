import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(props.items);
  // let expensesContent = <p>No connect was found.</p>;

  // if (filterChangeHandler.length > 0) {
  //   expensesContent = filteredExpenses.map((item, index) => (
  //     <ExpenseItem
  //       title={item.title}
  //       amount={item.amount}
  //       date={item.date}
  //       key={item.id}
  //       // key={index}
  //     />
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {expensesContent} */}
      {filteredExpenses.length === 0 ? (
        <p>No Expenses found</p>
      ) : (
        filteredExpenses.map((item, index) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
            // key={index}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
