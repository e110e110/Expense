// import React from "react";
// import ExpenseForm from "./ExpenseForm";
// import "./NewExpense.css";

// const NewExpense = (props) => {
//   const SaveDataHandler = (enteredExpense) => {
//     const expenseData = {
//       ...enteredExpense,
//       id: Math.random().toString(),
//     };
//     props.onAddExpense(expenseData);
//   };
//   return (
//     <div className="new-expense">
//       <ExpenseForm onSaveData={SaveDataHandler} />
//     </div>
//   );
// };

// export default NewExpense;

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = (event) => {
    setShowForm(true);
  };

  const noFormHandler = (event) => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={showFormHandler}>
          Add Expense
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={noFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
