import React from 'react'
import { Link } from "react-router-dom";
import HeaderLogo from '../assets/Header-logo.png'

function Header() {
    // const history = useNavigate();
  return (
    <div className='absolute flex justify-between w-full px-20 py-4 pt-10'>
        <img className='h-16' alt="Babbage" src={HeaderLogo}/>
        <nav className='flex items-center'>
            <ul className='flex'>
                <li className='	hover:underline decoration-highRed decoration-4'>
                 <Link to="/projects">Proyectos</Link>
                </li>
                <li className='hover:underline decoration-highRed decoration-4'>
                 <Link className='p-6' to="/">Cultura</Link>
                </li>
            </ul>
            <Link to="/"><button className='h-fit px-8 py-4 text-highRed  rounded-lg border-2 border-highRed hover:bg-highRed hover:text-white active:bg-white active:text-highRed'>Inicio</button></Link>
        </nav>
    </div>
  )
}

export default Header