import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"
import { useCalculator } from "../hooks/useCalculator"
import { useNumberFormatter } from "../hooks/useNumberFormatter";

const ListOfExpenses = () => {

    const {expenses, deleteExpense} = useContext(ExpenseContext);
    const {totalExpenses} = useCalculator([], expenses);
    const {formatNumber} = useNumberFormatter();
  return (
    <div className="w-full h-[65vh] flex flex-col items-center justify-center text-text">
      <h1 className="text-text text-2xl py-4">Lista de gastos</h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-text text-sm py-4">
          Cantidad de gastos ingresados: {expenses.length }
        </span>
        {expenses.length > 0 ? (
          <ul className="w-[60%]">
            {expenses.map((item) => (
              <li
                className="flex justify-between items-center border-b py-2"
                key={item.id}
              >
                <span>Nombre: {item.name}</span>
                <span>Valor: ${formatNumber(item.expense*1)}</span>
                <button
                  className="bg-red-500 rounded-full w-10"
                  onClick={() => deleteExpense(item.id)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay ingresos realizados</p>
        )}

      </div>
      <div className="w-full flex flex-col items-center py-4">
        <span className="text-text text-2xl py-4">
          Total de gastos: <span className="text-cyan-500">${formatNumber(totalExpenses)}</span>
        </span>
      </div>
    </div>
  )
}

export default ListOfExpenses