import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const getexpense = (newExpense) => {
    const thisExpense = { ...newExpense, id: Math.random().toString() };
    props.onfinalsaveexpense(thisExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm ontransferexpense={getexpense} />
    </div>
  );
};
export default NewExpense;