import { useContext, useRef, useState } from "react";
// import { AppContext } from "../context/AppContext";
import { UserContext } from "../context/UserContext";

const UsersFormPage = () => {
  const [name, setName] = useState("");
  const { addUser, users } = useContext(UserContext);
  const [salary, setSalary] = useState("");
  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const userInputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    if(!name || !salary) return setError(true);
    addUser({
      id: window.crypto.randomUUID(),
      name,
      salary,
    });
    setError(false);
    setName("");
    setSalary("");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);

    userInputRef.current.focus();
  };

  return (
    <div className="w-full h-[65vh] flex flex-col items-center justify-center">
      <h1 className="text-text text-2xl py-4">Ingresar usuarios </h1>
      <form
        className="w-[80%] h-[40vh] flex items-center justify-center "
        onSubmit={onSubmit}
      >
        <div className="w-[70%] h-24 flex items-center justify-center border border-yellow-200">
          <label className="text-text px-3 text-center " htmlFor="name">
            Usuario {users.length + 1}
          </label>
          <input
          ref={userInputRef}
            className="bg-zinc-600 text-white px-3 py-2 rounded-xl w-[15vw]  mx-2"
            type="text"
            placeholder="Ingresa el nombre de usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="bg-zinc-600 text-white px-3 py-2 rounded-xl w-[15vw]  mx-2"
            type="number"
            placeholder="Ingresa el salario del usuario"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <button
            type="submit"
            className="bg-buttons  hover:bg-buttons-hover text-buttons-text font-bold py-2 px-4 border-b-4 border-b-buttons-border hover:border-buttons-hover rounded"
          >
            +
          </button>
        </div>
      </form>
      <div className="w-full h-[10vh] flex flex-col items-center">
        <span className="text-text text-sm py-4">
          Total de usuarios: {users.length }
        </span>
        {alert && (
          <span className="text-green-500 text-sm py-4">
            El usuario se ha ingresado correctamente
          </span>
        )}
        {error && (
          <span className="text-red-500 text-sm py-4">
            Por favor ingrese un nombre y un salario
          </span>
        )}
      </div>
    </div>
  );
};

export default UsersFormPage;
