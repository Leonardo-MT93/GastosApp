import { useContext, useEffect, useRef, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ExpensePage = () => {
  const [expense, setExpense] = useState("");
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  const {expenses, addExpense, editExpense} = useContext(ExpenseContext);
  const [error, setError] = useState(false);
  const {id} = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const position = query.get("position");

  const expenseInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const expenseToEdit = expenses.find((exp) => exp.id === id);
      if (expenseToEdit) {
        setExpense(expenseToEdit.expense);
        setName(expenseToEdit.name);
      }
    }
  }, [id, expenses]);

  const onSubmit = (e) => {
    e.preventDefault();
    if(expense === 0 || name === "") return setError(true);


    if(id){
      editExpense(id, {expense, name});
      setTimeout(() => {

        setAlert(false);
        navigate("/all-expenses");
      }, 1000);
      
    }else{
      addExpense({
        id: window.crypto.randomUUID(),
        expense,
        name,
      });
    }

    setExpense("");
    setName("");
    setError(false);
    setAlert(true);
    setTimeout(() => {

      setAlert(false);
    }, 1000);

    expenseInputRef.current.focus();
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
          {id ? `Gasto ${position}` : `Gastos ${expenses.length + 1}`}
          </label>
          <input
          ref={expenseInputRef}
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
