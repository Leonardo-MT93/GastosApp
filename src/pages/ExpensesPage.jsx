import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpensePage = () => {
  const [expense, setExpense] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  const {expenses, addExpense} = useContext(ExpenseContext);
  const [error, setError] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if(expense === 0 || name === "") return setError(true);
    addExpense({
      id: window.crypto.randomUUID(),
      expense,
      name,
    });

    setExpense("");
    setName("");
    setError(false);
    setAlert(true);
    setTimeout(() => {

      setAlert(false);
    }, 1000);
  };

  return (
    <div className="w-full h-[65vh] flex flex-col items-center justify-center">
      <h1 className="text-text text-2xl py-4">Ingresar gastos </h1>
      <form
        className="w-[80%] h-[40vh] flex items-center justify-center"
        onSubmit={onSubmit}
      >
        <div className="w-[70%] h-24 flex items-center justify-center border border-yellow-200">
          <label className="text-text px-3 text-center " htmlFor="name">
            Gastos {expenses.length + 1}
          </label>
          <input
            className="bg-zinc-600 text-white px-3 py-2 rounded-xl w-[15vw]  mx-2"
            type="text"
            placeholder="Ingresa el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-zinc-600 text-white px-3 py-2 rounded-xl w-[15vw]  mx-2"
            type="number"
            placeholder="Ingresa el monto del gasto"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
          <button
            type="submit"
            className="bg-buttons  hover:bg-buttons-hover text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border hover:border-buttons-hover rounded"
          >
            +
          </button>
        </div>
      </form>
      <div className="w-full h-[10vh] flex flex-col items-center">
        <span className="text-text text-sm py-4">
          Total de gastos ingresados: {expenses.length}
        </span>
        {alert && (
          <span className="text-green-500 text-sm py-4">
            El gasto fue ingresado correctamente
          </span>
        )}
                {error && (
          <span className="text-red-500 text-sm py-4">
            Por favor ingrese un gasto y el monto correspondiente
          </span>
        )}
      </div>
    </div>
  );
};

export default ExpensePage;
