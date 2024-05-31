import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useCalculator } from "../hooks/useCalculator";
import { useNumberFormatter } from "../hooks/useNumberFormatter";

const ListOfUsers = () => {
  const { users, deleteUser } = useContext(UserContext);
  const { totalSalaries } = useCalculator(users, []);
  const { formatNumber } = useNumberFormatter();
  return (
    <div className="w-full h-[65vh] flex flex-col items-center justify-center text-text">
      <h1 className="text-text text-2xl py-4">Lista de usuarios</h1>
      <div className="w-full flex flex-col items-center">
        <span className="text-text text-sm py-4">
          Total de usuarios: {users.length}
          {users.length < 2 ? (
            <p className="text-red-500">
              Ingresa al menos dos usuarios para poder ver el balance
            </p>
          ) : null}
        </span>

        <table className="table-auto w-[60%] border border-yellow-100">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Salario</th>
              <th className="px-4 py-2">Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2 text-center w-16">
                    {index + 1}
                  </td>
                  <td className="border px-4 py-2 text-center w-[40%]">
                    {user.name}
                  </td>
                  <td className="border px-4 py-2 text-center w-[30%]">
                    ${formatNumber(user.salary)}
                  </td>
                  <td className="border px-4 py-2 text-center flex justify-around">
                    <button
                      className="bg-red-500 rounded-full w-10"
                      onClick={() => deleteUser(user.id)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border px-4 py-2 text-center">
                  No hay usuarios ingresados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="w-full flex flex-col items-center py-4">
        <span className="text-text text-2xl py-4">
          Total de salarios:{" "}
          <span className="text-cyan-500">${formatNumber(totalSalaries)}</span>
        </span>
      </div>
    </div>
  );
};

export default ListOfUsers;
