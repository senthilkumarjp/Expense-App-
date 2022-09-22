import "./App1.css";
import ExpenseItem from "./ExpenseItem";

function App1() {
  const expenses = [
    {
      title: "car insuranse",
      Amount: 2000,
      date: new Date(),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        Amount={expenses[0].Amount}
        date={expenses[0].date}
      ></ExpenseItem>
      {/* <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem> */}
    </div>
  );
}

export default App1;
