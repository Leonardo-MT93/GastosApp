import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ExpenseContext } from "../context/ExpenseContext";

const HomePage = () => {
  const { users } = useContext(UserContext);
  const {expenses} = useContext(ExpenseContext);
  const isDataEmpty = !(users && users.length > 1);
  const isExpensesEmpty = !(expenses && expenses.length > 1);
  return (
    <div className="w-full flex flex-col items-center justify-center border border-red-800 h-[70vh]">
      <h1>HomePage</h1>
      <div className="w-full flex flex-col items-center justify-evenly h-[60vh]">
        <Link
          to="/users"
          className="bg-buttons  hover:bg-buttons-hover text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border hover:border-buttons-hover rounded"
        >
          Ingresar usuarios
        </Link>
        <Link
          to="/expense"
          className={`bg-buttons text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border rounded ${
            isDataEmpty
              ? " opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
        >
          Ingresar Gastos
        </Link>
        <Link
          to="/balance"
          className={`bg-buttons text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border rounded ${
            (isExpensesEmpty || isDataEmpty)
              ? " opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}        >
          Ver Balance
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
