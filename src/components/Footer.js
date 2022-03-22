import React from 'react'
import Logo from '../assets/Header-logo.png'

function Footer() {
  return (
    <div className='flex px-5 py-10 items-center bg-black text-grayText md:p-20'>
        <div className='w-1/2'>
            <img className='w-2/3 md:w-1/3' alt='Babbage' src={Logo}/>
        </div>
        <div className='w-1/2 text-right text-sm'>
            <p>Todos los derechos reservados® 2022</p>
            <p>babbage@contacto.com</p>
            <a href='tel:3325979382'>+52 3325979382</a>

        </div>
    </div>
  )
}

export default Footer