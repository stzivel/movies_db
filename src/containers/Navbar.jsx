import { Link } from "react-router-dom";
import Search from "../components/Search";

function Navbar() {
  return (
    <div className="navbar flex  items-center justify-between p-4 z-[100] w-full absolute ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          MOVIES-DB
        </h1>
      </Link>

      <Search />
    </div>
  );
}

export default Navbar;
