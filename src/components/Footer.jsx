import { useState, useEffect } from "react";

const Footer = () => {
  const [data, setData] = useState(() => {
    const sessionData = localStorage.getItem("session");
    return sessionData ? JSON.parse(sessionData) : [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const sessionData = localStorage.getItem("session");
      setData(sessionData ? JSON.parse(sessionData) : []);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="w-full h-[20vh] border border-yellow-300">
      <h1 className="text-text">
        {data.length > 0 ? (
          data.map((user) => <div key={user.id}>{user.name}</div>)
        ) : (
          "No hay usuarios"
        )}
      </h1>
    </div>
  );
};

export default Footer;
