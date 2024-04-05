import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ExpenseContext } from "../context/ExpenseContext";

const HomePage = () => {
  const { users, deleteAllUsers } = useContext(UserContext);
  const {expenses, deleteAllExpenses} = useContext(ExpenseContext);
  const isDataEmpty = !(users && users.length > 1);
  const isExpensesEmpty = !(expenses && expenses.length > 0);
  const deleteUsers = () => { 
    deleteAllExpenses();
    deleteAllUsers();
  }

  return (
    <div className="w-full flex flex-col items-center justify-center  h-[65vh]">
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
        <button
          to="/"
          className={`bg-red-600 text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border rounded ${
            isDataEmpty
              ? " opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}       
          onClick={deleteUsers}>
          Reiniciar datos
        </button>
      </div>
    </div>
  );
};

export default HomePage;
