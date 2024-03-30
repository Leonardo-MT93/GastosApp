import { Link } from "react-router-dom";
import { useGetData } from "../hooks/useGetData";

const HomePage = () => {

  const {usersData} = useGetData();
  const isDataEmpty = !(usersData && usersData.length > 1);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1>HomePage</h1>
      <div className="w-full flex flex-col items-center justify-evenly h-[50vh]">
        <Link to="/users" className="bg-buttons  hover:bg-buttons-hover text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border hover:border-buttons-hover rounded">Ingresar usuarios</Link>
        <Link to="/gastos" className={`bg-buttons text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border rounded ${isDataEmpty ? ' opacity-50 cursor-not-allowed pointer-events-none' : ''}`}>Ingresar Gastos</Link>
        <Link to="/balance" className="bg-buttons text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border rounded opacity-50 cursor-not-allowed">Ver Balance</Link>
      </div>
    </div>
  );
};

export default HomePage;
