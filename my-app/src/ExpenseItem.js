import "./ExpenseItem.css";

function ExpenseItem(props) {
//   const expname = "Car";
//   const dates = new Date(2021, 2, 28);
const date =props.date.toLocaleString('en-US', { month: 'long'});

  return (
    <div className="head">
      <h2>sample</h2>
      {/* <h3>{date}</h3> */}
     <div>{date}</div> 
      <div>year</div>
      <div>day</div> 
      <h3>{props.title}</h3>
      <h3>{props.Amount}</h3>
    </div>
  );
}

export default ExpenseItem;
