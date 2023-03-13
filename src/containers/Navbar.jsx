import React from 'react'
import {ImSearch} from 'react-icons/im'

function Navbar() {
  return (
    <div className='navbar w-full h-full'>

        <div className="navbar__container flex justify-center text-center py-5 ">
            
            <h1 className='text-red-600 font-bold text-4xl'>MOVIES-DB</h1>
            <ImSearch className="ml-4"size={28} color={'red'}/>
            
            </div>



    </div>
  )
}

export default Navbar