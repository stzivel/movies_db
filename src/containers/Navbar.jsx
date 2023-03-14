import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Search from "../components/Search";


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [query, setQuery] = useState('');
 
    
 

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleChange = (e)=>{
   
    setQuery(e.target.value);
  }



  return (
    <div className="navbar flex items-center justify-between p-4 z-[100] w-full absolute ">
      
      <Link to='/'>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          MOVIES-DB
        </h1>
      </Link>
      

<input
                onChange={handleChange}
                className='p-3 my-2 bg-gray-700 rouded'
                type='search'
                placeholder='Search'
                autoComplete='search'
              />

              <Search query = {query}/> 

               
    
              
                
                
              

              



      

      <div onClick={handleToggle} className="navbar__menu relative z-999 ">
        {toggleMenu ? (
          <RiCloseLine size={26} color={"red"} />
        ) : (
          <RiMenu3Line size={26} color={"red"} />
        )}

        <ul
          className={
            toggleMenu
              ? "fixed right-0 top-0 w-[20%] h-full border-r border-r-gray-900 bg-[#000300]/80 ease-in-out duration-500"
              : "ease-in-out duration-500 fixed right-[-100%]"
          }
        >
          <li className="text-red-600 font-bold  p-4 border-b border-gray-600">
            Home
          </li>
          <li className=" text-red-600 font-bold  p-4 border-b border-gray-600">
            Company
          </li>
          <li className=" text-red-600 font-bold  p-4 border-b border-gray-600">
            Resources
          </li>
          <li className=" text-red-600 font-bold  p-4 border-b border-gray-600">
            About
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <input
                onChange={(e) => setSearch(e.target.value)}
                className='p-3 my-2 bg-gray-700 rouded'
                type='search'
                placeholder='Search'
                autoComplete='search'
              />

              {console.log(search)} */
}
