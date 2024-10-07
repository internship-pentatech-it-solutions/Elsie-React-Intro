import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div>
       <nav>
        <ul  className='flex justify-center items-center space-x-20 text-xl font-semibold h-16  '>
            <a href=""><li  onClick={() => navigate("/")}>Home</li></a>
           <a href=""> <li  onClick={() => navigate("/shop")}>Shop</li></a>
            <a href=""><li  onClick={() => navigate("/about")}>About</li></a>
            <a href=""><li  onClick={() => navigate("/contact")}>Contact</li></a>
        </ul>


    </nav> 
    </div>
  )
}

export default Navbar