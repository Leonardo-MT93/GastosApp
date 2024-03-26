import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionItem = ({ transaction }) => {
  const {deleteTransaction} = useContext(AppContext)
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm ">{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button className="bg-red-600 rounded-full p-2 m-4 " onClick={() => deleteTransaction(transaction.id)}>X</button>
      </div>
    </li>
  );
};

export default TransactionItem;
