import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const isCorrectYear = (item) => {
    return item.date.getFullYear().toString() === filteredYear;
  };

  const ExpenseFilterHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(isCorrectYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterUpdate={ExpenseFilterHandler}
        />
        <ExpensesChart 
        expenses={filteredExpenses}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
