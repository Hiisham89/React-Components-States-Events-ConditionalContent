import { useState } from "react";
import "./ExpenseFrom.css";
const ExpenseForm = (props) => {
  const [ontitle, settitle] = useState("");
  const [onamount, setamount] = useState("");
  const [ondate, setdate] = useState("");

  const titlehandler = (event) => {
    settitle(event.target.value);
  };

  const amounthandler = (event) => {
    setamount(event.target.value);
  };

  const datehandler = (event) => {
    setdate(event.target.value);
  };

  const submithandler = (event) => {
    event.preventDefault();
    const newexpense = {
      title: ontitle,
      amount: onamount,
      data: new Date(ondate),
    };
    props.ontransferexpense(newexpense);
  };

  return (
    <form onSubmit={submithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amounthandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={datehandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
