import { useContext } from "react"
import { ExpenseContext } from "../context/ExpenseContext"

const ListOfExpenses = () => {

    const {expenses, deleteExpense} = useContext(ExpenseContext)
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center text-text">
      <h1 className="text-text text-2xl py-4">Lista de usuarios</h1>
      <div className="w-full h-[10vh] flex flex-col items-center">
        <span className="text-text text-sm py-4">
          Total de usuarios: {expenses.length }
        </span>
        {expenses.length > 0 ? (
          <ul className="w-[60%]">
            {expenses.map((item) => (
              <li
                className="flex justify-between items-center border-b py-2"
                key={item.id}
              >
                <span>Nombre: {item.name}</span>
                <span>Valor: ${item.expense}</span>
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
          <p>No hay usuarios ingresados</p>
        )}

      </div>
    </div>
  )
}

export default ListOfExpenses