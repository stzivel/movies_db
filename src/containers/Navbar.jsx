import { Link } from "react-router-dom";
import Search from "../components/Search";
import { TbMovie } from "react-icons/tb";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

function Navbar() {
  const { watchlist } = useContext(WatchlistContext);
  return (
    <div className="navbar flex  items-center justify-between p-4 z-[100] w-full absolute ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          MOVIES-DB
        </h1>
      </Link>

      <Search />

      <div className="flex font-bold text-white">
        <Link to={"/watchlist"}>
          <TbMovie size={26} color={"red"} />
        </Link>
        {watchlist.length}
      </div>
    </div>
  );
}

export default Navbar;
