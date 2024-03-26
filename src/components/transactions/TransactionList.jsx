import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { AppContext } from "../../context/AppContext";

const TransactionList = () => {
  const {transactions} = useContext(AppContext)
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block">Historial</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
