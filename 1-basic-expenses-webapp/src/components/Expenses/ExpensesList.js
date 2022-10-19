import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
    
    let expensesContent = <p>No expenses found.</p>;

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }
    if (props.items.length > 0) {
      expensesContent = props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))
    };

    return <ul className="expenses-list">
        {expensesContent}   
    </ul>;
}

export default ExpensesList;