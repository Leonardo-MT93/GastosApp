import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const ListOfUsers = () => {

    const {users, deleteUser} = useContext(UserContext)
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center text-text">
      <h1 className="text-text text-2xl py-4">Lista de usuarios</h1>
      <div className="w-full h-[10vh] flex flex-col items-center">
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
                <span>Salario: ${user.salary}</span>
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
    </div>
  )
}

export default ListOfUsers