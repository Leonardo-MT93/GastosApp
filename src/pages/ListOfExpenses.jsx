import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"
import { useCalculator } from "../hooks/useCalculator"
import { useNumberFormatter } from "../hooks/useNumberFormatter";
import { Link } from "react-router-dom";

const ListOfExpenses = () => {

    const {expenses, deleteExpense} = useContext(ExpenseContext);
    const {totalExpenses} = useCalculator([], expenses);
    const {formatNumber} = useNumberFormatter();
  return (
    <div className="w-full h-[65vh] flex flex-col items-center justify-center text-text">
      <h1 className="text-text text-2xl py-4">Lista de gastos</h1>
      <div className="w-full flex flex-col items-center overflow-auto max-h-max border border-yellow-100">
        <span className="text-text text-sm py-4">
          Cantidad de gastos ingresados: {expenses.length }
        </span>

<table className="table-auto w-[70%] border border-yellow-100">
      <thead>
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Nombre</th>
          <th className="px-4 py-2">Valor</th>
          <th className="px-4 py-2">Acción</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((item, index) => (
            <tr key={item.id}>
              <td className="border px-4 py-2 text-center w-16">{index + 1}</td>
              <td className="border px-4 py-2 text-center w-[40%] ">{item.name}</td>
              <td className="border px-4 py-2 text-center w-[30%]">${formatNumber(item.expense)}</td>
              <td className="border px-4 py-2 text-center flex justify-around">
                <Link
                  to={`/edit-expense/${item.id}?position=${index + 1}`}
                  className="bg-blue-500  w-24 rounded-full text-center"
                >
                  Editar
                </Link>
                <button
                  className="bg-red-500 rounded-full w-10"
                  onClick={() => deleteExpense(item.id)}
                >
                  x
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="border px-4 py-2 text-center">
              No hay ingresos realizados
            </td>
          </tr>
        )}
      </tbody>
    </table>
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