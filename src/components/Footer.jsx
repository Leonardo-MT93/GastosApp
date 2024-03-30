// import { useState, useEffect } from "react";
import { useGetData } from "../hooks/useGetData";

const Footer = () => {
  const { usersData, expenses } = useGetData();
  return (
    <div className="w-full h-[20vh] border border-yellow-300 flex items-center justify-around">
      <div className="text-text w-[40%] flex flex-col items-center">
        <h1 className="text-text">Usuarios:</h1>
        {usersData.length > 0 ? (
          <ul className="w-[60%]">
            {usersData.map((user) => (
              <li
                className="flex justify-between items-center border-b py-2"
                key={user.id}
              >
                <span>{user.name}</span>
                <span>${user.salary}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay usuarios ingresados</p>
        )}
      </div>
      <div className="text-text w-[40%] border flex flex-col items-center">
        <h1>Gastos:</h1>
        {expenses.length > 0 ? (
          <ul className="w-[60%]">
            {expenses.map((expense) => (
              <li
                className="flex justify-between items-center border-b py-2"
                key={expense.id}
              >
                <span>{expense.name}</span>
                <span>${expense.expense}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay gastos ingresados</p>
        )}
      </div>
    </div>
  );
};

export default Footer;
