import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ExpenseContext } from "../context/ExpenseContext";
import { useCalculator } from "../hooks/useCalculator";

const BalancePage = () => {

  const { users } = useContext(UserContext);
  const { expenses } = useContext(ExpenseContext);
  const {totalSalaries, totalExpenses, usersWithPercentage} = useCalculator(users, expenses);
  return (
    <div className="text-text w-full flex flex-col items-center">
      <h1 className="text-text text-2xl py-4">Balance</h1>
      <h2 className="text-text text-xl py-4">Salarios totales: <span className="text-cyan-300">${totalSalaries}</span></h2>
      <h2 className="text-text text-xl py-4">Gastos totales: <span className="text-cyan-300">${totalExpenses}</span></h2>
      { usersWithPercentage &&
      usersWithPercentage.map((user) => (
        <div className="w-[50%] flex items-center justify-around" key={user.id}>
          <p>Nombre: {user.name}</p>
          <p>Salario: {user.salary}</p>
          <p>Porcentaje: {user.percentage}</p>
        </div>
      ))}
    </div>
  )
}

export default BalancePage