import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const expenseDate = new Date(2021, 9, 1);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // const month = props.date.toLocaleString('en-US',{month: 'long'});
  // const day = props.date.toLocaleString('en-US',{day:'2-digit'});
  // const year = props.date.getFullYear();

  // const clickHandler = () => {
  //   setTitle("Updated!");

  //   console.log("Click Me...");
  // };
  return (
    <li>
      <Card className="expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
