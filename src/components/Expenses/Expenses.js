import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const YearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.item.filter((el) => {
    return el.date.getFullYear().toString() === filterYear;
  });

  return (
    // return後要記得用 div包起來
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onSelectYear={YearHandler} />

      <ExpensesList item={filteredExpense} />
    </Card>
  );
};

export default Expenses;

// import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpensesFilter";
// import "./Expenses.css";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         {props.items.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;
