import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ExpenseContext } from "../context/ExpenseContext";

const Footer = () => {
  const { users } = useContext(UserContext);
  const { expenses } = useContext(ExpenseContext);
  const location = useLocation();
  const isUsersEmpty = !(users && users.length > 0 && location.pathname !== "/all-users");
  const isExpensesEmpty = !(expenses && expenses.length > 0 && location.pathname !== "/all-expenses");
  

  return (
    <footer
      className="w-full border-t border-t-border-line
    font-medium lg:text-lg sm:text-base text-text"
    >
      <div className="w-full flex items-center justify-evenly h-[15vh]">
        <Link
          to="/all-users"
          className={`bg-buttons text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border rounded ${
            isUsersEmpty
              ? " opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
        >
          Ver usuarios
        </Link>
        <Link
          to="/"
          className='bg-buttons text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border rounded'
        >
          Inicio
        </Link>
        <Link
          to="/all-expenses"
          className={`bg-buttons text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border rounded ${
            isExpensesEmpty
              ? " opacity-50 cursor-not-allowed pointer-events-none"
              : ""
          }`}
        >
          Ver Gastos
        </Link>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 md:flex-row md:justify-evenly ">
        <span>
          {new Date().getFullYear()} &copy; Todos los derechos reservados
        </span>
        <div className="flex items-center">
          Desarrollado con <span className="text-2xl px-1">&#9825;</span>
          por&nbsp;
          <Link
            to="https://www.linkedin.com/in/leonardo-manuel-tolaba/"
            className="underline  underline-offset-2"
            target={"_blank"}
          >
            LeoTolaba
          </Link>
        </div>
        <Link
          className="hover:underline  underline-offset-2"
          to="https://api.whatsapp.com/send?phone=+5401123937902&text=Hola,%20Me%20encanto%20tu%20portfolio!%20Queria%20contactarte!%20%F0%9F%92%99"
          target={"_blank"}
        >
          Whatsapp
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
