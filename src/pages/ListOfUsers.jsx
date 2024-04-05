import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useCalculator } from "../hooks/useCalculator";
import { useNumberFormatter } from "../hooks/useNumberFormatter";

const ListOfUsers = () => {

    const {users, deleteUser} = useContext(UserContext);
    const {totalSalaries} = useCalculator(users, []);
    const {formatNumber} = useNumberFormatter();
  return (
    <div className="w-full h-[65vh] flex flex-col items-center justify-center text-text">
      <h1 className="text-text text-2xl py-4">Lista de usuarios</h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-text text-sm py-4">
          Total de usuarios: {users.length }
          {users.length < 2 ? (<p className="text-red-500">Ingresa al menos dos usuarios para poder ver el balance</p>) : null}
        </span>
        {users.length > 0 ? (
          <ul className="w-[60%]">
            {users.map((user) => (
              <li
                className="flex justify-between items-center border-b py-2"
                key={user.id}
              >
                <span>Nombre: {user.name}</span>
                <span>Salario: ${formatNumber(user.salary*1)}</span>
                <button
                  className="bg-red-500 rounded-full w-10"
                  onClick={() => deleteUser(user.id)}
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
      <div className="w-full flex flex-col items-center py-4">
        <span className="text-text text-2xl py-4">
          Total de salarios: <span className="text-cyan-500">${formatNumber(totalSalaries)}</span>
        </span>
      </div>
    </div>
  )
}

export default ListOfUsers