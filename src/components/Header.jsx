import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full  flex items-center justify-center text-2xl py-4 border-b border-b-border-line">
      <Link to="/">
        <h1 className="text-text font-semibold text-4xl">DiviGastos</h1>
      </Link>
    </div>
  );
};

export default Header;
