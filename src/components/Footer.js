import React from 'react'
import Logo from '../assets/Header-logo.png'

function Footer() {
  return (
    <div className='flex p-20 items-center bg-black text-grayText'>
        <div className='w-1/2'>
            <img className='w-1/2' alt='Babbage' src={Logo}/>
            {/* <p className='w-1/2'>Babbage es una agencia digital que brinda soluciones tecnológicas eficientes a las empresas tradicionales</p> */}
        </div>
        <div className='w-1/2 text-right'>
            <p>Todos los derechos reservados® 2022</p>
            <p>babbage@contacto.com</p>
            <a href='tel:3325979382'>+52 3325979382</a>

        </div>
    </div>
  )
}

export default Footer