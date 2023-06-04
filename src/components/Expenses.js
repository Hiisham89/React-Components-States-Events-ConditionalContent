import { useState } from "react";
import Card from "./Card";
import Expensefilter from "./Expensefilter";
import Expenseitem from "./Expenseitem";
import "./Expenses.css";
import Expenselist from "./Expenselist";

const Expenses = (props) => {
  const [currentyear, setyear] = useState("2020");
  
  const getyear = (year) => {
    setyear(year);
  };
  const filteredexpense = props.items.filter(expense => {
   return expense.data.getFullYear().toString() === currentyear;
  });

  
  return (
    <Card className="expenses">
      <Expensefilter selected={currentyear} onChangeFilter={getyear} />
      <Expenselist items={filteredexpense}/>
    </Card>
  );
};
export default Expenses;
