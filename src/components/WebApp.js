import React from 'react'

function WebApp() {
  return (
    <div className='flex flex-col my-16 items-center'>
        {/* <p className='text-2xl pb-3 font-light leading-tight tracking-wider text-highRed'>Solo entra</p> */}
        <h3 className='text-4xl font-extrabold leading-tight tracking-[.14em] '>Servicio mediante la web</h3>
        <p className='w-1/2 text-center text-l text-grayText leading-normal tracking-widest'>Una solución para aquellos que no pueden acceder a las computadoras de UTJ, lo hagan mediante la web.</p>
        <a className='rounded-full mt-8 py-4 px-8 text-white bg-highRed border-2 border-highRed hover:bg-white hover:text-highRed active:bg-highRed' href='https://623177c3123d176573411da2--gallant-wiles-2e012f.netlify.app/'><button>Ir la página</button></a>
    </div>
  )
}

export default WebApp