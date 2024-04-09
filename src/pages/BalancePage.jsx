import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ExpenseContext } from "../context/ExpenseContext";
import { useCalculator } from "../hooks/useCalculator";
import { useNumberFormatter } from "../hooks/useNumberFormatter";

const BalancePage = () => {
  const { users } = useContext(UserContext);
  const { expenses } = useContext(ExpenseContext);
  const { totalSalaries, totalExpenses, usersWithPercentage } = useCalculator(
    users,
    expenses
  );
  const { formatNumber } = useNumberFormatter();

  return (
    <div className="w-full h-[65vh] flex flex-col items-center justify-center text-text">
      <h1 className="text-text text-2xl py-4">Balance</h1>

      <div className="w-[70%] flex flex-col items-center justify-around border border-yellow-200 py-4">
        <h2 className="text-text text-xl">Porcentaje por usuario:</h2>
        {usersWithPercentage && totalExpenses < totalSalaries ? (
          usersWithPercentage.map((user) => (
            <div
              className="w-full flex items-center justify-around my-1"
              key={user.id}
            >
              <p>
                Nombre: <span className="text-green-300">{user.name}</span>
              </p>
              <p>
                Salario:{" "}
                <span className="text-green-300">
                  ${formatNumber(user.salary * 1)}
                </span>
              </p>
              <p>
                Porcentaje:{" "}
                <span className="text-green-300">
                  {((user.percentage * 1) / 100).toFixed(4)} %
                </span>
              </p>
              <p>
                Monto: ${" "}
                <span className="text-green-500 border-b border-b-green-400  font-bold">
                  {formatNumber(
                    ((user.percentage * 1) / 100).toFixed(4) * totalExpenses
                  )}
                </span>{" "}
                <span className="text-cyan-300"> ({user.name})</span>
              </p>
              <button className="bg-buttons  hover:bg-buttons-hover text-buttons-text font-bold p-2 border-b-4 border-b-buttons-border hover:border-buttons-hover rounded">
                Agregar adicional
              </button>
            </div>
          ))
        ) : (
          <p className="text-red-500">
            No se puede calcular el balance porque los salarios son menores a
            los gastos ingresados
          </p>
        )}
      </div>
      <h2 className="text-text text-xl py-4">
        Salarios totales:{" "}
        <span
          className={`${
            totalSalaries < totalExpenses
              ? " text-red-500 border-b border-red-400"
              : "text-cyan-500"
          }`}
        >
          ${formatNumber(totalSalaries)}
        </span>
      </h2>
      <h2 className="text-text text-xl py-4">
        Gastos totales:{" "}
        <span className="text-cyan-300">${formatNumber(totalExpenses)}</span>
      </h2>
    </div>
  );
};

export default BalancePage;
