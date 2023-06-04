import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const intital_expensitem = [
  { id: "e1", title: "washing", amount: "233", data: new Date(2022, 1, 33) },
  { id: "e2", title: "Cartools", amount: "433", data: new Date(2021, 1, 33) },
  { id: "e3", title: "Cleaning", amount: "133", data: new Date(2022, 1, 33) },
];

function App() {
 
 const [expenseitem,setexpenseitem] = useState(intital_expensitem);

  const finalsaveexpense = (finalexpense) =>{
    const finalExpense = {...finalexpense, id : Math.random().toString()};
    setexpenseitem([finalExpense,...expenseitem]);
  }
  return (
    <div>
      <NewExpense onfinalsaveexpense={finalsaveexpense}/>
      <Expenses items={expenseitem}/>
    </div>
  );
}

export default App;
