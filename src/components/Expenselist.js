import "./Expenselist.css";
import Expenseitem from "./Expenseitem";
const Expenselist = (props) => {
  let expensefilter = (
    <h1 className="expenses-list__fallback">No Expense found</h1>
  );
  if (props.items.length > 0) {
    expensefilter = props.items.map((expense) => (
      <Expenseitem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        data={expense.data}
      />
    ));
  }

  return <ul className="expenses-list">{expensefilter}</ul>;
};
export default Expenselist;
